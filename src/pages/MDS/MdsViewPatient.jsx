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
      .get(`http://localhost:5000/api/mdspatient/${id}`, {
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
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>Ortho No.:</strong> {patient.orthoNo}</p>
        <p><strong>O.P. No.:</strong> {patient.opNo}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Address:</strong> {patient.address}</p>
        <p><strong>Occupation:</strong> {patient.occupation}</p>
        <p><strong>Telephone:</strong> {patient.telephone}</p>
        <p><strong>Sex:</strong> {patient.sex}</p>
      </div>

      {/* Medical History Fields */}
      <div className="view-section">
        <h3 className="section-title">Medical Records</h3>
        <p><strong>Informed Consent:</strong> {patient.informedConsent}</p>
        <p><strong>Case History:</strong> {patient.caseHistory}</p>
        <p><strong>Clinical Exam:</strong> {patient.clinicalExam}</p>
        <p><strong>Impressions:</strong> {patient.impressions}</p>
        <p><strong>Study Model:</strong> {patient.studyModel}</p>
        <p><strong>Radiograph:</strong> {patient.radiograph}</p>
        <p><strong>Cephalogram:</strong> {patient.cephalogram}</p>
        <p><strong>Wrist Radiograph:</strong> {patient.wristRadiograph}</p>
        <p><strong>Digital Photos:</strong> {patient.digitalPhotos}</p>
        <p><strong>Model Analysis:</strong> {patient.modelAnalysis}</p>
        <p><strong>Cephalometric Analysis:</strong> {patient.cephalometricAnalysis}</p>
      </div>

      {/* Guardian Information */}
      <div className="view-section">
        <h3 className="section-title">Guardian Information</h3>
        <p><strong>Guardian Name:</strong> {patient.guardianName}</p>
        <p><strong>Guardian Occupation:</strong> {patient.guardianOccupation}</p>
        <p><strong>Guardian Contact:</strong> {patient.guardianContact}</p>
      </div>

      {/* Chief Complaint and Motivation */}
      <div className="view-section">
        <h3 className="section-title">Chief Complaint & Motivation</h3>
        <p><strong>Chief Complaint:</strong> {patient.chiefComplaint}</p>
        <p><strong>Motivation:</strong> {patient.motivation}</p>
      </div>

      {/* History Information */}
      <div className="view-section">
        <h3 className="section-title">History</h3>
        <p><strong>Orthodontic History:</strong> {patient.orthoHistory}</p>
        <p><strong>Medical History:</strong> {patient.medicalHistory}</p>
        <p><strong>Dental History:</strong> {patient.dentalHistory}</p>
        <p><strong>Prenatal History:</strong> {patient.prenatalHistory}</p>
        <p><strong>Type of Delivery:</strong> {patient.typeOfDelivery}</p>
        <p><strong>Mode of Delivery:</strong> {patient.modeOfDelivery}</p>
        <p><strong>Feeding:</strong> {patient.feeding}</p>
        <p><strong>Abnormal Habits:</strong> {patient.abnormalHabits}</p>
      </div>

      {/* Developmental Information */}
      <div className="view-section">
        <h3 className="section-title">Developmental Information</h3>
        <p><strong>Breathing:</strong> {patient.breathing}</p>
        <p><strong>Milestones:</strong> {patient.milestones}</p>
        <p><strong>Accidents:</strong> {patient.accidents}</p>
        <p><strong>Early Tooth Loss:</strong> {patient.earlyToothLoss}</p>
        <p><strong>Surgery History:</strong> {patient.surgeryHistory}</p>
        <p><strong>Brushing Habit:</strong> {patient.brushingHabit}</p>
        <p><strong>Progress in School:</strong> {patient.progressInSchool}</p>
        <p><strong>Emotional Problems:</strong> {patient.emotionalProblems}</p>
        <p><strong>Treatment Expectation:</strong> {patient.treatmentExpectation}</p>
        <p><strong>Level of Cooperation:</strong> {patient.levelOfCooperation}</p>
      </div>

      {/* Family Health Information */}
      <div className="view-section">
        <h3 className="section-title">Family Health Information</h3>
        <p><strong>Consanguineous Marriage:</strong> {patient.consanguineousMarriage}</p>
        <p><strong>Parents' Dental Health:</strong> {patient.parentsDentalHealth}</p>
        <p><strong>Siblings' Dental Health:</strong> {patient.siblingsDentalHealth}</p>
        <p><strong>Familial Systemic Illness:</strong> {patient.familialSystemicIllness}</p>
      </div>

      {/* Physical and Facial Information */}
      <div className="view-section">
        <h3 className="section-title">Physical & Facial Information</h3>
        <p><strong>Height:</strong> {patient.height}</p>
        <p><strong>Weight:</strong> {patient.weight}</p>
        <p><strong>Body Posture:</strong> {patient.bodyPosture}</p>
        <p><strong>Gait Disorder:</strong> {patient.gaitDisorder}</p>
        <p><strong>Body Build:</strong> {patient.bodyBuild}</p>
        <p><strong>Cranial Index:</strong> {patient.cranialIndex}</p>
        <p><strong>Head Type:</strong> {patient.headType}</p>
        <p><strong>Facial Index:</strong> {patient.facialIndex}</p>
        <p><strong>Facial Form:</strong> {patient.facialForm}</p>
        <p><strong>Facial Proportions:</strong> {patient.facialProportions}</p>
        <p><strong>Facial Profile:</strong> {patient.facialProfile}</p>
        <p><strong>Facial Divergence:</strong> {patient.facialDivergence}</p>
        <p><strong>Maxilla Position:</strong> {patient.maxillaPosition}</p>
        <p><strong>Mandible Position:</strong> {patient.mandiblePosition}</p>
        <p><strong>Nasolabial Angle:</strong> {patient.nasolabialAngle}</p>
        <p><strong>Nose Shape:</strong> {patient.noseShape}</p>
        <p><strong>Nasal Contour:</strong> {patient.nasalContour}</p>
        <p><strong>Nostrils:</strong> {patient.nostrils}</p>
        <p><strong>Lip Posture:</strong> {patient.lipPosture}</p>
      </div>

      {/* Lip and Speech Information */}
      <div className="view-section">
        <h3 className="section-title">Lip & Speech Information</h3>
        <p><strong>Incisal Show Incompetent:</strong> {patient.incisalShowIncompetent}</p>
        <p><strong>Lip Tonicity Upper:</strong> {patient.lipTonicityUpper}</p>
        <p><strong>Lip Tonicity Lower:</strong> {patient.lipTonicityLower}</p>
        <p><strong>Lip Length Upper:</strong> {patient.lipLengthUpper}</p>
        <p><strong>Lip Length Lower:</strong> {patient.lipLengthLower}</p>
        <p><strong>Lip Activity:</strong> {patient.lipActivity}</p>
        <p><strong>Incisal Speech:</strong> {patient.incisalSpeech}</p>
        <p><strong>Incisal Smile:</strong> {patient.incisalSmile}</p>
        <p><strong>Mentolabial Sulcus:</strong> {patient.mentolabialSulcus}</p>
        <p><strong>Nasolabial Angle:</strong> {patient.nasolabialAngle}</p>
        <p><strong>Labio Mental Angle:</strong> {patient.labioMentalAngle}</p>
        <p><strong>Speech Issues:</strong> {patient.speechIssues}</p>
      </div>
      <div className="view-section">
  <h3 className="section-title">Oral and Clinical Information</h3>
  <p><strong>Mentolabial Sulcus:</strong> {patient.mentolabialSulcus}</p>
  <p><strong>FMA:</strong> {patient.fma}</p>
  <p><strong>FMA Class:</strong> {patient.fmaClass}</p>
  <p><strong>Chin Prominence:</strong> {patient.chinProminence}</p>
  <p><strong>Circumoral Activity:</strong> {patient.circumoralActivity}</p>
  <p><strong>Perioral Seal:</strong> {patient.perioralSeal}</p>
  <p><strong>Respiration:</strong> {patient.respiration}</p>
  <p><strong>Mastication:</strong> {patient.mastication}</p>
  <p><strong>Deglutition:</strong> {patient.deglutition}</p>
  <p><strong>Speech:</strong> {patient.speech}</p>
  <p><strong>Abnormal Habits (Functional):</strong> {patient.abnormalHabitsFunctional}</p>
  <p><strong>TMJ Clicking:</strong> {patient.tmjClicking}</p>
  <p><strong>TMJ Crepitation:</strong> {patient.tmjCrepitation}</p>
  <p><strong>Tenderness (Muscles):</strong> {patient.tendernessMuscles}</p>
  <p><strong>Max Interincisal:</strong> {patient.maxInterincisal}</p>
  <p><strong>Mandibular Motion Opening:</strong> {patient.mandibularMotionOpening}</p>
  <p><strong>Freeway Space:</strong> {patient.freewaySpace}</p>
  <p><strong>Mandibular Sagittal:</strong> {patient.mandibularSagittal}</p>
  <p><strong>Mandibular Transverse:</strong> {patient.mandibularTransverse}</p>
  <p><strong>Mandibular Vertical:</strong> {patient.mandibularVertical}</p>
  <p><strong>Maxillary (0-20):</strong></p>
  <ul>
    {Array.from({ length: 21 }).map((_, index) => (
      <li key={`maxillary_${index}`}>{`Maxillary ${index}: ${patient[`maxillary_${index}`]}`}</li>
    ))}
  </ul>
  <p><strong>Mandibular (0-20):</strong></p>
  <ul>
    {Array.from({ length: 21 }).map((_, index) => (
      <li key={`mandibular_${index}`}>{`Mandibular ${index}: ${patient[`mandibular_${index}`]}`}</li>
    ))}
  </ul>
  <p><strong>First Molar Relation (Right):</strong> {patient.firstMolarRelation_right}</p>
  <p><strong>First Molar Relation (Left):</strong> {patient.firstMolarRelation_left}</p>
  <p><strong>Canine Relation (Right):</strong> {patient.canineRelation_right}</p>
  <p><strong>Canine Relation (Left):</strong> {patient.canineRelation_left}</p>
  <p><strong>Incisor Classification:</strong> {patient.incisorClassification}</p>
  <p><strong>Premolar Classification:</strong> {patient.premolarClassification}</p>
  <p><strong>Overjet:</strong> {patient.overjet}</p>
  <p><strong>Overbite:</strong> {patient.overbite}</p>
  <p><strong>Crossbite (Right):</strong> {patient.crossbite_right}</p>
  <p><strong>Crossbite (Left):</strong> {patient.crossbite_left}</p>
  <p><strong>Midline Shift (Maxilla):</strong> {patient.midlineShift_maxilla}</p>
  <p><strong>Midline Shift (Mandible):</strong> {patient.midlineShift_mandible}</p>
  <p><strong>Curve of Spee (Right):</strong> {patient.curveOfSpee_right}</p>
  <p><strong>Curve of Spee (Left):</strong> {patient.curveOfSpee_left}</p>
  <p><strong>Gingiva Color:</strong> {patient.gingivaColor}</p>
  <p><strong>Gingiva Texture:</strong> {patient.gingivaTexture}</p>
  <p><strong>Frenal Upper:</strong> {patient.frenalUpper}</p>
  <p><strong>Frenal Lower:</strong> {patient.frenalLower}</p>
  <p><strong>Tongue Size:</strong> {patient.tongueSize}</p>
  <p><strong>Tongue Shape:</strong> {patient.tongueShape}</p>
  <p><strong>Tongue Posture (AP):</strong> {patient.tonguePostureAP}</p>
  <p><strong>Tongue Posture (Vertical):</strong> {patient.tonguePostureVertical}</p>
  <p><strong>Tongue Movement:</strong> {patient.tongueMovement}</p>
  <p><strong>Palate:</strong> {patient.palate}</p>
  <p><strong>Tonsils:</strong> {patient.tonsils}</p>
</div>

      <button className="back-btn" onClick={() => navigate("/patients")}>
        Back to Patient List
      </button>
    </div>
  );
};

export default ViewPatient;
