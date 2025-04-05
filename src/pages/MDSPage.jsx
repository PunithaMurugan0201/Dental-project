import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../AuthContext";
import "./BDSLogin.css"; 

const MDSPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ reg_no: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", credentials);
      
      if (response.data.success) {
        login(response.data.user);
        navigate("/homemds");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError(error.response?.data?.error || "Error logging in.");
    }
  };

  return (
    <div className="login-container">
      <h2>BDS Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="reg_no"
          placeholder="Registration Number"
          value={credentials.reg_no}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default MDSPage;
