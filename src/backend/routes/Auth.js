import express from "express";
import User from "../models/User.js"; // Import User model
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Login route (without password hashing)
router.post("/login", async (req, res) => {
  try {
    console.log("Incoming login request:", req.body); // ✅ Log received credentials

    const { reg_no, password } = req.body;
    if (!reg_no || !password) {
      return res.status(400).json({ error: "Missing credentials" });
    }

    if (!reg_no.startsWith("BDS")) {
      return res.status(400).json({ error: "Invalid Registration Number" });
    }

    const user = await User.findOne({ reg_no });

    if (!user) {
      console.log("User not found:", reg_no); // ✅ Log missing user
      return res.status(400).json({ error: "User not found" });
    }

    if (password !== user.password) {
      console.log("Password mismatch for:", reg_no); // ✅ Log incorrect password attempt
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, reg_no: user.reg_no, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("Login successful:", user.reg_no); // ✅ Log successful login
    res.status(200).json({ success: true, message: "Login successful", token, user });

  } catch (error) {
    console.error("Login error:", error.message); // ✅ Log backend errors
    res.status(500).json({ error: "Internal Server Error" });
  }
});


export default router;
