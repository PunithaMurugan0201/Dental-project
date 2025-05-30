import mongoose from "mongoose";

// Define the Mdspatient schema
const mdspatientSchema = new mongoose.Schema({
     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // 🔹 Link to User
      reg_no: { type: String },
      
  name: { type: String, required: true },
  orthoNo: { type: String, required: true },
  opNo: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  occupation: { type: String, required: true },
  telephone: { type: String, required: true },
  sex: { type: String, required: true },
  informedConsent: { type: String, required: true },
  caseHistory: { type: String },
  clinicalExam: { type: String },
  impressions: { type: String },
  studyModel: { type: String },
  radiograph: { type: String },
  cephalogram: { type: String },
  wristRadiograph: { type: String },
  digitalPhotos: { type: String },
  modelAnalysis: { type: String },
  cephalometricAnalysis: { type: String },
  guardianName: { type: String },
  guardianOccupation: { type: String },
  guardianContact: { type: String },
  chiefComplaint: { type: String },
  motivation: { type: String },
  orthoHistory: { type: String },
  medicalHistory: { type: String },
  dentalHistory: { type: String },
  prenatalHistory: { type: String },
  typeOfDelivery: { type: String },
  modeOfDelivery: { type: String },
  feeding: { type: String },
  abnormalHabits: { type: String },
  breathing: { type: String },
  milestones: { type: String },
  accidents: { type: String },
  earlyToothLoss: { type: String },
  surgeryHistory: { type: String },
  brushingHabit: { type: String },
  progressInSchool: { type: String },
  emotionalProblems: { type: String },
  treatmentExpectation: { type: String },
  levelOfCooperation: { type: String },
  consanguineousMarriage: { type: String },
  parentsDentalHealth: { type: String },
  siblingsDentalHealth: { type: String },
  familialSystemicIllness: { type: String },
  height: { type: Number },
  weight: { type: Number },
  bodyPosture: { type: String },
  gaitDisorder: { type: String },
  bodyBuild: { type: String },
  cranialIndex: { type: String },
  headType: { type: String },
  facialIndex: { type: String },
  facialForm: { type: String },
  facialProportions: { type: String },
  facialProfile: { type: String },
  facialDivergence: { type: String },
  maxillaPosition: { type: String },
  mandiblePosition: { type: String },
  nasolabialAngle: { type: String },
  noseShape: { type: String },
  nasalContour: { type: String },
  nostrils: { type: String },
  lipPosture: { type: String },
  incisalShowIncompetent: { type: String },
  lipTonicityUpper: { type: String },
  lipTonicityLower: { type: String },
  lipLengthUpper: { type: String },
  lipLengthLower: { type: String },
  lipActivity: { type: String },
  incisalSpeech: { type: String },
  incisalSmile: { type: String },
  mentolabialSulcus: { type: String },
  fma: { type: String },
  fmaClass: { type: String },
  chinProminence: { type: String },
  circumoralActivity: { type: String },
  perioralSeal: { type: String },
  respiration: { type: String },
  mastication: { type: String },
  deglutition: { type: String },
  speech: { type: String },
  abnormalHabitsFunctional: { type: String },
  tmjClicking: { type: String },
  tmjCrepitation: { type: String },
  tendernessMuscles: { type: String },
  maxInterincisal: { type: String },
  mandibularMotionOpening: { type: String },
  freewaySpace: { type: String },
  mandibularSagittal: { type: String },
  mandibularTransverse: { type: String },
  mandibularVertical: { type: String },
  maxillary_0: { type: String },
  maxillary_1: { type: String },
  maxillary_2: { type: String },
  maxillary_3: { type: String },
  maxillary_4: { type: String },
  maxillary_5: { type: String },
  maxillary_6: { type: String },
  maxillary_7: { type: String },
  maxillary_8: { type: String },
  maxillary_9: { type: String },
  maxillary_10: { type: String },
  maxillary_11: { type: String },
  maxillary_12: { type: String },
  maxillary_13: { type: String },
  maxillary_14: { type: String },
  maxillary_15: { type: String },
  maxillary_16: { type: String },
  maxillary_17: { type: String },
  maxillary_18: { type: String },
  maxillary_19: { type: String },
  maxillary_20: { type: String },
  mandibular_0: { type: String },
  mandibular_1: { type: String },
  mandibular_2: { type: String },
  mandibular_3: { type: String },
  mandibular_4: { type: String },
  mandibular_5: { type: String },
  mandibular_6: { type: String },
  mandibular_7: { type: String },
  mandibular_8: { type: String },
  mandibular_9: { type: String },
  mandibular_10: { type: String },
  mandibular_11: { type: String },
  mandibular_12: { type: String },
  mandibular_13: { type: String },
  mandibular_14: { type: String },
  mandibular_15: { type: String },
  mandibular_16: { type: String },
  mandibular_17: { type: String },
  mandibular_18: { type: String },
  mandibular_19: { type: String },
  mandibular_20: { type: String },
  firstMolarRelation_right: { type: String },
  firstMolarRelation_left: { type: String },
  canineRelation_right: { type: String },
  canineRelation_left: { type: String },
  incisorClassification: { type: String },
  premolarClassification: { type: String },
  overjet: { type: String },
  overbite: { type: String },
  crossbite_right: { type: String },
  crossbite_left: { type: String },
  midlineShift_maxilla: { type: String },
  midlineShift_mandible: { type: String },
  curveOfSpee_right: { type: String },
  curveOfSpee_left: { type: String },
  gingivaColor: { type: String },
  gingivaTexture: { type: String },
  frenalUpper: { type: String },
  frenalLower: { type: String },
  tongueSize: { type: String },
  tongueShape: { type: String },
  tonguePostureAP: { type: String },
  tonguePostureVertical: { type: String },
  tongueMovement: { type: String },
  palate: { type: String },
  tonsils: { type: String },
}, { timestamps: true });

// Create the Mdspatient model
const Mdspatient = mongoose.model('Mdspatient', mdspatientSchema);

export default Mdspatient; // Export the model
