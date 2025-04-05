import mongoose from "mongoose";

const MarksSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  theory: { type: Number, required: true, min: 0, max: 100 },
  practical: { type: Number, required: true, min: 0, max: 100 },
  clinical: { type: Number, required: true, min: 0, max: 100 },
  total: { type: Number, required: true },
  grade: { type: String },
});

const StudentSchema = new mongoose.Schema({
  reg_no: { type: String, required: true, unique: true }, // Added unique constraint
  name: { type: String, required: true },
  marks: [MarksSchema],
});

const InternalMarksSchema = new mongoose.Schema({
  batch: { type: String, required: true },
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  students: [StudentSchema], // Array of students
});

const InternalMarks = mongoose.model("InternalMarks", InternalMarksSchema);
export default InternalMarks;
