import React, { useState } from "react";
import axios from "axios";
import bgImage from "/src/assets/images/bg.jpg";
import "./Mdscasestudy.css"; // Import the CSS file for styling

const Mdscasestudy = () => {
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
  });

  const [step, setStep] = useState(1);
  const totalSteps = 10;

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
    try {
      const response = await axios.post("http://localhost:5000/api/patients", formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("✅ Patient added:", response.data);
      alert("Patient record submitted successfully!");
      setStep(1);
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
                    { label: "Out-Patient Number", name: "opNumber", type: "text" },
                    { label: "Orthodontic Registration Number", name: "orthoRegNumber", type: "text" },
                    { label: "Patient's Occupation", name: "occupation", type: "text" },
                    { label: "Patient's Contact Numbers", name: "contactNumber", type: "tel" },
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
                    {["Progress in School", "Emotional Problems", "Expectation out of treatment", "Level of cooperation"].map((field, index) => (
                      <input
                        key={index}
                        type="text"
                        name={field.replace(/\s+/g, '').toLowerCase()}
                        placeholder={field}
                        className="input-field border p-2 w-full rounded-md"
                      />
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
                
              </div>
            )}

            {step === 7 && (
              <div>
                <h4 className="text-lg font-semibold">Final Review</h4>
                <p>Confirm all details before submission.</p>
              </div>
            )}


            {step === 8 && (
              <div>
                <h4 className="text-lg font-semibold">Final Review</h4>
                <p>Confirm all details before submission.</p>
              </div>
            )}



            {step === 9 && (
              <div>
                <h4 className="text-lg font-semibold">Final Review</h4>
                <p>Confirm all details before submission.</p>
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
            {step === 12 && (
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
