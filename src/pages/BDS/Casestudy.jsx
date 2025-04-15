import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, Edit, Trash2, Download } from "lucide-react";
import jsPDF from "jspdf";
import "./Casestudy.css";

const Casestudy = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchPatients = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/patients", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Fetched response:", response.data); // ✅ Add this
      setPatients(response.data.patients); // ✅ FIXED
    } catch (error) {
      console.error("Error fetching patient data:", error);
      alert("Failed to load patients");
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    if (!token) {
      navigate("/login"); // or any route
      return;
    }
  
    fetchPatients();
  }, []);
  

  const handleView = (id) => navigate(`/patient/${id}`);
  const handleUpdate = (id) => navigate(`/update/${id}`);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      try {
        await axios.delete(`http://localhost:5000/api/patients/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPatients(patients.filter((patient) => patient._id !== id));
      } catch (error) {
        console.error("Delete failed:", error);
        alert("Failed to delete patient");
      }
    }
  };

  const handleDownload = (patient) => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text("Patient Case Study", 20, 20);
    doc.setFont("helvetica", "normal");

    let yOffset = 40;

    const details = [
      { label: "Name", value: patient.name },
      { label: "S.No", value: patient.serialNo },
      { label: "Ortho No.", value: patient.orthoNo },
      { label: "O.P. No.", value: patient.opNo },
      { label: "Age", value: patient.age },
      { label: "Address", value: patient.address },
      { label: "Occupation", value: patient.occupation },
      { label: "Telephone No.", value: patient.telephone },
    ];

    details.forEach(({ label, value }) => {
      doc.text(`${label}: ${value || "N/A"}`, 20, yOffset);
      yOffset += 10;
    });

    doc.save(`Patient_${patient.name}.pdf`);
  };

  return (
    <div className="dashboard-container">
      <h1 className="heading">Patient Case Records</h1>
      <button className="btn add-record-btn" onClick={() => navigate("/newpatient")}>
        Add Record
      </button>

      {loading ? (
        <p>Loading patient records...</p>
      ) : (
        <table className="patient-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>OPD No</th>
              <th>Contact</th>
              <th>Case Study</th>
              <th>Followup</th>
            </tr>
          </thead>
          <tbody>
            {patients.length > 0 ? (
              patients.map((patient) => (
                <tr key={patient._id}>
                  <td>{patient.name}</td>
                  <td>{patient.opNo}</td>
                  <td>{patient.telephone}</td>
                  <td>
  <button className="btn view-btn" onClick={() => handleView(patient._id)}>
    <Eye size={16} /> View
  </button>
  <button className="btn update-btn" onClick={() => handleUpdate(patient._id)}>
    <Edit size={16} /> Edit
  </button>
</td>
<td>
  <button className="btn view-btn" onClick={() => navigate(`/followupcard/${patient._id}`)}>
    <Eye size={16} /> View
  </button>
  <button className="btn update-btn" onClick={() => navigate(`/followup/${patient._id}/edit`)}>
    <Edit size={16} /> Edit
  </button>
</td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No patient case records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Casestudy;
