import express from "express";
import jwt from "jsonwebtoken";
import MDSUser from "../models/User.js"; // Make sure this model exists

const router = express.Router();

// MDS Login Route
router.post("/login/mds", async (req, res) => {
  try {
    const { reg_no, password } = req.body;
    console.log("Login attempt:", { reg_no, password });

    if (!reg_no || !password) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    // Find the user with the given reg_no
    const user = await MDSUser.findOne({ reg_no });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    // Compare password directly (no bcrypt)
    if (user.password !== password) {
      return res.status(401).json({ success: false, message: "Invalid password." });
    }

    // Create JWT token
const token = jwt.sign(
      {  _id: user._id, reg_no: user.reg_no, role: user.role }, // ✅ Use userId
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Respond with token and user info
    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        reg_no: user.reg_no,
        name: user.name,
        role: user.role || "user"
      }
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, message: "Server error during login." });
  }
});

export default router;
