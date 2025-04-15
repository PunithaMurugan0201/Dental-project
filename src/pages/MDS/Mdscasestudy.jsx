import React, { useState } from "react";
import axios from "axios";
import bgImage from "/src/assets/images/bg.jpg";
import "./Mdscasestudy.css"; // Import the CSS file for styling

const Mdscasestudy = () => {
  const [formData, setFormData] = useState({
    name: "",

    orthoNo: "",
    opNo: "",
    age: "",
    address: "",
    occupation: "",
    telephone: "",
    sex: "",
    informedConsent: "",
    caseHistory: "",
    clinicalExam: "",
    impressions: "",
    studyModel: "",
    radiograph: "",
    cephalogram: "",
    wristRadiograph: "",
    digitalPhotos: "",
    modelAnalysis: "",
    cephalometricAnalysis: "",
    guardianName: "",
    guardianOccupation: "",
    guardianContact: "",
    chiefComplaint: "",
    motivation: "",
    orthoHistory: "",
    medicalHistory: "",
    dentalHistory: "",
    prenatalHistory: "",
    typeOfDelivery: "",
    modeOfDelivery: "",
    feeding: "",
    abnormalHabits: "",
    breathing: "",
    milestones: "",
    accidents: "",
    earlyToothLoss: "",
    surgeryHistory: "",
    brushingHabit: "",
    progressInSchool: "",
    emotionalProblems: "",
    treatmentExpectation: "",
    levelOfCooperation: "",
    consanguineousMarriage: "",
    parentsDentalHealth: "",
    siblingsDentalHealth: "",
    familialSystemicIllness: "",
    height: "",
    weight: "",
    bodyPosture: "",
    gaitDisorder: "",
    bodyBuild: "",
    cranialIndex: "",
    headType: "",
    facialIndex: "",
    facialForm: "",
    facialProportions: "",
    facialProfile: "",
    facialDivergence: "",
    maxillaPosition: "",
    mandiblePosition: "",
    nasolabialAngle: "",
    noseShape: "",
    nasalContour: "",
    nostrils: "",
    lipPosture: "",
    incisalShowIncompetent: "",
    lipTonicityUpper: "",
    lipTonicityLower: "",
    lipLengthUpper: "",
    lipLengthLower: "",
    lipActivity: "",
    incisalSpeech: "",
    incisalSmile: "",
    mentolabialSulcus: "",
    fma: "",
    fmaClass: "",
    chinProminence: "",
    circumoralActivity: "",
    perioralSeal: "",
    respiration: "",
    mastication: "",
    deglutition: "",
    speech: "",
    abnormalHabitsFunctional: "",
    tmjClicking: "",
    tmjCrepitation: "",
    tendernessMuscles: "",
    maxInterincisal: "",
    mandibularMotionOpening: "",
    freewaySpace: "",
    mandibularSagittal: "",
    mandibularTransverse: "",
    mandibularVertical: "",
    maxillary_0: "",
    maxillary_1: "",
    maxillary_2: "",
    maxillary_3: "",
    maxillary_4: "",
    maxillary_5: "",
    maxillary_6: "",
    maxillary_7: "",
    maxillary_8: "",
    maxillary_9: "",
    maxillary_10: "",
    maxillary_11: "",
    maxillary_12: "",
    maxillary_13: "",
    maxillary_14: "",
    maxillary_15: "",
    maxillary_16: "",
    maxillary_17: "",
    maxillary_18: "",
    maxillary_19: "",
    maxillary_20: "",
    mandibular_0: "",
    mandibular_1: "",
    mandibular_2: "",
    mandibular_3: "",
    mandibular_4: "",
    mandibular_5: "",
    mandibular_6: "",
    mandibular_7: "",
    mandibular_8: "",
    mandibular_9: "",
    mandibular_10: "",
    mandibular_11: "",
    mandibular_12: "",
    mandibular_13: "",
    mandibular_14: "",
    mandibular_15: "",
    mandibular_16: "",
    mandibular_17: "",
    mandibular_18: "",
    mandibular_19: "",
    mandibular_20: "",
    firstMolarRelation_right: "",
    firstMolarRelation_left: "",
    canineRelation_right: "",
    canineRelation_left: "",
    incisorClassification: "",
    premolarClassification: "",
    overjet: "",                      // e.g., "3mm; Normal"
    overbite: "",                     // e.g., "4mm; Deep"
    crossbite_right: "",
    crossbite_left: "",
    midlineShift_maxilla: "",
    midlineShift_mandible: "",
    curveOfSpee_right: "",           // e.g., "Excessive; 2mm"
    curveOfSpee_left: "",
    gingivaColor: "",
    gingivaTexture: "",
    frenalUpper: "",
    frenalLower: "",
    tongueSize: "",
    tongueShape: "",
    tonguePostureAP: "",
    tonguePostureVertical: "",
    tongueMovement: "",
    palate: "",
    tonsils: "",




  });

  const [step, setStep] = useState(1);
  const totalSteps = 15;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve token from localStorage
    const token = localStorage.getItem("token");
    console.log("🔍 Token being sent:", token); // ✅ Debugging log

    if (!token) {
      alert("⚠️ Authentication failed! Please log in again.");
      return;
    }

    // Ensure all required fields are present
    

    // ✅ Debugging: Log formData before sending
    console.log("📩 Form Data before sending:", formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/mdspatient",
        formData,  // Send the formData directly (no need to stringify)
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Attach token in Authorization header
          },
        }
      );
      console.log("✅ Patient added:", response.data);
      alert("Patient record submitted successfully!");
      setStep(1);
      setFormData({
        name: "",

        orthoNo: "",
        opNo: "",
        age: "",
        address: "",
        occupation: "",
        telephone: "",
        sex: "",
        informedConsent: "",
        caseHistory: "",
        clinicalExam: "",
        impressions: "",
        studyModel: "",
        radiograph: "",
        cephalogram: "",
        wristRadiograph: "",
        digitalPhotos: "",
        modelAnalysis: "",
        cephalometricAnalysis: "",
        guardianName: "",
        guardianOccupation: "",
        guardianContact: "",
        chiefComplaint: "",
        motivation: "",
        orthoHistory: "",
        medicalHistory: "",
        dentalHistory: "",
        prenatalHistory: "",
        typeOfDelivery: "",
        modeOfDelivery: "",
        feeding: "",
        abnormalHabits: "",
        breathing: "",
        milestones: "",
        accidents: "",
        earlyToothLoss: "",
        surgeryHistory: "",
        brushingHabit: "",
        progressInSchool: "",
        emotionalProblems: "",
        treatmentExpectation: "",
        levelOfCooperation: "",
        consanguineousMarriage: "",
        parentsDentalHealth: "",
        siblingsDentalHealth: "",
        familialSystemicIllness: "",
        height: "",
        weight: "",
        bodyPosture: "",
        gaitDisorder: "",
        bodyBuild: "",
        cranialIndex: "",
        headType: "",
        facialIndex: "",
        facialForm: "",
        facialProportions: "",
        facialProfile: "",
        facialDivergence: "",
        maxillaPosition: "",
        mandiblePosition: "",
        nasolabialAngle: "",
        noseShape: "",
        nasalContour: "",
        nostrils: "",
        lipPosture: "",
        incisalShowIncompetent: "",
        lipTonicityUpper: "",
        lipTonicityLower: "",
        lipLengthUpper: "",
        lipLengthLower: "",
        lipActivity: "",
        incisalSpeech: "",
        incisalSmile: "",
        mentolabialSulcus: "",
        fma: "",
        fmaClass: "",
        chinProminence: "",
        circumoralActivity: "",
        perioralSeal: "",
        respiration: "",
        mastication: "",
        deglutition: "",
        speech: "",
        abnormalHabitsFunctional: "",
        tmjClicking: "",
        tmjCrepitation: "",
        tendernessMuscles: "",
        maxInterincisal: "",
        mandibularMotionOpening: "",
        freewaySpace: "",
        mandibularSagittal: "",
        mandibularTransverse: "",
        mandibularVertical: "",
        maxillary_0: "",
        maxillary_1: "",
        maxillary_2: "",
        maxillary_3: "",
        maxillary_4: "",
        maxillary_5: "",
        maxillary_6: "",
        maxillary_7: "",
        maxillary_8: "",
        maxillary_9: "",
        maxillary_10: "",
        maxillary_11: "",
        maxillary_12: "",
        maxillary_13: "",
        maxillary_14: "",
        maxillary_15: "",
        maxillary_16: "",
        maxillary_17: "",
        maxillary_18: "",
        maxillary_19: "",
        maxillary_20: "",
        mandibular_0: "",
        mandibular_1: "",
        mandibular_2: "",
        mandibular_3: "",
        mandibular_4: "",
        mandibular_5: "",
        mandibular_6: "",
        mandibular_7: "",
        mandibular_8: "",
        mandibular_9: "",
        mandibular_10: "",
        mandibular_11: "",
        mandibular_12: "",
        mandibular_13: "",
        mandibular_14: "",
        mandibular_15: "",
        mandibular_16: "",
        mandibular_17: "",
        mandibular_18: "",
        mandibular_19: "",
        mandibular_20: "",
        firstMolarRelation_right: "",
        firstMolarRelation_left: "",
        canineRelation_right: "",
        canineRelation_left: "",
        incisorClassification: "",
        premolarClassification: "",
        overjet: "",                      // e.g., "3mm; Normal"
        overbite: "",                     // e.g., "4mm; Deep"
        crossbite_right: "",
        crossbite_left: "",
        midlineShift_maxilla: "",
        midlineShift_mandible: "",
        curveOfSpee_right: "",           // e.g., "Excessive; 2mm"
        curveOfSpee_left: "",
        gingivaColor: "",
        gingivaTexture: "",
        frenalUpper: "",
        frenalLower: "",
        tongueSize: "",
        tongueShape: "",
        tonguePostureAP: "",
        tonguePostureVertical: "",
        tongueMovement: "",
        palate: "",
        tonsils: "",





      });
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "",
        filter: "brightness(90%)",
      }}
    >
      <div className="bg-gray-100 p-4 min-h-screen">
        <div className="max-w-7xl mx-auto bg-white p-6 shadow-lg rounded-xl">
          <form className="form-container" onSubmit={handleSubmit}>
            <h2 className="text-center font-bold text-lg">PATIENT CASE RECORD</h2>


            {/* Step 1: General Information */}
            {step === 1 && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Name of Patient", name: "name", type: "text" },
                    { label: "Ortho No.", name: "orthoNo", type: "text" },
                    { label: "O.P. No.", name: "opNo", type: "text" },
                    { label: "Age", name: "age", type: "number" },
                    { label: "Address", name: "address", type: "text" },
                    { label: "Occupation", name: "occupation", type: "text" },
                    { label: "Telephone No.", name: "telephone", type: "tel" },
                  ].map((inputField, index) => (
                    <div className="form-group" key={index}>
                      <label className="form-label">{inputField.label}:</label>
                      <input
                        type={inputField.type}
                        name={inputField.name}
                        value={formData[inputField.name]}
                        onChange={handleChange}
                        className="input-field"
                        placeholder={`Enter ${inputField.label.toLowerCase()}`}
                      />
                    </div>
                  ))}

                  <div className="form-group">
                    <label className="form-label">Sex:</label>
                    <select name="sex" value={formData.sex} onChange={handleChange} className="input-field" required>
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>


              </div>
            )}

            {/* Step 2: Check List */}
            {step === 2 && (
              <div>
                <h4 className="text-xl font-bold mt-6">CHECK LIST BEFORE COMMENCEMENT OF TREATMENT</h4>
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>ESSENTIALS</th>
                        <th>CHECK</th>
                        <th>DATE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { label: "Informed Consent/Assent form", name: "informedConsent" },
                        { label: "Case history", name: "caseHistory" },
                        { label: "Clinical examination", name: "clinicalExam" },
                        { label: "Impressions", name: "impressions" },
                        { label: "Study Model preparation", name: "studyModel" },
                        { label: "Panoramic/IOPA/Occlusal radiograph", name: "radiograph" },
                        { label: "Lateral cephalogram", name: "cephalogram" },
                        { label: "Hand-wrist radiograph/ CBCT radiograph", name: "wristRadiograph" },
                        { label: "Digital Photographs", name: "digitalPhotos" },
                        { label: "Model analysis", name: "modelAnalysis" },
                        { label: "Cephalometric analysis", name: "cephalometricAnalysis" },
                      ].map((item, index) => (
                        <tr key={index}>
                          <td>{item.label}</td>
                          <td>
                            <input type="checkbox" name={item.name + "Check"} onChange={handleChange} />
                          </td>
                          <td>
                            <input type="date" name={item.name} value={formData[item.name]} onChange={handleChange} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>


              </div>
            )}

            {/* Step 1: Orthodontic Case History */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold text-center mb-6">ORTHODONTIC CASE HISTORY</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Name of Patient", name: "name", type: "text" },
                    { label: "Date", name: "date", type: "date" },
                    { label: "Date of Birth", name: "dob", type: "date" },
                    { label: "Age / Sex", name: "ageSex", type: "text" },
                    { label: "Out-Patient Number", name: "opNo", type: "text" },
                    { label: "Orthodontic Registration Number", name: "orthoNo", type: "text" },
                    { label: "Patient's Occupation", name: "occupation", type: "text" },
                    { label: "Patient's Contact Numbers", name: "telephone", type: "tel" },
                    { label: "Parent’s/Guardian’s/Husband’s Name", name: "guardianName", type: "text" },
                    { label: "Parent’s/Guardian’s/Husband’s Occupation", name: "guardianOccupation", type: "text" },
                    { label: "Parent’s/Guardian’s/Husband’s Contact Numbers", name: "guardianContact", type: "tel" },
                    { label: "Chief Complaint or Major Complaint", name: "chiefComplaint", type: "text" },
                    { label: "Motivation (External/Internal)", name: "motivation", type: "text" },
                  ].map((inputField, index) => (
                    <div className="form-group" key={index}>
                      <label className="form-label font-semibold">{inputField.label}:</label>
                      <input
                        type={inputField.type}
                        name={inputField.name}
                        value={formData[inputField.name]}
                        onChange={handleChange}
                        className="input-field border p-2 w-full rounded-md"
                        placeholder={`Enter ${inputField.label.toLowerCase()}`}
                      />
                    </div>
                  ))}
                </div>

              </div>
            )}


            {step === 4 && (
              <div>
                <h2 className="text-xl font-bold text-center mb-6">ORTHODONTIC CASE HISTORY</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      label: "History of Orthodontic Treatment",
                      name: "orthoHistory"
                    },
                    {
                      label: "Medical History",
                      name: "medicalHistory",
                      description: `MEDICAL HISTORY [Explain in detail if present]: \n
                 Any H/O Allergy, Rheumatic fever, Cardiac problems, Seizures, Endocrine disorders, \n
                 Chronic systemic diseases, Exanthematous fevers, Recurrent aphthous ulceration, \n
                 Hematologic disorders, HIV, Syphilis, Hepatitis-B, Rickets, Dysostoses, \n
                 Head and neck surgery, Drugs taken like NSAIDS, Steroids, Bisphosphonates.`
                    },
                    {
                      label: "Dental History",
                      name: "dentalHistory",
                      description: `DENTAL HISTORY [Explain in detail if present]: \n
                 Any H/O Toothache, Sensitivity, Bleeding gums, Pain in TMJ region, Trauma, \n
                 Uneventful Dental treatment.`
                    },
                    {
                      label: "Prenatal History / Condition of Mother During Pregnancy",
                      name: "prenatalHistory",
                      description: `PRENATAL HISTORY/CONDITION OF MOTHER DURING PREGNANCY [Explain in detail if present]: \n
                 H/O: Nutritional disorders, Infectious diseases, Drugs taken like Tetracycline, \n
                 Doxycycline, Ibuprofen, Barbiturates, Benzodiazepines.`
                    }
                  ].map((inputField, index) => (
                    <div className="form-group" key={index}>
                      <label className="form-label font-semibold">{inputField.label}:</label>
                      {inputField.description && (
                        <p className="text-sm text-gray-600 whitespace-pre-line mt-1">{inputField.description}</p>
                      )}
                      <textarea
                        name={inputField.name}
                        value={formData[inputField.name] || ""}
                        onChange={handleChange}
                        className="input-field border p-3 w-full rounded-md mt-2 resize-y"
                        placeholder={`Enter ${inputField.label.toLowerCase()} here...`}
                        rows="6"
                      />
                    </div>
                  ))}
                </div>
              </div>


            )}

            {step === 5 && (
              <div>
                <div>
                  <h2 className="text-xl font-bold text-center mb-6">ORTHODONTIC CASE HISTORY</h2>

                  {/* TYPE OF DELIVERY */}
                  <h3 className="text-lg font-semibold mt-4">TYPE OF DELIVERY:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: "Full Term/Premature", name: "typeOfDelivery", options: ["Full Term", "Premature"] },
                      { label: "Mode of Delivery", name: "modeOfDelivery", options: ["Normal", "Caesarean", "Forceps"] }
                    ].map((field, index) => (
                      <div className="form-group" key={index}>
                        <label className="form-label font-semibold">{field.label}:</label>
                        <select
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className="input-field border p-2 w-full rounded-md"
                        >
                          <option value="">Select</option>
                          {field.options.map((option, i) => (
                            <option key={i} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>

                  {/* POST-NATAL HISTORY */}
                  <h3 className="text-lg font-semibold mt-6">POST-NATAL HISTORY:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: "Feeding (Type & Frequency)", name: "feeding", type: "text", placeholder: "Enter feeding details" },
                      { label: "Abnormal Habits (Type, Duration, Intensity & Age Discontinued)", name: "abnormalHabits", type: "textarea", placeholder: "Enter abnormal habits details" },
                      { label: "Breathing", name: "breathing", options: ["Nasal", "Oral", "Oro-Nasal"] },
                      { label: "Milestones", name: "milestones", options: ["Normal", "Delayed"] },
                      { label: "Accidents (Dentition/Jaws/Tooth)", name: "accidents", type: "text", placeholder: "Enter accident details" },
                      { label: "Early Loss of Deciduous Teeth", name: "earlyToothLoss", type: "text", placeholder: "Enter details" },
                      { label: "History of Adenoidectomy or Tonsillectomy", name: "surgeryHistory", type: "text", placeholder: "Enter details" },
                      { label: "Brushing Habit", name: "brushingHabit", type: "text", placeholder: "Enter brushing habits" }
                    ].map((field, index) => (
                      <div className="form-group" key={index}>
                        <label className="form-label font-semibold">{field.label}:</label>
                        {field.type === "textarea" ? (
                          <textarea
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="input-field border p-2 w-full rounded-md"
                            placeholder={field.placeholder}
                          ></textarea>
                        ) : field.options ? (
                          <select
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="input-field border p-2 w-full rounded-md"
                          >
                            <option value="">Select</option>
                            {field.options.map((option, i) => (
                              <option key={i} value={option}>{option}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="input-field border p-2 w-full rounded-md"
                            placeholder={field.placeholder}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* SOCIAL AND BEHAVIORAL EVALUATION */}
                  <h3 className="text-lg font-semibold mt-6">SOCIAL AND BEHAVIORAL EVALUATION:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: "Progress in School", name: "progressInSchool", type: "text", placeholder: "Enter progress details" },
                      { label: "Emotional Problems", name: "emotionalProblems", type: "text", placeholder: "Enter emotional problems" },
                      { label: "Expectation Out of Treatment", name: "treatmentExpectation", type: "text", placeholder: "Enter treatment expectations" },
                      { label: "Level of Cooperation", name: "levelOfCooperation", type: "text", placeholder: "Enter cooperation level" }
                    ].map((field, index) => (
                      <div className="form-group" key={index}>
                        <label className="form-label font-semibold">{field.label}:</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className="input-field border p-2 w-full rounded-md"
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                  </div>



                  {/* FAMILY HISTORY */}
                  <h3 className="text-lg font-semibold mt-6">FAMILY HISTORY:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label font-semibold">Offspring of Consanguineous Marriage:</label>
                      <select name="consanguineousMarriage" className="input-field border p-2 w-full rounded-md">
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    {[
                      { label: "Parents’ Relevant Dental Health Status", name: "parentsDentalHealth", description: "Explain if present: Any H/O skeletal malocclusions, cleft lip, etc." },
                      { label: "Sibling’s Relevant Dental Health Status", name: "siblingsDentalHealth", description: "Explain if present: Any H/O skeletal malocclusions, cleft lip, etc." },
                      { label: "Familial Systemic Illness", name: "familialSystemicIllness", description: "Explain if present:" }
                    ].map((field, index) => (
                      <div className="flex flex-col" key={index}>
                        <label className="font-semibold mb-1">{field.label}:</label>
                        <p className="text-sm text-gray-600 mb-2">{field.description}</p>
                        <textarea
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleChange}
                          className="border p-3 w-full rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder={`Enter ${field.label.toLowerCase()} here...`}
                          rows="4"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}


            {step === 6 && (
              <div>
                <h3 className="text-lg font-semibold mt-6">GENERAL STATE OF THE PATIENT:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Height */}
                  <div className="form-group">
                    <label className="form-label font-semibold">Height (in cm):</label>
                    <input
                      type="number"
                      name="height"
                      className="border p-2 w-full rounded-md"
                      placeholder="Enter height"
                      value={formData.height || ""}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Weight */}
                  <div className="form-group">
                    <label className="form-label font-semibold">Weight (in kg):</label>
                    <input
                      type="number"
                      name="weight"
                      className="border p-2 w-full rounded-md"
                      placeholder="Enter weight"
                      value={formData.weight || ""}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Body Posture */}
                  <div className="form-group">
                    <label className="form-label font-semibold">Body Posture:</label>
                    <input
                      type="text"
                      name="bodyPosture"
                      className="border p-2 w-full rounded-md"
                      placeholder="Enter body posture"
                      value={formData.bodyPosture || ""}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Gait Disorders */}
                  <div className="form-group">
                    <label className="form-label font-semibold">Gait Disorders (Nutt’s Classification):</label>
                    <select
                      name="gaitDisorder"
                      className="border p-2 w-full rounded-md"
                      value={formData.gaitDisorder || ""}
                      onChange={handleChange}
                    >
                      <option value="">Select Gait Disorder</option>
                      <option value="Arthritis gait">Arthritis gait</option>
                      <option value="Neuromuscular disease gait">Neuromuscular disease gait</option>
                      <option value="Sensory Loss gait">Sensory Loss gait</option>
                      <option value="Hemiplegic gait">Hemiplegic gait</option>
                      <option value="Cerebellar gait">Cerebellar gait</option>
                      <option value="Extrapyramidal syndromes gait">Extrapyramidal syndromes gait</option>
                      <option value="Cautious gait">Cautious gait</option>
                      <option value="Subcortical disequilibrium gait">Subcortical disequilibrium gait</option>
                      <option value="Frontal disequilibrium gait">Frontal disequilibrium gait</option>
                      <option value="Freezing gait">Freezing gait</option>
                      <option value="Frontal gait">Frontal gait</option>
                    </select>
                  </div>

                  {/* Sheldon’s Classification */}
                  <div className="form-group">
                    <label className="form-label font-semibold">Sheldon’s Classification of Body Build:</label>
                    <select
                      name="bodyBuild"
                      className="border p-2 w-full rounded-md"
                      value={formData.bodyBuild || ""}
                      onChange={handleChange}
                    >
                      <option value="">Select Body Build</option>
                      <option value="Ectomorphic">Ectomorphic</option>
                      <option value="Mesomorphic">Mesomorphic</option>
                      <option value="Endomorphic">Endomorphic</option>
                    </select>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mt-6">FACIAL FEATURES:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Cranial Index (%)", name: "cranialIndex", type: "number", placeholder: "Enter cranial index" },
                    { label: "Head Type", name: "headType", options: ["Mesocephalic", "Brachycephalic", "Dolichocephalic"] },
                    { label: "Facial Index (%)", name: "facialIndex", type: "number", placeholder: "Enter facial index" },
                    { label: "Facial Form", name: "facialForm", options: ["Mesoprosopic", "Euryprosopic", "Leptoprosopic"] },
                    { label: "Facial Proportions", name: "facialProportions", options: ["Symmetrical", "Asymmetrical"] },
                    { label: "Facial Profile", name: "facialProfile", options: ["Convex", "Straight", "Concave"] },
                    { label: "Facial Divergence", name: "facialDivergence", options: ["Anterior", "Orthognathic", "Posterior"] },
                    { label: "Maxilla Position", name: "maxillaPosition", options: ["Protruded", "Retruded"] },
                    { label: "Mandible Position", name: "mandiblePosition", options: ["Protruded", "Retruded"] },
                    { label: "Nasolabial Angle", name: "nasolabialAngle", options: ["Acute", "Normal [110°]", "Obtuse"] },
                    { label: "Shape of Nose [Eickstedt]", name: "noseShape", options: ["Hyperleptorrhine", "Leptorrhine", "Mesorrhine", "Platyrrhine", "Hyperplatyrrhine"] },
                    { label: "Nasal Contour", name: "nasalContour", options: ["Straight", "Convex", "Crooked"] },
                    { label: "Nostrils", name: "nostrils", options: ["Symmetrical", "Asymmetrical"] },
                    { label: "Lip Posture at Rest", name: "lipPosture", options: ["Competent", "Incompetent"] },
                    { label: "Incisal Show (If Incompetent) (mm)", name: "incisalShowIncompetent", type: "number", placeholder: "Enter incisal show (mm)" },
                    { label: "Lip Tonicity - Upper", name: "lipTonicityUpper", type: "text", placeholder: "Enter upper lip tonicity" },
                    { label: "Lip Tonicity - Lower", name: "lipTonicityLower", type: "text", placeholder: "Enter lower lip tonicity" },
                    { label: "Lip Length - Upper (mm)", name: "lipLengthUpper", type: "number", placeholder: "Enter upper lip length" },
                    { label: "Lip Length - Lower (mm)", name: "lipLengthLower", type: "number", placeholder: "Enter lower lip length" },
                    { label: "Lip Activity", name: "lipActivity", options: ["Hyperactive [Heavy, Smooth, Moist]", "Less Active [Light colour, Chapped]"] },
                    { label: "Incisal Exposure - During Speech (mm)", name: "incisalSpeech", type: "number", placeholder: "Enter exposure during speech" },
                    { label: "Incisal Exposure - During Smile (mm)", name: "incisalSmile", type: "number", placeholder: "Enter exposure during smile" },
                    { label: "Mentolabial Sulcus", name: "mentolabialSulcus", options: ["Shallow", "Average", "Deep"] },
                    { label: "Clinical FMA (°)", name: "fma", type: "number", placeholder: "Enter FMA" },
                    { label: "FMA Classification", name: "fmaClass", options: ["High Angle", "Low Angle", "Average"] },
                    { label: "Chin Prominence", name: "chinProminence", options: ["Positive", "Negative"] },
                  ].map((field, index) => (
                    <div className="form-group" key={index}>
                      <label className="form-label font-semibold">{field.label}:</label>
                      {field.type === "textarea" ? (
                        <textarea
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className="input-field border p-2 w-full rounded-md"
                          placeholder={field.placeholder}
                        ></textarea>
                      ) : field.options ? (
                        <select
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className="input-field border p-2 w-full rounded-md"
                        >
                          <option value="">Select</option>
                          {field.options.map((option, i) => (
                            <option key={i} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type || "text"}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className="input-field border p-2 w-full rounded-md"
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}
                  <h3 className="text-lg font-semibold mt-6">PHYSIOLOGIC OR FUNCTIONAL ASSESSMENT:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: "Circumoral Muscle Activity", name: "circumoralActivity", options: ["Normal", "Exaggerated"] },
                      { label: "Perioral Seal", name: "perioralSeal", options: ["Normal", "Dysfunctional", "Exaggerated"] },
                      { label: "Respiration", name: "respiration", options: ["Nasal Breathing", "Mouth Breathing"] },
                      { label: "Mastication", name: "mastication", options: ["Normal", "Dysfunctional"] },
                      { label: "Deglutition", name: "deglutition", options: ["Mature swallow", "Infantile swallow"] },
                      { label: "Speech", name: "speech", options: ["Normal", "Dysfunctional"] },
                      { label: "Abnormal Habits", name: "abnormalHabitsFunctional", options: ["Tongue thrusting", "Object sucking", "Thumb sucking", "Digit sucking"] },
                      { label: "TMJ Clicking", name: "tmjClicking", options: ["Initial", "Intermediate", "Terminal", "Reciprocal"] },
                      { label: "TMJ Crepitation", name: "tmjCrepitation", options: ["During closing", "During Chewing"] },
                      { label: "Tenderness of Musculature", name: "tendernessMuscles", type: "textarea", placeholder: "List affected muscles (e.g., Masseter, Temporalis...)" },
                      { label: "Maximum Interincisal Distance (mm)", name: "maxInterincisal", type: "number", placeholder: "Enter distance in mm" },
                      { label: "Mandibular Motion during Max Mouth Opening", name: "mandibularMotionOpening", options: ["Unaltered", "Deviated", "Deflected"] },
                      { label: "Freeway Space in Postural Rest Position (mm)", name: "freewaySpace", type: "number", placeholder: "Enter value in mm" },
                      { label: "Mandibular Motion – Sagittal Plane", name: "mandibularSagittal", type: "text", placeholder: "Enter motion detail" },
                      { label: "Mandibular Motion – Transverse Plane", name: "mandibularTransverse", type: "text", placeholder: "Enter motion detail" },
                      { label: "Mandibular Motion – Vertical Plane", name: "mandibularVertical", type: "text", placeholder: "Enter motion detail" },
                    ].map((field, index) => (
                      <div className="form-group" key={index}>
                        <label className="form-label font-semibold">{field.label}:</label>
                        {field.type === "textarea" ? (
                          <textarea
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="input-field border p-2 w-full rounded-md"
                            placeholder={field.placeholder}
                          ></textarea>
                        ) : field.options ? (
                          <select
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="input-field border p-2 w-full rounded-md"
                          >
                            <option value="">Select</option>
                            {field.options.map((option, i) => (
                              <option key={i} value={option}>{option}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type || "text"}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="input-field border p-2 w-full rounded-md"
                            placeholder={field.placeholder}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                </div>


              </div>
            )}

            {step === 7 && (
              <div>
                <h3 className="text-lg font-semibold mt-6">EXAMINATION OF THE MOUTH</h3>
                <h4 className="text-md font-semibold mt-4 mb-2">a. Intra-arch / Open Mouth Examination</h4>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Parameter</th>
                        <th className="border border-gray-300 px-4 py-2">Maxillary Arch</th>
                        <th className="border border-gray-300 px-4 py-2">Mandibular Arch</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        "Shape of the arch",
                        "Kernahan’s stripped ‘Y’ classification for cleft",
                        "Symmetry of the arch",
                        "Teeth alignment",
                        "Rotated teeth",
                        "Spacing",
                        "Anterior teeth inclination",
                        "Buccal segment angulation",
                        "Dental midline",
                        "Type of dentition",
                        "Number and Identity of teeth present [FDI Numbering]",
                        "Abnormal teeth: Size / Shape / Position",
                        "Supernumerary teeth",
                        "Enamel Hypoplasia / Mottling / Dental Fluorosis",
                        "Discoloured / Non-Vital Teeth",
                        "Teeth Mobility",
                        "Fractured teeth [Ellis classification]",
                        "Restorative status [Caries, Fillings, Crowns, etc.]",
                        "Occlusal wear & Reason",
                        "Tooth-to-bone ratio",
                        "Oral hygiene"
                      ].map((param, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{param}</td>
                          <td className="border border-gray-300 px-2 py-1">
                            <input
                              type="text"
                              name={`maxillary_${index}`}
                              value={formData[`maxillary_${index}`] || ""}
                              onChange={handleChange}
                              className="w-full p-1 border border-gray-300 rounded"
                            />
                          </td>
                          <td className="border border-gray-300 px-2 py-1">
                            <input
                              type="text"
                              name={`mandibular_${index}`}
                              value={formData[`mandibular_${index}`] || ""}
                              onChange={handleChange}
                              className="w-full p-1 border border-gray-300 rounded"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <h4 className="text-md font-semibold mt-6 mb-2">b. Inter-arch Examination of the Teeth</h4>
                <div className="space-y-4">
                  {[
                    { label: "First molar relation", sides: ["Right", "Left"], names: ["firstMolarRelation_right", "firstMolarRelation_left"] },
                    { label: "Canine relation", sides: ["Right", "Left"], names: ["canineRelation_right", "canineRelation_left"] },
                    { label: "Incisor classification", names: ["incisorClassification"] },
                    { label: "Premolar Classification", names: ["premolarClassification"] },
                    { label: "Overjet", suffix: "mm; Normal/ Increased/ Reverse", names: ["overjet"] },
                    { label: "Overbite", suffix: "mm; Normal/ Deep, Closed/ Open, Incomplete overbite", names: ["overbite"] },
                    { label: "Crossbite", sides: ["Right", "Left"], names: ["crossbite_right", "crossbite_left"] },
                    { label: "Midline shift", sides: ["Maxilla", "Mandible"], names: ["midlineShift_maxilla", "midlineShift_mandible"] },
                    { label: "Curve of Spee (Right)", suffix: "Excessive/ Flat/ Reverse; mm if excessive", names: ["curveOfSpee_right"] },
                    { label: "Curve of Spee (Left)", suffix: "Excessive/ Flat/ Reverse; mm if excessive", names: ["curveOfSpee_left"] },
                  ].map((item, index) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" key={index}>
                      {item.sides ? (
                        item.sides.map((side, i) => (
                          <div className="form-group" key={i}>
                            <label className="form-label font-semibold">
                              {item.label}: {side}
                            </label>
                            <input
                              type="text"
                              name={`${item.label.replace(/\s+/g, '').toLowerCase()}_${side.toLowerCase()}`}
                              value={formData[`${item.label.replace(/\s+/g, '').toLowerCase()}_${side.toLowerCase()}`] || ""}
                              onChange={handleChange}
                              className="input-field border p-2 w-full rounded-md"
                              placeholder={`Enter ${side.toLowerCase()} value`}
                            />
                          </div>
                        ))
                      ) : (
                        <div className="form-group md:col-span-2">
                          <label className="form-label font-semibold">
                            {item.label} {item.suffix && <span className="text-sm font-normal">({item.suffix})</span>}
                          </label>
                          <input
                            type="text"
                            name={item.label.replace(/\s+/g, '').toLowerCase()}
                            value={formData[item.label.replace(/\s+/g, '').toLowerCase()] || ""}
                            onChange={handleChange}
                            className="input-field border p-2 w-full rounded-md"
                            placeholder={`Enter ${item.label.toLowerCase()}`}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <h4 className="text-md font-semibold mt-6 mb-2">c. Soft Tissue Appraisal</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Gingiva Colour", name: "gingivaColor" },
                    { label: "Gingiva Texture", name: "gingivaTexture" },
                    { label: "Frenal attachment Upper", name: "frenalUpper" },
                    { label: "Frenal attachment Lower", name: "frenalLower" },
                    { label: "Tongue size (House’s Classification)", name: "tongueSize", placeholder: "Class-I / II / III" },
                    { label: "Tongue shape", name: "tongueShape", placeholder: "Elliptical / Hammer / Square etc." },
                    { label: "Tongue posture (Anteroposterior)", name: "tonguePostureAP", placeholder: "Forwardly placed / Normal / Retruded" },
                    { label: "Tongue posture (Vertical)", name: "tonguePostureVertical", placeholder: "Very high / High / Normal / Low" },
                    { label: "Tongue movement", name: "tongueMovement", placeholder: "Normal / Restricted [Tongue-Tie]" },
                    { label: "Palate", name: "palate", placeholder: "High / Normal / Shallow" },
                    { label: "Tonsils", name: "tonsils", placeholder: "Normal / Inflamed" }
                  ].map((field, index) => (
                    <div className="form-group" key={index}>
                      <label className="form-label font-semibold">{field.label}:</label>
                      <input
                        type="text"
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        className="input-field border p-2 w-full rounded-md"
                        placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
                      />
                    </div>
                  ))}
                </div>


              </div>
            )}


            {step === 9 && (
              <div>
                <h4 className="text-md font-semibold mt-6 mb-2">Diagnosis & Treatment Planning</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Diagnosis", name: "diagnosis" },
                    { label: "Ackermann-Proffit Classification", name: "ackermannProffit" },
                    { label: "Clinical VTO Consideration", name: "clinicalVTO" },
                    { label: "Envelope of Discrepancy Consideration", name: "envelopeOfDiscrepancy" },
                    { label: "Anchorage Consideration", name: "anchorageConsideration" },
                    { label: "Treatment Objectives", name: "treatmentObjectives" },
                    { label: "Treatment Options", name: "treatmentOptions" },
                    { label: "Treatment Plan", name: "treatmentPlan" },
                    { label: "Choice of Appliance", name: "choiceOfAppliance" },
                    { label: "Mechanotherapy", name: "mechanotherapy" },
                    { label: "Growth Trend (TWEED)", name: "growthTrend" },
                    { label: "Anchorage", name: "anchorage" },
                    { label: "Prognosis", name: "prognosis" },
                    { label: "Proposed Completion Time", name: "proposedCompletionTime" },
                    { label: "Retention Plan & Design", name: "retentionPlan" }
                  ].map((field, index) => (
                    <div className="form-group" key={index}>
                      <label className="form-label font-semibold">{field.label}:</label>
                      <textarea
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        className="input-field border p-2 w-full rounded-md"
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        rows={3}
                      />
                    </div>
                  ))}
                </div>
                <h4 className="text-md font-semibold mt-6 mb-2">Problem List</h4>
                <div className="overflow-auto">
                  <table className="w-full table-auto border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Plane</th>
                        <th className="border p-2">Anteroposterior</th>
                        <th className="border p-2">Vertical</th>
                        <th className="border p-2">Transverse</th>
                      </tr>
                    </thead>
                    <tbody>
                      {["Skeletal", "Dental", "Alignment", "Soft tissue"].map((category) => (
                        <tr key={category}>
                          <td className="border p-2 font-medium">{category}</td>
                          {["AP", "Vertical", "Transverse"].map((plane) => (
                            <td className="border p-2" key={`${category}-${plane}`}>
                              <input
                                type="text"
                                name={`${category.replace(/\s/g, "")}${plane}`}
                                value={formData[`${category.replace(/\s/g, "")}${plane}`] || ""}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                                placeholder="-"
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <h4 className="text-md font-semibold mt-6 mb-2">Bracket System & Slot</h4>

                {/* Maxillary Table */}
                <h5 className="text-sm font-semibold mb-1">Maxillary</h5>
                <div className="overflow-auto mb-4">
                  <table className="w-full table-auto border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Position</th>
                        {[7, 6, 5, 4, 3, 2, 1].map((num) => (
                          <th key={`max-${num}`} className="border p-2">{num}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {["Angulation", "Torque", "Offset"].map((param) => (
                        <tr key={`max-${param}`}>
                          <td className="border p-2 font-medium">{param}</td>
                          {[7, 6, 5, 4, 3, 2, 1].map((num) => (
                            <td key={`max-${param}-${num}`} className="border p-2">
                              <input
                                type="text"
                                name={`maxillary${param}${num}`}
                                value={formData[`maxillary${param}${num}`] || ""}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                                placeholder="-"
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mandibular Table */}
                <h5 className="text-sm font-semibold mb-1">Mandibular</h5>
                <div className="overflow-auto">
                  <table className="w-full table-auto border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Position</th>
                        {[7, 6, 5, 4, 3, 2, 1].map((num) => (
                          <th key={`mand-${num}`} className="border p-2">{num}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {["Angulation", "Torque", "Offset"].map((param) => (
                        <tr key={`mand-${param}`}>
                          <td className="border p-2 font-medium">{param}</td>
                          {[7, 6, 5, 4, 3, 2, 1].map((num) => (
                            <td key={`mand-${param}-${num}`} className="border p-2">
                              <input
                                type="text"
                                name={`mandibular${param}${num}`}
                                value={formData[`mandibular${param}${num}`] || ""}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                                placeholder="-"
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            )}





            {step === 10 && (
              <div>
                <h4 className="text-lg font-semibold">Final Review</h4>
                <p>Confirm all details before submission.</p>
              </div>
            )}
            {step === 11 && (
              <div>
                <h4 className="text-lg font-semibold">Final Review</h4>
                <p>Confirm all details before submission.</p>
              </div>
            )}

            <div className="flex flex-col items-center">
              {/* Your form content here */}

              {/* Navigation Buttons */}
              <div className="flex justify-between w-full max-w-md mt-4">
                {step > 1 && (
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={prevStep}
                  >
                    Previous
                  </button>
                )}

                {step < totalSteps ? (
                  <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                ) : (
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                    Submit
                  </button>
                )}
              </div>

              {/* Step Indicator - Displayed Side by Side */}
              <div className="step-indicator-container">
                {[...Array(totalSteps)].map((_, index) => (
                  <div
                    key={index}
                    className={`step-indicator ${step > index + 1
                      ? "completed"
                      : step === index + 1
                        ? "active"
                        : "pending"
                      }`}
                    onClick={() => setStep(index + 1)}
                  >
                    {step > index + 1 ? "✔" : index + 1}
                  </div>
                ))}
              </div>

            </div>





          </form>
        </div>
      </div >
    </div >
  );
};

export default Mdscasestudy;
