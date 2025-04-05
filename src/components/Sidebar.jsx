import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Sidebar.css"; // Ensure your sidebar styles are included

const Sidebar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (section) => {
    // Toggle dropdown visibility based on the section clicked
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  return (
    <nav>
      <ul className="nav-links">
      <li>
          <button className="contact" onClick={() => console.log("Home")}>
            Home
          </button>
        </li>
        <li className={activeDropdown === "faculty" ? "active" : ""}>
          <button
            className="dropbtn"
            onClick={() => toggleDropdown("faculty")}
            aria-label="Toggle faculty dropdown"
          >
            Faculty &#9662;
          </button>
          {activeDropdown === "faculty" && (
            <div className="dropdown">
              <button onClick={() => console.log("Faculty Research")}>Faculty Research</button>
              <button onClick={() => console.log("Faculty Circular")}>Faculty Circular</button>
            </div>
          )}
        </li>
        <li className={activeDropdown === "academics" ? "active" : ""}>
          <button
            className="dropbtn"
            onClick={() => toggleDropdown("academics")}
            aria-label="Toggle academics dropdown"
          >
            Academics &#9662;
          </button>
          {activeDropdown === "academics" && (
            <div className="dropdown">
              <Link to="/bds">BDS</Link>
              <Link to="/mds">MDS</Link>
             
            </div>
          )}
        </li>
        <li className={activeDropdown === "clinical" ? "active" : ""}>
          <button
            className="dropbtn"
            onClick={() => toggleDropdown("clinical")}
            aria-label="Toggle clinical dropdown"
          >
            Clinical &#9662;
          </button>
          {activeDropdown === "clinical" && (
            <div className="dropdown">
              <button onClick={() => console.log("Patients Appointment")}>Patients Appointment</button>
              <button onClick={() => console.log("Patients Records")}>Patients Records</button>
              <button onClick={() => console.log("Patients Reports")}>Patients Reports</button>
              <button onClick={() => console.log("Case Performance")}>Case Performance</button>
            </div>
          )}
        </li>
        <li>
          <button className="contact" onClick={() => console.log("Contact Us")}>
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
