import mongoose from "mongoose";

const studyMaterialSchema = new mongoose.Schema({
  reg_no: { type: String, required: true },
  subject: { type: String, required: true },
  file_name: { type: String, required: true },
  uploaded_by: { type: String, required: true },
  upload_date: { type: Date, default: Date.now }
});

export default mongoose.model("StudyMaterial", studyMaterialSchema);
