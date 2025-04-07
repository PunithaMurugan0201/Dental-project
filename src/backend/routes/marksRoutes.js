import express from "express";
import InternalMarks from "../models/Internalmarks.js";

const router = express.Router();

// API to get student details and marks by registration number
router.get("/:reg_no", async (req, res) => {
  try {
    const regNo = req.params.reg_no;

    // Find the document and extract only the student with the given reg_no
    const studentData = await InternalMarks.findOne(
      { "students.reg_no": regNo },
      { "students.$": 1, _id: 0 } // Projection to return only the matched student
    );

    if (!studentData || !studentData.students || studentData.students.length === 0) {
      return res.status(404).json({ message: "No marks found for this student." });
    }

    const student = studentData.students[0];

    // Send student details along with marks
    res.json({
      name: student.name,
      reg_no: student.reg_no,
      batch: student.batch,
      year: student.year,
      marks: student.marks, // Marks array
    });
  } catch (error) {
    console.error("Error fetching marks:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

export default router;
