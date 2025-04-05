import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import BDSSidebar from "./components/BDSSidebar";

const Layout = ({ isSidebarOpen, user }) => { // Accept both props
  const location = useLocation();
  
  return (
    <div className="app-container">
      {/* ✅ Sidebar logic based on user role */}
      {user?.role === "bdslogin" ? (
        <BDSSidebar isOpen={isSidebarOpen} user={user} />
      ) : (
        <Sidebar isOpen={isSidebarOpen} user={user} />
      )}

      {/* ✅ Dynamic content layout */}
      <div className={`content ${isSidebarOpen ? "with-sidebar" : "full-width"}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
