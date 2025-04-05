import express from "express";
import StudyMaterial from "../models/StudyMaterial.js";

const router = express.Router();

// GET materials with reg_no starting with 'BDS'
router.get("/getStudyMaterials", async (req, res) => {
  try {
    const materials = await StudyMaterial.find({
      reg_no: { $regex: "^BDS" } // starts with 'BDS'
    });
    res.json(materials);
  } catch (err) {
    console.error("Error fetching materials:", err.message);
    res.status(500).json({ message: "Failed to fetch study materials" });
  }
});

export default router;
