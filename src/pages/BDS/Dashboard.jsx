import React from "react";
import { Link, useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      

      {/* Main content area */}
      <div className="dashboard-container">
        <main className="main-content">
          <h1>Bachelor of Dental Surgery</h1>

          <div className="container-grid">
            {/* Case Study Container */}
            <Link to="/casestudy" className="container-item">
              <div className="icon">
                <i className="fas fa-book"></i>
              </div>
              <h2>Case Studies</h2>
            </Link>

            {/* Attendance Container */}
            <div className="container-item" onClick={() => navigate('/attendance')}>
              <div className="icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h2>Attendance</h2>
            </div>

            {/* Internal Marks Container */}
            <div className="container-item" onClick={() => navigate('/marks')}>
              <div className="icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h2>Internal Marks</h2>
            </div>

            {/* Examination Schedules Container */}
            <div className="container-item" onClick={() => navigate('/examschedule')}>
              <div className="icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h2>Examination Schedules</h2>
            </div>

            <div className="container-item" onClick={() => navigate('/profile')}>
              <div className="icon">
                <i className="fas fa-user"></i>
              </div>
              <h2>User Profile</h2>
            </div>

            <div className="container-item" onClick={() => navigate('/studymaterials')}>
              <div className="icon">
                <i className="fas fa-book-open"></i>
              </div>
              <h2>Study Materials</h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
