import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";  
import BDSSidebar from "./components/BDSSidebar"; 
import Home from "./pages/Home";
import BDSLogin from "./pages/BDSLogin";
import MDSPage from "./pages/MDSPage";
import Dashboard from "./pages/BDS/Dashboard";
import Profile from "./pages/BDS/Profile";
import Attendance from "./pages/BDS/Attendance";
import Marks from "./pages/BDS/Marks";
import StudyMaterials from "./pages/BDS/StudyMaterials";
import ExamSchedule from "./pages/BDS/ExamSchedule";
import Newpatient from "./pages/BDS/Newpatient";
import ViewPatient from "./pages/BDS/ViewPatient";
import UpdatePatient from "./pages/BDS/UpdatePatient";
import MdsViewPatient from "./pages/MDS/MdsViewPatient";
import MdsUpdatePatient from "./pages/MDS/MdsUpdatePatient";

// MDS Specific Pages
import Homemds from "./pages/MDS/Homemds";
import Casestudy from "./pages/BDS/Casestudy";
import Mdscasestudy from "./pages/MDS/Mdscasestudy";
import Mdsrecord from "./pages/MDS/Mdsrecord";
import FollowupCard from "./pages/BDS/FollowUpCard"; 
import MdsFollowupCard from "./pages/MDS/MdsFollowupCard"; 

function App() {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();  

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored User from localStorage:", storedUser);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");  
  };

  return (
    <div className="app-container">
      <Header />

      <div className="content-container">
        {/* Sidebar Rendering */}
        {user === null ? (
          <Sidebar isOpen={isSidebarOpen} />
        ) : (
          <BDSSidebar 
            isOpen={isSidebarOpen} 
            setIsSidebarOpen={setIsSidebarOpen} 
            onLogout={handleLogout} 
          />
        )}

        <main className={`main-content ${isSidebarOpen ? "with-sidebar" : "full-width"}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bds" element={<BDSLogin setUser={setUser} />} />
            <Route path="/mds" element={<MDSPage setUser={setUser} />} />

            {user ? (
              <>
                <Route path="/dashboard" element={<Dashboard user={user} />} />
                <Route path="/profile" element={<Profile user={user} />} />
                <Route path="/attendance" element={<Attendance user={user} />} />
                <Route path="/marks" element={<Marks user={user} />} />
                <Route path="/studymaterials" element={<StudyMaterials user={user} />} />
                <Route path="/examschedule" element={<ExamSchedule user={user} />} />
                <Route path="/newpatient" element={<Newpatient user={user} />} />
                <Route path="/patient/:id" element={<ViewPatient user={user} />} />
                <Route path="/update/:id" element={<UpdatePatient user={user} />} />
                <Route path="/mdspatient/:id" element={<MdsViewPatient user={user} />} />
                <Route path="/mdsupdate/:id" element={<MdsUpdatePatient user={user} />} />
                <Route path="/followupcard/:patientId" element={<FollowupCard user={user} />} />
                <Route path="/mdsfollowupcard/:patientId" element={<MdsFollowupCard user={user} />} />
                {/* MDS Specific Routes */}
                <Route path="/homemds" element={<Homemds user={user} />} />
                <Route path="/casestudy" element={<Casestudy user={user} />} />
                <Route path="/mdscasestudy" element={<Mdscasestudy user={user} />} />
                <Route path="/mdsrecord" element={<Mdsrecord user={user} />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" replace />} />
            )}
          </Routes>
        </main>
      </div>

    
    </div>
  );
}

export default App;
