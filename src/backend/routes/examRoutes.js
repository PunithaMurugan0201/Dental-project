import express from "express";
import { ExamSchedule } from "../models/ExamSchedule.js";  // ✅ Use named import

const router = express.Router();

router.get("/:reg_no", async (req, res) => {
    try {
        const { reg_no } = req.params;
        console.log(`🔍 Fetching exam schedule for Reg No: ${reg_no}`);

        // Find the exam schedule that contains this student
        const schedule = await ExamSchedule.findOne({
            "students.reg_no": reg_no
        });

        if (!schedule) {
            console.log(`❌ No schedule found for ${reg_no}`);
            return res.status(404).json({ message: "No exam schedules found." });
        }

        // Extract student data
        const studentData = schedule.students.find(student => student.reg_no === reg_no);

        if (!studentData) {
            console.log(`❌ Student not found inside schedule for ${reg_no}`);
            return res.status(404).json({ message: "Student not found in the schedule." });
        }

        console.log(`✅ Returning exam schedule for ${studentData.name}`);

        // ✅ Return both name and exam schedule
        res.json({
            name: studentData.name,  // Return student name
            reg_no: studentData.reg_no,  // Return registration number
            exams: studentData.marks  // Return exam schedule
        });
    } catch (error) {
        console.error("❌ Error fetching exam schedules:", error);
        res.status(500).json({ message: "Error fetching exam schedules", error });
    }
});

export default router;
