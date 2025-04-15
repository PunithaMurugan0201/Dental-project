import express from "express";
import Patient from "../models/Patient.js";
import Followup from "../models/Followup.js";

import authenticateUserForCasestudy from "../middleware/authenticateUserForCasestudy.js";

const router = express.Router();

// 🔸 Test Route – Useful for debugging token
router.post("/test", authenticateUserForCasestudy, async (req, res) => {
  try {
    console.log("✅ User ID from token:", req.user._id);
    console.log("✅ Reg No:", req.user.reg_no);
    res.status(200).json({ message: "Token verified", user: req.user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔸 Create patient
router.post("/", authenticateUserForCasestudy, async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.user._id;
    const registerNumber = req.user.reg_no;

    if (!userId || !registerNumber) {
      return res.status(401).json({ message: "Unauthorized: Missing user info" });
    }

    const newPatient = new Patient({
      ...req.body,
      userId,
      registerNumber,
    });

    await newPatient.save();
    res.status(201).json({ message: "Patient record created", patient: newPatient });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔸 Get all patients for user
router.get("/", authenticateUserForCasestudy, async (req, res) => {
  try {
    const patients = await Patient.find({ userId: req.user._id });
    res.status(200).json({ patients });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔸 Get single patient (restricted)
router.get("/:id", authenticateUserForCasestudy, async (req, res) => {
  try {
    const patient = await Patient.findOne({ _id: req.params.id, userId: req.user._id });
    if (!patient) return res.status(404).json({ message: "Not found or access denied" });
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔸 Update patient (restricted)
router.put("/:id", authenticateUserForCasestudy, async (req, res) => {
  try {
    const updated = await Patient.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Not found or access denied" });
    res.json({ message: "Updated", patient: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔸 Delete patient (restricted)
router.delete("/:id", authenticateUserForCasestudy, async (req, res) => {
  try {
    const deleted = await Patient.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!deleted) return res.status(404).json({ message: "Not found or access denied" });
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/search", authenticateUserForCasestudy, async (req, res) => {
  try {
    const { term } = req.query;
    if (!term) {
      return res.status(400).json({ message: "Search term is required" });
    }

    // Search by name, opNo, orthoNo, or telephone
    const patient = await Patient.findOne({
      $or: [
        { name: { $regex: term, $options: "i" } },
        { opNo: term },
        { orthoNo: term },
        { telephone: term }
      ],
      userId: req.user._id
    });

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    // Get all followups for this patient
    const followups = await Followup.find({ patientId: patient._id })
      .sort({ date: -1 });

    res.json({ patient, followups });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/:id", authenticateUserForCasestudy, async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const followups = await Followup.find({ patientId: patient._id });

    res.status(200).json({ ...patient.toObject(), followups }); // 👈 combine patient & followups
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
