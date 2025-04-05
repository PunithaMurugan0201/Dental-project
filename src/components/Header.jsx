import React from "react";
import "../pages/Header.css";
import logo from '../assets/images/logo.jpg'; // Use import instead of require

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" /> {/* Use the imported logo */}
      </div>
      <div className="site-name">
        <h1>MAHATMA GANDHI</h1>
        <h1>POSTGRADUATE OF MEDICAL SCIENCES (MGPGIDS)</h1>
        <h3>DEPARTMENT OF ORTHODONTICS</h3>
        <p>GOVERNMENT OF PUDUCHERRY INSTITUTION</p>
      </div>
    </header>
  );
};

export default Header;