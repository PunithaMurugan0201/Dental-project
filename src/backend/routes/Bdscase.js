import express from "express";
import Patient from "../models/Patient.js";
import authenticateUser from "../middleware/authenticateUser.js";

const router = express.Router();

// Create a new patient
router.post("/", authenticateUser, async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.user._id; // ✅ Get the logged-in user's ID

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized: No userId in token" });
    }

    const newPatient = new Patient({ name, userId }); // ✅ Store userId with patient
    await newPatient.save();

    res.status(201).json({ message: "Patient record created", patient: newPatient });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Get all patients for the current user
router.get("/", authenticateUser, async (req, res) => {
  try {
    const userId = req.user._id; // ✅ Get logged-in user's ID

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized: No userId in token" });
    }

    // ✅ Fetch patients linked to this user
    const patients = await Patient.find({ userId });

    res.status(200).json({ patients });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Get a single patient by ID
router.get("/:id", authenticateUser, async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update patient
router.put("/:id", authenticateUser, async (req, res) => {
  try {
    const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json({ message: "Patient updated", patient: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete patient
router.delete("/:id", authenticateUser, async (req, res) => {
  try {
    const deleted = await Patient.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json({ message: "Patient deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
