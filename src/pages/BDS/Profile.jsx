// frontend/components/Profile.js
import { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = ({ user }) => {
  const regNo = user?.reg_no;

  const [profile, setProfile] = useState({
    username: "",
    email: "",
    reg_no: regNo || "",
    course: "",
    year: "",
    university: "",
    contact: "",
    bio: "",
    profilePic: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    if (!regNo) {
      setError("Error: Registration number not found!");
      return;
    }

    setLoading(true);
    const token = localStorage.getItem("token");

    axios
      .get(`${API_URL}/api/profile/${regNo}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data && response.data.profile) {
          setProfile(response.data.profile);
          setError("");
        } else {
          setError("Profile data is missing in the response.");
        }
      })
      .catch((err) => {
        setError(
          `Error fetching profile: ${err.response ? err.response.data.message : err.message}`
        );
      })
      .finally(() => setLoading(false));
  }, [regNo]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${API_URL}/api/profile/${regNo}/upload-pic`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setProfile((prev) => ({
        ...prev,
        profilePic: `${API_URL}${response.data.profile.profilePic}`,
      }));
      setSuccessMessage("Profile picture updated successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      setError("Error uploading image. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!regNo) {
      setError("Error: Registration number is missing!");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${API_URL}/api/profile/${regNo}`, profile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccessMessage("Profile updated successfully!");
      setError("");
    } catch (error) {
      setError(`Error updating profile: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-img-container">

          <img
            src={profile.profilePic ? `${API_URL}${profile.profilePic}` : "https://placekitten.com/100/100"}
            alt="Profile"
            className="profile-img"
          />

          <label htmlFor="profilePic" className="upload-icon">
            📷 Edit
          </label>
          <input
            type="file"
            id="profilePic"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden-input"
          />
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form className="profile-form" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={profile.username} disabled />

        <label>Email:</label>
        <input type="email" name="email" value={profile.email} disabled />

        <label>Registration Number:</label>
        <input type="text" name="reg_no" value={profile.reg_no} disabled />

        <label>Course:</label>
        <input type="text" name="course" value={profile.course} onChange={handleChange} required />

        <label>Year of Study:</label>
        <input type="text" name="year" value={profile.year} onChange={handleChange} required />

        <label>University Name:</label>
        <input type="text" name="university" value={profile.university} onChange={handleChange} required />

        <label>Contact Number:</label>
        <input type="tel" name="contact" value={profile.contact} onChange={handleChange} required />

        <label>Bio:</label>
        <textarea name="bio" value={profile.bio} onChange={handleChange} rows="3" />

        <button className="profile-btn" type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
