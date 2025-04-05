import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./ExamSchedule.css";

const ExamSchedule = () => {
  const [exams, setExams] = useState([]);
  const [studentName, setStudentName] = useState("");  // ✅ Store name separately
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user || !user.reg_no) {
      setError("User registration number is missing. Please log in again.");
      setLoading(false);
      return;
    }

    fetchExamSchedule(user.reg_no);
  }, []);

  const fetchExamSchedule = async (reg_no) => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    console.log(`Fetching exam schedule for Reg No: ${reg_no} from ${API_URL}`);

    try {
      const response = await axios.get(`${API_URL}/api/examschedule/${reg_no}`);
      setExams(response.data.exams);  // ✅ Extract exams array
      setStudentName(response.data.name);  // ✅ Store student name
    } catch (err) {
      console.error("Error fetching exam schedule:", err);
      setError("Failed to fetch exam schedule. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = () => {
    const input = document.getElementById("exam-schedule");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("Exam_Schedule.pdf");
    });
  };

  if (loading) return <p className="loading">Loading exam schedule...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="exam-schedule-container">
      <h2 className="title">📅 Exam Schedule</h2>

      <div className="student-info">
        <p><strong>👤 Name:</strong> {studentName || "N/A"}</p>  {/* ✅ Use studentName */}
        <p><strong>🎓 Reg Number:</strong> {user.reg_no}</p>
      </div>

      <div id="exam-schedule" className="schedule-table">
        {exams.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>📖 Subject</th>
                <th>📅 Date</th>
                <th>⏰ Time</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam, index) => (
                <tr key={index}>
                  <td>{exam.subject}</td>
                  <td>{new Date(exam.date).toLocaleDateString()}</td>
                  <td>{exam.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-exams">No exams found for your registration number.</p>
        )}
      </div>

      <button className="download-btn" onClick={downloadPDF}>📄 Download PDF</button>
    </div>
  );
};

export default ExamSchedule;
