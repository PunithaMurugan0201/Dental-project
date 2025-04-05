import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Attendance.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Attendance = ({ user }) => {
  const [attendance, setAttendance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Received user prop in Attendance:", user);
    
    if (!user || !user.reg_no) {
      setError("User registration number is missing.");
      setLoading(false);
      return;
    }

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    console.log(`Fetching attendance for Reg No: ${user.reg_no} from ${API_URL}`);

    axios
      .get(`${API_URL}/attendance/${user.reg_no}`)
      .then((res) => {
        console.log("Attendance Data:", res.data);
        setAttendance(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching attendance:", err);
        setError("Failed to fetch attendance data. Please try again later.");
        setLoading(false);
      });
  }, [user?.reg_no]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!attendance || !attendance.student) return <p className="no-record">No attendance record found</p>;

  const { batch, month, year, student } = attendance;

  const categories = [
    { name: "Theory", data: student.theory },
    { name: "Practical", data: student.practical },
    { name: "Clinical", data: student.clinical }
  ];

  return (
    <div className="attendance-container">
      <h2 className="title">📚 Attendance Details</h2>
      <div className="batch-info">
        <p><strong>Batch:</strong> {batch}</p>
        <p><strong>Month:</strong> {month}</p>
        <p><strong>Year:</strong> {year}</p>
      </div>

      <div className="student-info">
        <p><strong>👤 Name:</strong> {student.name}</p>
        <p><strong>🎓 Reg Number:</strong> {student.reg_no}</p>
      </div>

      <div className="attendance-grid">
        {categories.map(({ name, data }, index) => (
          <div key={index} className="attendance-card">
            <h3>{name} Attendance</h3>
            <div className="progress-container">
              <CircularProgressbar
                value={data?.percentage || 0}
                text={`${data?.percentage || 0}%`}
                styles={buildStyles({
                  textColor: "#333",
                  pathColor: data?.percentage >= 75 ? "#4caf50" : "#ff9800",
                  trailColor: "#ddd"
                })}
              />
            </div>
            <p><strong>Total Classes:</strong> {data?.total || 0}</p>
            <p><strong>Attended:</strong> {data?.attended || 0}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;