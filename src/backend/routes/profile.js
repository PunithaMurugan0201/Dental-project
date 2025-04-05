// backend/routes/profile.js
import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import Profile from "../models/Profile.js";
import User from "../models/User.js";
import authenticateUser from "../middleware/authenticateUser.js";

const router = express.Router();
const uploadDir = path.resolve("uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${req.params.reg_no}_${uniqueSuffix}${ext}`);
  },
});

const upload = multer({ storage });

const validateProfileUpdate = (req, res, next) => {
  const { course, year, university, contact, bio } = req.body;
  if (!course || !year || !university || !contact || !bio) {
    return res.status(400).json({ message: "All fields are required" });
  }
  next();
};

const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
};

router.get("/:reg_no", authenticateUser, async (req, res, next) => {
  try {
    const { reg_no } = req.params;
    const user = await User.findOne({ reg_no });
    if (!user) return res.status(404).json({ message: "User not found" });

    let profile = await Profile.findOne({ userId: user._id });
    if (!profile) {
      profile = new Profile({
        userId: user._id,
        reg_no: user.reg_no,
        username: user.username,
        email: user.email,
        course: "",
        year: "",
        university: "",
        contact: "",
        bio: "",
        profilePic: "",
      });
      await profile.save();
    }

    res.status(200).json({ profile });
  } catch (error) {
    next(error);
  }
});

router.post("/:reg_no", authenticateUser, validateProfileUpdate, async (req, res, next) => {
  try {
    const { reg_no } = req.params;
    const { course, year, university, contact, bio } = req.body;

    const user = await User.findOne({ reg_no });
    if (!user) return res.status(404).json({ message: "User not found" });

    let profile = await Profile.findOne({ userId: user._id });
    if (!profile) {
      profile = new Profile({
        userId: user._id,
        reg_no: user.reg_no,
        username: user.username,
        email: user.email,
        course,
        year,
        university,
        contact,
        bio,
        profilePic: "",
      });
    } else {
      profile.course = course;
      profile.year = year;
      profile.university = university;
      profile.contact = contact;
      profile.bio = bio;
    }

    await profile.save();
    res.status(200).json({ message: "Profile updated successfully", profile });
  } catch (error) {
    next(error);
  }
});

router.post("/:reg_no/upload-pic", authenticateUser, upload.single("profilePic"), async (req, res, next) => {
  try {
    const { reg_no } = req.params;

    const user = await User.findOne({ reg_no });
    if (!user) return res.status(404).json({ message: "User not found" });

    const profile = await Profile.findOne({ userId: user._id });
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    if (req.file) {
      if (profile.profilePic) {
        const oldPicPath = path.join(uploadDir, path.basename(profile.profilePic));
        if (fs.existsSync(oldPicPath)) fs.unlinkSync(oldPicPath);
      }
      profile.profilePic = `/uploads/${req.file.filename}`;
    }

    await profile.save();
    res.status(200).json({ message: "Profile picture updated", profile });
  } catch (error) {
    next(error);
  }
});

router.use(errorHandler);

export default router;
