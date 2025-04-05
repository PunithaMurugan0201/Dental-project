import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, Edit, Trash2, Download } from "lucide-react";
import jsPDF from "jspdf";
import "./Mdsrecord.css";

const Mdsrecord = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch patient data
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/patients");
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, []);

  // Redirect to ViewPatient page
  const handleView = (id) => {
    navigate(`/patient/${id}`);
  };

  // Redirect to UpdatePatient page
  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  // Delete patient record
  

  // Download patient details as a PDF
  const handleDownload = (patient) => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.text("Patient Case Study", 20, 20);
    doc.setFont("helvetica", "normal");

    let yOffset = 40; // Starting Y position

    // Extract patient details and format them
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
    <div className="d-container">
      <h1 className="heading">Patient Case Records</h1>

      <button className="btn add-record-btn" onClick={() => navigate("/mdscasestudy")}>
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
              <th>Actions</th>
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
                      <Edit size={16} /> Update
                    </button>
                    
                    <button className="btn download-btn" onClick={() => handleDownload(patient)}>
                      <Download size={16} /> Download
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

export default Mdsrecord;
