import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // 🔹 Link to User
  reg_no: { type: String },

  name: { type: String, required: true },
  serialNo: { type: String, required: true },
  orthoNo: { type: String, required: true },
  opNo: { type: String, required: true },
  age: { type: Number, required: true },

  address: { type: String, required: true },
  occupation: { type: String },
  telephone: { type: String, required: true },
  sex: { type: String, enum: ["male", "female", "other"], required: true },

  chiefComplaint: { type: String },
  medicalHistory: { type: String },
  surgicalHistory: { type: String },
  dentalHistory: { type: String }, // Renamed from pastDentalHistory
  familyHistory: { type: String },
  personalHistory: { type: String },

  build: { type: String },
  height: { type: Number },
  weight: { type: Number },
  gait: { type: String },
  posture: { type: String },
  bodyTone: { type: String }, // Renamed from bodyTone

  // Habitual factors
  fingerThumbSucking: { type: Boolean, default: false },
  dummysucking: { type: Boolean, default: false },
  nailBitingLipbiting: { type: Boolean, default: false },
  tonguethrustingLipbiting: { type: Boolean, default: false },
  bruxism: { type: Boolean, default: false },
  mouthBreathing: { type: Boolean, default: false },
  otherhabits: { type: String },

  // Speech and respiration
  speechEvaluation: { type: String },
  voiceQuality: { type: String },
  circumoralMuscleTone: { type: String },
  respiration: { type: String },
  deglutition: { type: String },

  // Facial structure
  shapeoftheHead: { type: String }, // Renamed from headShape
  shapeoftheFace: { type: String }, // Renamed from faceShape
  facialprofile: { type: String }, // Renamed from facialProfile
  facialdivergence: { type: String }, // Renamed from facialDivergence
  facialsymmetry: { type: String }, // Renamed from facialSymmetry
  facialproportions: { type: String },
  nasolabialangle: { type: String },
  lips: { type: String },
  menolabialsulcus: { type: String },
  chin: { type: String },
  anteroposteriorjawrelationship: { type: String },
  growthPattern: { type: String },

  // Intraoral examination
  mucosa: { type: String },
  tonguesize: { type: String },
  tonguefunction: { type: String },
  palate: { type: String },
  gingiva: { type: String },
  frenilabial: { type: String },
  frenibuccal: { type: String },
  frenilingual: { type: String },
  teethpresent: { type: String },
  dentalage: { type: String },

  // Dental Examination
  shape1: { type: String },
  shape2: { type: String },
  rotations1: { type: String },
  rotations2: { type: String },
  crowding1: { type: String },
  crowding2: { type: String },

  // Treatment Plan
  activationSchedule1: { type: String },
  activationSchedule2: { type: String },
  retention1: { type: String },
  retention2: { type: String },
  right: { type: String },
  left: { type: String },
  overjet: { type: String },
  overbite: { type: String },
  midline: { type: String },
  posterior: { type: String },
  maximouth: { type: String },
  vdo: { type: String },
  vdr: { type: String },
  freeway: { type: String },
  maxiforward: { type: String },
  tmjexamine: { type: String },
  vto: { type: String },
  radiography: { type: String },
  bite: { type: String },
  cephalogram: { type: String },
  opg: { type: String },
  others: { type: String },

  // Diagnosis
  softtissue: { type: String },
  dental: { type: String },
  skeletal: { type: String },
  provisional: { type: String },

  // Treatment details
  treatment: { type: String },
  modality: { type: String },
  appliance: { type: String },
  duration: { type: String },
  activationSchedule: { type: String },
  retention: { type: String },
  treatmentStartedOn: { type: Date },
  treatmentCompletedOn: { type: Date },
  casePresentation: { type: String },
  impression: { type: String },
  cast: { type: String },
  wireBending: { type: String },
  processing: { type: String },
  finishing: { type: String },
  applianceInsertion: { type: String },

  createdAt: { type: Date, default: Date.now },
});

const Patient = mongoose.model("Patient", PatientSchema);

export default Patient;
