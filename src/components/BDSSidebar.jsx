import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/BDSSidebar.css";

const BDSSidebar = ({ user, setUser, isOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(isOpen));
  }, [isOpen]);

  const handleLogout = () => {
    console.log("Logging out..."); // Debugging log
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    if (setUser) {
      setUser(null);
    } else {
      console.error("setUser is not passed to BDSSidebar. Check App.js.");
    }

    navigate("/bds");
    setTimeout(() => window.location.reload(), 100);
  };

  const menuItems = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Dashboard", path: "/dashboard", icon: "📋" },
    { name: "Attendance", path: "/attendance", icon: "📅" },
    { name: "Marks", path: "/marks", icon: "📊" },
    { name: "Profile", path: "/profile", icon: "👤" },
    { name: "Cases Studies", path: "/casestudy", icon: "📋" },
    { name: "Study Materials", path: "/studymaterials", icon: "📖" },
    { name: "Logout", action: handleLogout, icon: "🚪" },
  ];

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <button onClick={() => setIsSidebarOpen(!isOpen)} className="toggle-btn">
          {isOpen ? "❌" : "☰"}
        </button>
      </div>

      <div className="sidebar-title">
        {user ? `Welcome, ${user.username}!` : "Welcome!"}
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.action ? (
                <button onClick={item.action} className="sidebar-link logout-btn">
                  <span>{item.icon}</span> {isOpen && item.name}
                </button>
              ) : (
                <button onClick={() => navigate(item.path)} className="sidebar-link">
                  <span>{item.icon}</span> {isOpen && item.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default BDSSidebar;
