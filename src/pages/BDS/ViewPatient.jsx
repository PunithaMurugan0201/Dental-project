import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ViewPatient.css"; // Import the CSS file

const ViewPatient = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    axios
      .get(`http://localhost:5000/api/patients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setPatient(response.data))
      .catch((error) => console.error("Error fetching patient:", error));
  }, [id]);
  

  if (!patient) return <p className="loading-text">Loading patient details...</p>;

  return (
    <div className="view-container">
      <h2 className="view-title">{patient.name}'s Case Details</h2>

      {/* General Fields */}
      <div className="view-section">
        <h3 className="section-title">General Information</h3>
        <p><strong>S.No:</strong> {patient.serialNo}</p>
        <p><strong>Ortho No.:</strong> {patient.orthoNo}</p>
        <p><strong>O.P. No.:</strong> {patient.opNo}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Sex:</strong> {patient.sex}</p>
        <p><strong>Address:</strong> {patient.address}</p>
        <p><strong>Occupation:</strong> {patient.occupation}</p>
        <p><strong>Telephone No.:</strong> {patient.telephone}</p>
      </div>

      {/* Medical History Fields */}
      <div className="view-section">
        <h3 className="section-title">Medical Records</h3>
        <p><strong>Chief Complaint:</strong> {patient.chiefComplaint}</p>
        <p><strong>Medical History:</strong> {patient.medicalHistory}</p>
        <p><strong>Surgical History:</strong> {patient.surgicalHistory}</p>
        <p><strong>Past Dental History:</strong> {patient.dentalHistory}</p>
        <p><strong>Family History:</strong> {patient.familyHistory}</p>
        <p><strong>Personal History:</strong> {patient.personalHistory}</p>
      </div>

      <div className="view-section">
        <h3 className="section-title">Medical Records</h3>

        {/* General Information */}
        <p><strong>Build:</strong> {patient.build}</p>
        <p><strong>Height:</strong> {patient.height} cm</p>
        <p><strong>Weight:</strong> {patient.weight} kg</p>
        <p><strong>Gait:</strong> {patient.gait}</p>
        <p><strong>Posture:</strong> {patient.posture}</p>
        <p><strong>Body Tone:</strong> {patient.bodyTone}</p>

        {/* Habitual Factors */}
        <h4>Habitual Factors</h4>
        <p><strong>Finger Thumb Sucking:</strong> {patient.fingerThumbSucking ? "Yes" : "No"}</p>
        <p><strong>Dummy Sucking:</strong> {patient.dummysucking ? "Yes" : "No"}</p>
        <p><strong>Nail Biting / Lip Biting:</strong> {patient.nailBitingLipbiting ? "Yes" : "No"}</p>
        <p><strong>Tongue Thrusting / Lip Biting:</strong> {patient.tonguethrustingLipbiting ? "Yes" : "No"}</p>
        <p><strong>Bruxism:</strong> {patient.bruxism ? "Yes" : "No"}</p>
        <p><strong>Mouth Breathing:</strong> {patient.mouthBreathing ? "Yes" : "No"}</p>
        <p><strong>Other Habits:</strong> {patient.otherhabits}</p>

        {/* Speech & Respiration */}
        <h4>Speech & Respiration</h4>
        <p><strong>Speech Evaluation:</strong> {patient.speechEvaluation}</p>
        <p><strong>Voice Quality:</strong> {patient.voiceQuality}</p>
        <p><strong>Circumoral Muscle Tone:</strong> {patient.circumoralMuscleTone}</p>
        <p><strong>Respiration:</strong> {patient.respiration}</p>
        <p><strong>Deglutition:</strong> {patient.deglutition}</p>

        {/* Facial Structure */}
        <h4>Facial Structure</h4>
        <p><strong>Shape of the Head:</strong> {patient.shapeoftheHead}</p>
        <p><strong>Shape of the Face:</strong> {patient.shapeoftheFace}</p>
        <p><strong>Facial Profile:</strong> {patient.facialprofile}</p>
        <p><strong>Facial Divergence:</strong> {patient.facialdivergence}</p>
        <p><strong>Facial Symmetry:</strong> {patient.facialsymmetry}</p>
        <p><strong>Facial Proportions:</strong> {patient.facialproportions}</p>
        <p><strong>Nasolabial Angle:</strong> {patient.nasolabialangle}</p>
        <p><strong>Lips:</strong> {patient.lips}</p>
        <p><strong>Menolabial Sulcus:</strong> {patient.menolabialsulcus}</p>
        <p><strong>Chin:</strong> {patient.chin}</p>
        <p><strong>Anteroposterior Jaw Relationship:</strong> {patient.anteroposteriorjawrelationship}</p>
        <p><strong>Growth Pattern:</strong> {patient.growthPattern}</p>

        {/* Intraoral Examination */}
        <h4>Intraoral Examination</h4>
        <p><strong>Mucosa:</strong> {patient.mucosa}</p>
        <p><strong>Tongue Size:</strong> {patient.tonguesize}</p>
        <p><strong>Tongue Function:</strong> {patient.tonguefunction}</p>
        <p><strong>Palate:</strong> {patient.palate}</p>
        <p><strong>Gingiva:</strong> {patient.gingiva}</p>
        <p><strong>Frenum (Labial/Buccal/Lingual):</strong> {patient.frenilabial}, {patient.frenibuccal}, {patient.frenilingual}</p>
        <p><strong>Teeth Present:</strong> {patient.teethpresent}</p>
        <p><strong>Dental Age:</strong> {patient.dentalage}</p>

        {/* Dental Examination */}
        <h4>Dental Examination</h4>
        <p><strong>Shape:</strong> {patient.shape1}, {patient.shape2}</p>
        <p><strong>Rotations:</strong> {patient.rotations1}, {patient.rotations2}</p>
        <p><strong>Crowding:</strong> {patient.crowding1}, {patient.crowding2}</p>

        {/* Treatment Plan */}
        <h4>Treatment Plan</h4>
        <p><strong>Activation Schedule:</strong> {patient.activationSchedule1}, {patient.activationSchedule2}</p>
        <p><strong>Retention:</strong> {patient.retention1}, {patient.retention2}</p>
        <p><strong>Right / Left:</strong> {patient.right}, {patient.left}</p>
        <p><strong>Overjet:</strong> {patient.overjet}</p>
        <p><strong>Overbite:</strong> {patient.overbite}</p>
        <p><strong>Midline:</strong> {patient.midline}</p>
        <p><strong>Posterior:</strong> {patient.posterior}</p>
        <p><strong>VDO / VDR / Freeway:</strong> {patient.vdo}, {patient.vdr}, {patient.freeway}</p>
        <p><strong>TMJ Examine:</strong> {patient.tmjexamine}</p>

        {/* Diagnosis */}
        <h4>Diagnosis</h4>
        <p><strong>Soft Tissue:</strong> {patient.softtissue}</p>
        <p><strong>Dental:</strong> {patient.dental}</p>
        <p><strong>Skeletal:</strong> {patient.skeletal}</p>
        <p><strong>Provisional:</strong> {patient.provisional}</p>

        {/* Treatment Details */}
        <h4>Treatment Details</h4>
        <p><strong>Treatment:</strong> {patient.treatment}</p>
        <p><strong>Modality:</strong> {patient.modality}</p>
        <p><strong>Appliance:</strong> {patient.appliance}</p>
        <p><strong>Duration:</strong> {patient.duration}</p>
        <p><strong>Activation Schedule:</strong> {patient.activationSchedule}</p>
        <p><strong>Retention:</strong> {patient.retention}</p>
        <p><strong>Treatment Started On:</strong> {new Date(patient.treatmentStartedOn).toLocaleDateString()}</p>
        <p><strong>Treatment Completed On:</strong> {patient.treatmentCompletedOn ? new Date(patient.treatmentCompletedOn).toLocaleDateString() : "Ongoing"}</p>
        <p><strong>Case Presentation:</strong> {patient.casePresentation}</p>
        <p><strong>Impression:</strong> {patient.impression}</p>
        <p><strong>Cast:</strong> {patient.cast}</p>
        <p><strong>Wire Bending:</strong> {patient.wireBending}</p>
        <p><strong>Processing:</strong> {patient.processing}</p>
        <p><strong>Finishing:</strong> {patient.finishing}</p>
        <p><strong>Appliance Insertion:</strong> {patient.applianceInsertion}</p>

        <p><strong>Created At:</strong> {new Date(patient.createdAt).toLocaleDateString()}</p>
      </div>

      <button className="btn back-btn" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ViewPatient;
