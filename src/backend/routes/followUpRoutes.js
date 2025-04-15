import express from "express";
import Followup from "../models/Followup.js";
import authenticateUserForCasestudy from "../middleware/authenticateUserForCasestudy.js";

const router = express.Router();

// Add new followup
router.post("/", authenticateUserForCasestudy, async (req, res) => {
  try {
    const { patientId, date, workDone, nextAppointment } = req.body;

    const newFollowup = new Followup({
      patientId,
      userId: req.user._id,
      date,
      workDone,
      nextAppointment,
    });

    await newFollowup.save();
    res.status(201).json({ message: "Followup added successfully", followup: newFollowup });
  } catch (error) {
    res.status(500).json({ message: "Failed to add followup", error: error.message });
  }
});

// Get all followups for a patient
router.get("/:patientId", authenticateUserForCasestudy, async (req, res) => {
  try {
    const { patientId } = req.params;
    const followups = await Followup.find({ patientId }).sort({ date: -1 });
    res.json({ followups });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch followups", error: error.message });
  }
});

export default router;
