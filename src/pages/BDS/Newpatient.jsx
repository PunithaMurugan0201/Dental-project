import React, { useState } from "react";
import axios from "axios";
import bgImage from "/src/assets/images/bg.jpg";
import "./Newpatient.css"; // Import the CSS file for styling

const Newpatient = () => {
  const [formData, setFormData] = useState({
    name: "",
    serialNo: "",
    orthoNo: "",
    opNo: "",
    age: "",

    address: "",
    occupation: "",
    telephone: "",
    sex: "",
    chiefComplaint: "",
    medicalHistory: "",
    surgicalHistory: "",
    dentalHistory: "",
    familyHistory: "",
    personalHistory: "",
    build: "",
    height: "",
    weight: "",
    gait: "",
    posture: "",
    bodyTone: "",
    fingerThumbSucking: "",
    dummysucking: "",
    nailBitingLipbiting: "",
    tonguethrustingLipbiting: "",
    bruxism: "",
    mouthBreathing: "",
    otherhabits: "",
    speechEvaluation: "",
    voiceQuality: "",
    circumoralMuscleTone: "",
    respiration: "",
    deglutition: "",
    shapeoftheHead: "",
    shapeoftheFace: "",
    facialprofile: "",
    facialdivergence: "",
    facialsymmetry: "",
    facialproportions: "",
    nasolabialangle: "",
    lips: "",
    menolabialsulcus: "",
    chin: "",
    anteroposteriorjawrelationship: "",
    growthPattern: "",
    mucosa: "",
    tonguesize: "",
    tonguefunction: "",
    palate: "",
    gingiva: "",
    frenilabial: "",
    frenibuccal: "",
    frenilingual: "",
    teethpresent: "",
    dentalage: "",
    shape1: "",
    shape2: "",
    rotations1: "",
    rotations2: "",
    crowding1: "",
    crowding2: "",
    activationSchedule1: "",
    activationSchedule2: "",
    retention1: "",
    retention2: "",
    right: "",
    left: "",
    overjet: "",
    overbite: "",
    midline: "",
    porterior: "",
    maximouth: "",
    vdo: "",
    vdr: "",
    freeway: "",
    maxiforward: "",
    tmjexamine: "",
    vto: "",
    radiography: "",
    bite: "",
    cephalogram: "",
    opg: "",
    others: "",
    softtissue: "",
    dental: "",
    skeletal: "",
    provisional: "",
    treatment: "",


    modality: "",
    appliance: "",
    duration: "",
    activationSchedule: "",
    retention: "",
    treatmentStartedOn: "",
    treatmentCompletedOn: "",
    casePresentation: "",
    impression: "",
    cast: "",
    wireBending: "",
    processing: "",
    finishing: "",
    applianceInsertion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve token from localStorage
    const token = localStorage.getItem("token"); 
    console.log("🔍 Token being sent:", token);  // ✅ Debugging log

    if (!token) {
      alert("⚠️ Authentication failed! Please log in again.");
      return;
    }

    // Ensure all required fields are present
    if (!formData.sex || !formData.telephone || !formData.address || 
        !formData.age || !formData.opNo || !formData.orthoNo || !formData.serialNo) {
        alert("⚠️ Please fill in all required fields.");
        return;
    }

    // ✅ Debugging: Log formData before sending
    console.log("📩 Form Data before sending:", formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/patients",
        JSON.stringify(formData),  // ✅ Convert to JSON string
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("✅ Patient added:", response.data);
      alert("Patient record submitted successfully!");
      navigate("/casestudy"); // 🚀 Redirect to Case Study page

   

      setFormData({
        name: "",
        serialNo: "",
        orthoNo: "",
        opNo: "",
        age: "",

        address: "",
        occupation: "",
        telephone: "",
        sex: "",
        chiefComplaint: "",
        medicalHistory: "",
        surgicalHistory: "",
        dentalHistory: "",
        familyHistory: "",
        personalHistory: "",
        build: "",
        height: "",
        weight: "",
        gait: "",
        posture: "",
        bodyTone: "",
        fingerThumbSucking: "",
        dummysucking: "",
        nailBitingLipbiting: "",
        tonguethrustingLipbiting: "",
        bruxism: "",
        mouthBreathing: "",
        otherhabits: "",
        speechEvaluation: "",
        voiceQuality: "",
        circumoralMuscleTone: "",
        respiration: "",
        deglutition: "",
        shapeoftheHead: "",
        shapeoftheFace: "",
        facialprofile: "",
        facialdivergence: "",
        facialsymmetry: "",
        facialproportions: "",
        nasolabialangle: "",
        lips: "",
        menolabialsulcus: "",
        chin: "",
        anteroposteriorjawrelationship: "",
        growthPattern: "",
        mucosa: "",
        tonguesize: "",
        tonguefunction: "",
        palate: "",
        gingiva: "",
        frenilabial: "",
        frenibuccal: "",
        frenilingual: "",
        teethpresent: "",
        dentalage: "",
        shape1: "",
        shape2: "",
        rotations1: "",
        rotations2: "",
        crowding1: "",
        crowding2: "",
        activationSchedule1: "",
        activationSchedule2: "",
        retention1: "",
        retention2: "",
        right: "",
        left: "",
        overjet: "",
        overbite: "",
        midline: "",
        porterior: "",
        maximouth: "",
        vdo: "",
        vdr: "",
        freeway: "",
        maxiforward: "",
        tmjexamine: "",
        vto: "",
        radiography: "",
        bite: "",
        cephalogram: "",
        opg: "",
        others: "",
        softtissue: "",
        dental: "",
        skeletal: "",
        provisional: "",
        treatment: "",

        modality: "",
        appliance: "",
        duration: "",
        activationSchedule: "",
        retention: "",
        treatmentStartedOn: "",
        treatmentCompletedOn: "",
        casePresentation: "",
        impression: "",
        cast: "",
        wireBending: "",
        processing: "",
        finishing: "",
        applianceInsertion: "",

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
        backgroundAttachment: "fixed",
        filter: "brightness(90%)", // Adjust brightness (80% dark)
      }}
    >
      <div className="bg-gray-100 p-4 min-h-screen">
        <div className="max-w-7xl mx-auto bg-white p-6 shadow-lg rounded-xl">
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <h2 className="text-center font-bold text-lg">PATIENT CASE RECORD</h2>

              {/* General Fields */}
              {[
                { label: "Name of Patient", name: "name", type: "text" },
                { label: "S.No", name: "serialNo", type: "text" },
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
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  className="input-field"
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Textarea Fields */}
            {[
              { label: "Chief Complaint", name: "chiefComplaint" },
              { label: "Medical History", name: "medicalHistory" },
              { label: "Surgical History", name: "surgicalHistory" },
              { label: "Past Dental History", name: "dentalHistory" },
              { label: "Family History", name: "familyHistory" },
              { label: "Personal History", name: "personalHistory" },
            ].map((textareaField, index) => (
              <div className="form-group" key={index}>
                <label className="form-label">{textareaField.label}:</label>
                <textarea
                  name={textareaField.name}
                  value={formData[textareaField.name]}
                  onChange={handleChange}
                  className="textarea"
                  placeholder={`Enter ${textareaField.label.toLowerCase()}`}
                ></textarea>
              </div>
            ))}

            {/* General Examination */}
            <h2 className="text-xl font-bold mt-6">GENERAL EXAMINATION</h2>
            {[
              { label: "Build", name: "build", type: "select", options: ["Ectomorphic", "Mesomorphic", "Endomorphic"] },
              { label: "Height", name: "height", type: "number" },
              { label: "Weight", name: "weight", type: "number" },
              { label: "Gait", name: "gait" },
              { label: "Posture", name: "posture" },
              { label: "Body Tone", name: "bodyTone" },

            ].map((inputField, index) => (
              <div className="form-group flex items-center space-x-4" key={index}>
                <label className="form-label">{inputField.label}:</label>

                {/* Select Dropdown for "Build" */}
                {inputField.type === "select" ? (
                  <select
                    name={inputField.name}
                    value={formData[inputField.name]}
                    onChange={handleChange}
                    className="input-field w-full p-2 border border-black rounded-md"
                  >
                    <option value="" disabled>Select {inputField.label}</option>
                    {inputField.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  /* Normal Input Fields */
                  <input
                    type={inputField.type || "text"}
                    name={inputField.name}
                    value={formData[inputField.name]}
                    onChange={handleChange}
                    className="input-field w-full p-2 border border-black rounded-md"
                    placeholder={`Enter ${inputField.label.toLowerCase()}`}
                  />
                )}
              </div>
            ))}

            <h2 className="text-xl font-bold mt-6">HABITS AND MUSCLE OBSERVATION</h2>
            {[
              { label: "Finger/Thumb Sucking", name: "fingerThumbSucking", type: "checkbox" },
              { label: "Dummy Sucking", name: "dummysucking", type: "checkbox" },
              { label: "Nail Biting/Lip Biting", name: "nailBitingLipbiting", type: "checkbox" },
              { label: "Tongue Thrusting/Lip Biting", name: "tonguethrustingLipbiting", type: "checkbox" },
              { label: "Bruxism", name: "bruxism", type: "checkbox" },
              { label: "Mouth Breathing", name: "mouthBreathing", type: "checkbox" },
              { label: "Other Habits", name: "otherhabits", type: "text" },
              { label: "Speech Evaluation", name: "speechEvaluation", type: "text" },
              { label: "Voice Quality", name: "voiceQuality", type: "text" },
              { label: "Circum-oral Muscle Tone", name: "circumoralMuscleTone", type: "select", options: ["Normal", "Hypertonic", "Hypotonic"] },
              { label: "Respiration", name: "respiration", type: "select", options: ["Oral", "Nasal", "Oronasal", "Abnormal"] },
              { label: "Deglutition", name: "deglutition", type: "select", options: ["Normal", "Abnormal"] },
            ].map((inputField, index) => (
              <div className="form-group flex items-center space-x-4" key={index}>
                <label className="form-label">{inputField.label}:</label>

                {inputField.type === "select" ? (
                  <select
                    name={inputField.name}
                    value={formData[inputField.name] || ""}
                    onChange={handleChange}
                    className="input-field w-full p-2 border border-black rounded-md"
                  >
                    <option value="" disabled>Select {inputField.label}</option>
                    {inputField.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : inputField.type === "checkbox" ? (
                  <input
                    type="checkbox"
                    name={inputField.name}
                    checked={formData[inputField.name] || false}
                    onChange={(e) =>
                      setFormData({ ...formData, [inputField.name]: e.target.checked })
                    }
                    className="input-field w-5 h-5"
                  />
                ) : (
                  <input
                    type="text"
                    name={inputField.name}
                    value={formData[inputField.name] || ""}
                    onChange={handleChange}
                    className="input-field w-full p-2 border border-black rounded-md"
                    placeholder={`Enter ${inputField.label.toLowerCase()}`}
                  />
                )}
              </div>
            ))}

            <h2 className="text-xl font-bold mt-6">EXTRA ORAL EXAMINATION</h2>
            {[
              { label: "Shape of the Head", name: "shapeoftheHead", type: "text" },
              { label: "Shape of the Face", name: "shapeoftheFace", type: "text" },
              { label: "Facial profile", name: "facialprofile", type: "text" },
              { label: "Facial divergence", name: "facialdivergence", type: "text" },
              { label: "Facial symmetry", name: "facialsymmetry", type: "text" },
              { label: "Facial proportions", name: "facialproportions", type: "text" },
              { label: "Nasolabial angle", name: "nasolabialangle", type: "text" },
              { label: "Lips", name: "lips", type: "checkbox", options: ["Normal", "Hypertonic", "Hypotonic"] },
              { label: "Menolabial sulcus", name: "menolabialsulcus", type: "text" },
              { label: "Chin", name: "chin", type: "text" },
              { label: "Anteroposterior jaw relationship", name: "anteroposteriorjawrelationship", type: "text" },
              { label: "Growth Pattern", name: "growthPattern", type: "text" },
            ].map((inputField, index) => (
              <div className="form-group mb-4" key={index}>
                <label className="form-label block font-medium">{inputField.label}:</label>

                {/* Text Inputs */}
                {inputField.type === "text" ? (
                  <input
                    type="text"
                    name={inputField.name}
                    value={formData[inputField.name] || ""}
                    onChange={handleChange}
                    className="input-field w-full p-2 border border-gray-300 rounded-md"
                  />
                ) : null}

                {/* Checkbox Group */}
                {inputField.type === "checkbox" ? (
                  <div className="flex flex- gap-4 mt-2">
                    {inputField.options.map((option, idx) => (
                      <label key={idx} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name={inputField.name}
                          value={option}
                          checked={formData[inputField.name]?.includes(option) || false}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}


            {/* Treatment Plan */}
            <h2 className="text-xl font-bold mt-6">INTRA ORAL EXAMINATION</h2>
            <h4 className="text-xl font-bold mt-6">A. Soft Tissue</h4>
            {[
              { label: "Mucosa", name: "mucosa" },
              { label: "Tongue-Size", name: "tonguesize" },
              { label: "Tongue-Function", name: "tonguefunction" },
              { label: "Palate", name: "palate" },
              { label: "Gingiva", name: "gingiva" },
              { label: "Freni-Labial", name: "frenilabial" },
              { label: "Freni-Buccal", name: "frenibuccal" },
              { label: "Freni-Lingual", name: "frenilingual" },
            ].map((inputField, index) => (
              <div className="form-group" key={index}>
                <label className="form-label">{inputField.label}:</label>
                <input
                  type={inputField.type || "text"}
                  name={inputField.name}
                  value={formData[inputField.name]}
                  onChange={handleChange}
                  className="input-field"
                  placeholder={`Enter ${inputField.label.toLowerCase()}`}
                />
              </div>
            ))}



            <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mt-6">B.Hard Tissue</h4>
              {[
                { label: "Teeth Present", name: "teethpresent" },
                { label: "Dental Age", name: "dentalage" },

              ].map((inputField, index) => (
                <div className="form-group" key={index}>
                  <label className="form-label">{inputField.label}:</label>
                  <input
                    type={inputField.type || "text"}
                    name={inputField.name}
                    value={formData[inputField.name]}
                    onChange={handleChange}
                    className="input-field"
                    placeholder={`Enter ${inputField.label.toLowerCase()}`}
                  />
                </div>
              ))}


              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-700">
                  <tbody>
                    {[
                      { label: "Shape", name1: "shape1", name2: "shape2" },
                      { label: "Rotations", name1: "rotations1", name2: "rotations2" },
                      { label: "Crowding/spacing", name1: "crowding1", name2: "crowding2" },
                      { label: "Activation Schedule", name1: "activationSchedule1", name2: "activationSchedule2" },
                      { label: "Retention", name1: "retention1", name2: "retention2" },

                    ].map((inputField, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                        {/* Label Column */}
                        <td className="border border-gray-700 px-4 py-2 font-semibold ">
                          <div className="form-group">
                            <label className="form-label">{inputField.label}:</label>
                          </div>
                        </td>
                        {/* Adds spacing between inputs */}
                        {/* First Input Field */}
                        <td className="border border-gray-700 px-4 py-2">
                          <input
                            type={inputField.type || "text"}
                            name={inputField.name1}
                            value={formData[inputField.name1]}
                            onChange={handleChange}
                            className="w-3/4 p-2 border border-gray-400 rounded-md gap-x-4"
                            placeholder="Enter value"
                          />
                        </td>

                        {/* Second Input Field */}
                        <td className="border border-gray-700 px-4 py-2">
                          <input
                            type={inputField.type || "text"}
                            name={inputField.name2}
                            value={formData[inputField.name2]}
                            onChange={handleChange}
                            className="w-1/4 px-2 py-1 border border-black rounded-md gap-x-8 "
                            placeholder="Enter value"
                          />
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
                {[
                  { label: "Molar relationship right", name: "right" },
                  { label: "Molar relationship left", name: "left" },
                  { label: "Overjet", name: "overjet", type: "number" },
                  { label: "Overbite", name: "overbite", type: "number" },
                  { label: "Midline", name: "midline" },
                  { label: "Porterior Crossbite", name: "porterior" },

                ].map((inputField, index) => (
                  <div className="form-group" key={index}>
                    <label className="form-label">{inputField.label}:</label>
                    <input
                      type={inputField.type || "text"}
                      name={inputField.name}
                      value={formData[inputField.name]}
                      onChange={handleChange}
                      className="input-field"
                      placeholder={`Enter ${inputField.label.toLowerCase()}`}
                    />
                  </div>
                ))}
              </div>



            </div>
            <h2 className="text-xl font-bold mt-6">FUNCTIONAL EXAMINATION</h2>

            {[
              { label: "Maximum mouth opening", name: "maximouth", type: "number" },
              { label: "VDO", name: "vdo", type: "number" },
              { label: "VDR", name: "vdr", type: "number" },
              { label: "Freeway space", name: "freeway", type: "number" },
              { label: "Maximum forward movement", name: "maxiforward", type: "number" },
              { label: "T.M.J Examination", name: "tmjexamine" },
              { label: "VTO", name: "vto" },

            ].map((inputField, index) => (
              <div className="form-group" key={index}>
                <label className="form-label">{inputField.label}:</label>
                <input
                  type={inputField.type || "text"}
                  name={inputField.name}
                  value={formData[inputField.name]}
                  onChange={handleChange}
                  className="input-field"
                  placeholder={`Enter ${inputField.label.toLowerCase()}`}
                />
              </div>
            ))}
            <h2 className="text-xl font-bold mt-6">INVESTIGATIONS</h2>

            {[

              { label: "Investigations", name: "investigations", type: "checkbox", options: ["Study casts", "Model Analysis"] },

            ].map((inputField, index) => (
              <div className="form-group mb-4" key={index}>
                <label className="form-label block font-medium">{inputField.label}:</label>


                {/* Checkbox Group */}
                {inputField.type === "checkbox" ? (
                  <div className="flex flex- gap-4 mt-2">
                    {inputField.options.map((option, idx) => (
                      <label key={idx} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name={inputField.name}
                          value={option}
                          checked={formData[inputField.name]?.includes(option) || false}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <h3 className="text-xl font-bold mt-6">RADIOGRAPHS</h3>
            {[
              { label: "Intra Oral Periapical Radiograph", name: "radiography" },
              { label: "Bite Wing-Occlusal", name: "bite" },
              { label: "Cephalogram", name: "cephalogram" },
              { label: "OPG", name: "opg" },
              { label: "Others", name: "others" },


            ].map((inputField, index) => (
              <div className="form-group" key={index}>
                <label className="form-label">{inputField.label}:</label>
                <input
                  type={inputField.type || "text"}
                  name={inputField.name}
                  value={formData[inputField.name]}
                  onChange={handleChange}
                  className="input-field"
                  placeholder={`Enter ${inputField.label.toLowerCase()}`}
                />
              </div>
            ))}
            <h2 className="text-xl font-bold mt-6">PROBLEM LIST</h2>
            {[
              { label: "Soft Tissue", name: "softtissue" },
              { label: "Dental", name: "dental" },
              { label: "Skeletal", name: "skeletal" },
              { label: "Provisional Diagnosis", name: "provisional" },
              { label: "Treatment Objectives", name: "treatment" },

            ].map((textareaField, index) => (
              <div className="form-group" key={index}>
                <label className="form-label">{textareaField.label}:</label>
                <textarea
                  name={textareaField.name}
                  value={formData[textareaField.name]}
                  onChange={handleChange}
                  className="textarea"
                  placeholder={`Enter ${textareaField.label.toLowerCase()}`}
                ></textarea>
              </div>
            ))}


            {/* Treatment Plan */}
            <h2 className="text-xl font-bold mt-6">TREATMENT PLAN</h2>
            {[
              { label: " Modality", name: "modality" },
              { label: "Appliance", name: "appliance" },
              { label: "Duration", name: "duration" },
              { label: "Activation Schedule", name: "activationSchedule" },
              { label: "Retention", name: "retention" },
              { label: "Treatment Started on", name: "treatmentStartedOn", type: "date" },
              { label: "Treatment Completed on", name: "treatmentCompletedOn", type: "date" },

            ].map((inputField, index) => (
              <div className="form-group" key={index}>
                <label className="form-label">{inputField.label}:</label>
                <input
                  type={inputField.type || "text"}
                  name={inputField.name}
                  value={formData[inputField.name]}
                  onChange={handleChange}
                  className="input-field"
                  placeholder={`Enter ${inputField.label.toLowerCase()}`}
                />
              </div>
            ))}

            <div className="flex justify-center mt-6">
              <div className="w-3/4 bg-white/80 p-4 shadow-lg rounded-lg">
                <h2 className="text-xl font-bold mb-4 text-center">RECORD OF CASE PROCEEDINGS</h2>
                <table className="w-full border-collapse border border-gray-700">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-700 px-3 py-2 text-center">Sl. No.</th>
                      <th className="border border-gray-700 px-3 py-2 text-center">Date</th>
                      <th className="border border-gray-700 px-3 py-2 text-center">Recordings</th>
                      <th className="border border-gray-700 px-3 py-2 text-center">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: "Case Presentation", name: "casePresentation" },
                      { label: "Impression", name: "impression" },
                      { label: "Cast", name: "cast" },
                      { label: "Wire Bending", name: "wireBending" },
                      { label: "Processing", name: "processing" },
                      { label: "Finishing", name: "finishing" },
                      { label: "Appliance Insertion", name: "applianceInsertion" },
                    ].map((inputField, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                        {/* Serial Number */}
                        <td className="border border-gray-700 px-3 py-2 text-center">{index + 1}</td>

                        {/* Date Field (Smaller & Centered) */}
                        <td className="border border-gray-700 px-3 py-2 text-center">
                          <input
                            type="date"
                            name={`${inputField.name}Date`}
                            value={formData[`${inputField.name}Date`] || ""}
                            onChange={handleChange}
                            className="w-24 text-sm px-1 py-1 border rounded"
                          />
                        </td>

                        {/* Recordings */}
                        <td className="border border-gray-700 px-3 py-2 font-semibold">{inputField.label}</td>

                        {/* Remarks Field (Smaller & Centered) */}
                        <td className="border border-gray-700 px-3 py-2 text-center">
                          <input
                            type="text"
                            name={`${inputField.name}Remarks`}
                            value={formData[`${inputField.name}Remarks`] || ""}
                            onChange={handleChange}
                            className="w-40 text-sm px-1 py-1 border rounded"
                            placeholder="Enter remarks"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Submit Button Centered */}
                <div className="text-center mt-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
                    Submit Patient Record
                  </button>
                </div>
              </div>
            </div>







          </form>
        </div>
      </div>
    </div>
  );
};

export default Newpatient;
