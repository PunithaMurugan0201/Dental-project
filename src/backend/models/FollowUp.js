import mongoose from "mongoose";

const FollowupSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  workDone: {
    type: String,
    required: true
  },
  nextAppointment: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now 
  }
});

const Followup = mongoose.model("Followup", FollowupSchema);
export default Followup;
