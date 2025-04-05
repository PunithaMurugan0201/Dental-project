import express from "express";
import Attendance from "../models/Attendance.js";

const router = express.Router();

// Get Attendance for a Student
router.get("/:regNumber", async (req, res) => {
  try {
    const attendance = await Attendance.findOne(
      { "students.reg_no": req.params.regNumber },
      { "students.$": 1, batch: 1, month: 1, year: 1 } // This returns only the matched student
    );

    if (!attendance) return res.status(404).json({ message: "Attendance not found" });

    res.json({
      batch: attendance.batch,
      month: attendance.month,
      year: attendance.year,
      student: attendance.students[0] // Directly return the filtered student
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

  

export default router;
