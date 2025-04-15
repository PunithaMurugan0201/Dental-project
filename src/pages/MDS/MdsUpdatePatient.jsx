import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UpdatePatient.css"; // Ensure CSS is imported

const UpdatePatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token"); // 🔥 Get token from local storage
  
    axios
      .get(`http://localhost:5000/api/mdspatient/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setPatient(response.data))
      .catch((error) => console.error("Error fetching patient:", error));
  }, [id]);
  

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // 🔥 Get token here too
  
    try {
      await axios.put(
        `http://localhost:5000/api/mdspatient/${id}`,
        patient,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Patient updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };
  

  const fields = [
    { "label": "Name", "name": "name", "type": "text" },
    { "label": "Serial No", "name": "serialNo", "type": "text" },
    { "label": "Ortho No", "name": "orthoNo", "type": "text" },
    { "label": "Op No", "name": "opNo", "type": "text" },
    { "label": "Age", "name": "age", "type": "text" },
    { "label": "Address", "name": "address", "type": "text" },
    { "label": "Occupation", "name": "occupation", "type": "text" },
    { "label": "Telephone", "name": "telephone", "type": "text" },
    { "label": "Sex", "name": "sex", "type": "text" },
    { "label": "Chief Complaint", "name": "chiefComplaint", "type": "text" },
    { "label": "Medical History", "name": "medicalHistory", "type": "text" },
    { "label": "Surgical History", "name": "surgicalHistory", "type": "text" },
    { "label": "Dental History", "name": "dentalHistory", "type": "text" },
    { "label": "Family History", "name": "familyHistory", "type": "text" },
    { "label": "Personal History", "name": "personalHistory", "type": "text" },
    { "label": "Build", "name": "build", "type": "text" },
    { "label": "Height", "name": "height", "type": "text" },
    { "label": "Weight", "name": "weight", "type": "text" },
    { "label": "Gait", "name": "gait", "type": "text" },
    { "label": "Posture", "name": "posture", "type": "text" },
    { "label": "Body Tone", "name": "bodyTone", "type": "text" },
    { "label": "Finger Thumb Sucking", "name": "fingerThumbSucking", "type": "text" },
    { "label": "Dummy Sucking", "name": "dummysucking", "type": "text" },
    { "label": "Nail Biting / Lip Biting", "name": "nailBitingLipbiting", "type": "text" },
    { "label": "Tongue Thrusting / Lip Biting", "name": "tonguethrustingLipbiting", "type": "text" },
    { "label": "Bruxism", "name": "bruxism", "type": "text" },
    { "label": "Mouth Breathing", "name": "mouthBreathing", "type": "text" },
    { "label": "Other Habits", "name": "otherhabits", "type": "text" },
    { "label": "Speech Evaluation", "name": "speechEvaluation", "type": "text" },
    { "label": "Voice Quality", "name": "voiceQuality", "type": "text" },
    { "label": "Circumoral Muscle Tone", "name": "circumoralMuscleTone", "type": "text" },
    { "label": "Respiration", "name": "respiration", "type": "text" },
    { "label": "Deglutition", "name": "deglutition", "type": "text" },
    { "label": "Shape of the Head", "name": "shapeoftheHead", "type": "text" },
    { "label": "Shape of the Face", "name": "shapeoftheFace", "type": "text" },
    { "label": "Facial Profile", "name": "facialprofile", "type": "text" },
    { "label": "Facial Divergence", "name": "facialdivergence", "type": "text" },
    { "label": "Facial Symmetry", "name": "facialsymmetry", "type": "text" },
    { "label": "Facial Proportions", "name": "facialproportions", "type": "text" },
    { "label": "Nasolabial Angle", "name": "nasolabialangle", "type": "text" },
    { "label": "Lips", "name": "lips", "type": "text" },
    { "label": "Menolabial Sulcus", "name": "menolabialsulcus", "type": "text" },
    { "label": "Chin", "name": "chin", "type": "text" },
    { "label": "Anteroposterior Jaw Relationship", "name": "anteroposteriorjawrelationship", "type": "text" },
    { "label": "Growth Pattern", "name": "growthPattern", "type": "text" },
    { "label": "Mucosa", "name": "mucosa", "type": "text" },
    { "label": "Tongue Size", "name": "tonguesize", "type": "text" },
    { "label": "Tongue Function", "name": "tonguefunction", "type": "text" },
    { "label": "Palate", "name": "palate", "type": "text" },
    { "label": "Gingiva", "name": "gingiva", "type": "text" },
    { "label": "Frenilabial", "name": "frenilabial", "type": "text" },
    { "label": "Frenibuccal", "name": "frenibuccal", "type": "text" },
    { "label": "Frenilingual", "name": "frenilingual", "type": "text" },
    { "label": "Teeth Present", "name": "teethpresent", "type": "text" },
    { "label": "Dental Age", "name": "dentalage", "type": "text" },
    { "label": "Shape 1", "name": "shape1", "type": "text" },
    { "label": "Shape 2", "name": "shape2", "type": "text" },
    { "label": "Rotations 1", "name": "rotations1", "type": "text" },
    { "label": "Rotations 2", "name": "rotations2", "type": "text" },
    { "label": "Crowding 1", "name": "crowding1", "type": "text" },
    { "label": "Crowding 2", "name": "crowding2", "type": "text" },
    { "label": "Activation Schedule 1", "name": "activationSchedule1", "type": "text" },
    { "label": "Activation Schedule 2", "name": "activationSchedule2", "type": "text" },
    { "label": "Retention 1", "name": "retention1", "type": "text" },
    { "label": "Retention 2", "name": "retention2", "type": "text" },
    { "label": "Right", "name": "right", "type": "text" },
    { "label": "Left", "name": "left", "type": "text" },
    { "label": "Overjet", "name": "overjet", "type": "text" },
    { "label": "Overbite", "name": "overbite", "type": "text" },
    { "label": "Midline", "name": "midline", "type": "text" },
    { "label": "Porterior", "name": "porterior", "type": "text" },
    { "label": "Maximouth", "name": "maximouth", "type": "text" },
    { "label": "VDO", "name": "vdo", "type": "text" },
    { "label": "VDR", "name": "vdr", "type": "text" },
    { "label": "Freeway", "name": "freeway", "type": "text" },
    { "label": "Maxi Forward", "name": "maxiforward", "type": "text" },
    { "label": "TMJ Examine", "name": "tmjexamine", "type": "text" },
    { "label": "VTO", "name": "vto", "type": "text" },
    { "label": "Radiography", "name": "radiography", "type": "text" },
    { "label": "Bite", "name": "bite", "type": "text" },
    { "label": "Cephalogram", "name": "cephalogram", "type": "text" },
    { "label": "OPG", "name": "opg", "type": "text" },
    { "label": "Others", "name": "others", "type": "text" },
    { "label": "Soft Tissue", "name": "softtissue", "type": "text" },
    { "label": "Dental", "name": "dental", "type": "text" },
    { "label": "Skeletal", "name": "skeletal", "type": "text" },
    { "label": "Provisional", "name": "provisional", "type": "text" },
    { "label": "Treatment", "name": "treatment", "type": "text" },
    { "label": "Modality", "name": "modality", "type": "text" },
    { "label": "Appliance", "name": "appliance", "type": "text" },
    { "label": "Duration", "name": "duration", "type": "text" },
    { "label": "Activation Schedule", "name": "activationSchedule", "type": "text" },
    { "label": "Retention", "name": "retention", "type": "text" },
    { "label": "Treatment Started On", "name": "treatmentStartedOn", "type": "date" },
    { "label": "Treatment Completed On", "name": "treatmentCompletedOn", "type": "date" },
    { "label": "Case Presentation", "name": "casePresentation", "type": "date" },
    { "label": "Impression", "name": "impression", "type": "date" },
    { "label": "Cast", "name": "cast", "type": "date" },
    { "label": "Wire Bending", "name": "wireBending", "type": "date" },
    { "label": "Processing", "name": "processing", "type": "date" },
    { "label": "Finishing", "name": "finishing", "type": "date" },
    { "label": "Appliance Insertion", "name": "applianceInsertion", "type": "date" }
  ]
    ;

  return (
    <div className="update-container">
      <h2>Update Patient Details</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((inputField, index) => (
          <div className="form-group" key={index}>
            <label className="form-label">{inputField.label}:</label>
            <input
              type={inputField.type}
              name={inputField.name}
              value={patient[inputField.name] || ""}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn save-btn">Update</button>
      </form>
      <button className="btn back-btn" onClick={() => navigate(-1)}>Cancel</button>
    </div>
  );
};

export default UpdatePatient;