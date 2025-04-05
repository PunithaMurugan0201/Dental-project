import mongoose from "mongoose";

const AttendanceCategorySchema = new mongoose.Schema({
  total: { type: Number, required: true, default: 0 }, // Total classes
  attended: { type: Number, required: true, default: 0 }, // Attended classes
  percentage: { type: Number, default: 0 } // Attendance percentage
});

// Schema for each student's attendance
const StudentAttendanceSchema = new mongoose.Schema({
  reg_no: { type: String, required: true },
  name: { type: String, required: true },
  theory: AttendanceCategorySchema,
  practical: AttendanceCategorySchema,
  clinical: AttendanceCategorySchema
});

// Schema to store attendance for all students in a batch
const AttendanceSchema = new mongoose.Schema({
  batch: { type: String, required: true }, // Batch name (e.g., "2023")
  month: { type: String, required: true }, // Month of attendance
  year: { type: String, required: true }, // Year of attendance
  students: [StudentAttendanceSchema] // Array of students with their attendance
});

const Attendance = mongoose.model("Attendance", AttendanceSchema);
export default Attendance;
