import express from "express";
import Mdspatient from "../models/Mdspatient.js"; // Import MDS patient model
import Followup from "../models/Followup.js"; // Optional: if you have followups
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

// 🔸 Create Mdspatient record
router.post("/", authenticateUserForCasestudy, async (req, res) => {
  try {
    const userId = req.user._id;
    const registerNumber = req.user.reg_no;

    if (!userId || !registerNumber) {
      return res.status(401).json({ message: "Unauthorized: Missing user info" });
    }

    const newMdspatient = new Mdspatient({
      ...req.body,
      userId,
      registerNumber,
    });

    await newMdspatient.save();
    res.status(201).json({ message: "MDS patient record created", patient: newMdspatient });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔸 Get all MDS patients for user
router.get("/", authenticateUserForCasestudy, async (req, res) => {
  try {
    const mdspatients = await Mdspatient.find({ userId: req.user._id });
    res.status(200).json({ mdspatients });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔸 Search MDS patient by name, idNo, etc.
router.get("/search", authenticateUserForCasestudy, async (req, res) => {
  try {
    const { term } = req.query;
    if (!term) {
      return res.status(400).json({ message: "Search term is required" });
    }

    const patient = await Mdspatient.findOne({
      $or: [
        { name: { $regex: term, $options: "i" } },
        { mdsIdNo: term },
        { mdsOpNo: term },
        { phone: term }
      ],
      userId: req.user._id
    });

    if (!patient) {
      return res.status(404).json({ message: "MDS patient not found" });
    }

    const followups = await Followup.find({ patientId: patient._id }).sort({ date: -1 });

    res.json({ patient, followups });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔸 Get single MDS patient and followups
router.get("/:id", authenticateUserForCasestudy, async (req, res) => {
  try {
    const patient = await Mdspatient.findOne({ _id: req.params.id, userId: req.user._id });
    if (!patient) {
      return res.status(404).json({ message: "Patient not found or access denied" });
    }

    const followups = await Followup.find({ patientId: patient._id });
    res.status(200).json({ ...patient.toObject(), followups });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔸 Update MDS patient record
router.put("/:id", authenticateUserForCasestudy, async (req, res) => {
  try {
    const updated = await Mdspatient.findOneAndUpdate(
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

// 🔸 Delete MDS patient record
router.delete("/:id", authenticateUserForCasestudy, async (req, res) => {
  try {
    const deleted = await Mdspatient.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!deleted) return res.status(404).json({ message: "Not found or access denied" });
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
