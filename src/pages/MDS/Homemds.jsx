import React from "react";
import { Link, useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./Homemds.css";

const Homemds = ({ user, setUser }) => {
  const navigate = useNavigate();

  

  return (
    <div className="dashboard-container">
      <main className="main-content">
        <h1>Master of Dental Surgery</h1>

        <div className="container-grid">
          <div className="container-item"onClick={() => navigate('/mdsrecord')}>
            <div className="icon">
              <i className="fas fa-book"></i>
            </div>
            <h2>Case Studies</h2>
          </div>

          <div className="container-item" onClick={() => navigate('/attendance')}>
            <div className="icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Attendance</h2>
          </div>

          <div className="container-item" onClick={() => navigate('/internal marks')}>
            <div className="icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h2>Internal Marks</h2>
          </div>

          

          <div className="container-item" onClick={() => navigate('/profile')}>
            <div className="icon">
              <i className="fas fa-user"></i>
            </div>
            <h2>User Profile</h2>
          </div>

          <div className="container-item" onClick={() => navigate('/study materials')}>
            <div className="icon">
              <i className="fas fa-book-open"></i>
            </div>
            <h2>Study Materials</h2>
          </div>
        </div>

        
      </main>
    </div>
  );
};

export default Homemds;
