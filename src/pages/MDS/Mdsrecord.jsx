import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, Edit } from "lucide-react";
import "./Mdsrecord.css";

const Mdsrecord = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchPatients = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/mdspatient", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Fetched response:", response.data);
      setPatients(response.data.mdspatients || []);
    } catch (error) {
      console.error("Error fetching patient data:", error);
      alert("Failed to load patients");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchPatients();
  }, []);

  const handleView = (id) => navigate(`/mdspatient/${id}`);
  const handleUpdate = (id) => navigate(`/mdsupdate/${id}`);
  const handleFollowupView = (id) => navigate(`/mdsfollowupcard/${id}`);
  const handleFollowupEdit = (id) => navigate(`/mdsfollowup/${id}/edit`);

  return (
    <div className="d-container">
      <h1 className="heading">MDS Patient Case Records</h1>
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
                    <button className="btn view-btn" onClick={() => handleFollowupView(patient._id)}>
                      <Eye size={16} /> View
                    </button>
                    <button className="btn update-btn" onClick={() => handleFollowupEdit(patient._id)}>
                      <Edit size={16} /> Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No MDS patient case records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Mdsrecord;
