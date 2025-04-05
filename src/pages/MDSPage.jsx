import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./BDSLogin.css"; // Use same styling or create a separate one if needed

const MDSPage = ({ setUser }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ reg_no: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/login/mds", credentials);

      console.log("Login Response:", response.data); // Debugging purpose

      if (response.data.success) {
        // Store token and user in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Update user in app state
        if (setUser) {
          setUser(response.data.user);
        }

        // Redirect to homemds page
        navigate("/homemds");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Error logging in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>MDS Login</h2>
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
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default MDSPage;
