import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Import routes
import patientRoutes from "./routes/Bdscase.js";
import attendRoutes from "./routes/AttendRoutes.js";
import authRoutes from "./routes/Auth.js";
import profileRoutes from "./routes/profile.js";
import marksRoutes from "./routes/marksRoutes.js";
import examRoutes from "./routes/examRoutes.js";
import studyMaterialsRoute from "./routes/studyMaterials.js";
import loginRoutes from "./routes/Login.js";

// Get the current directory using import.meta.url
const __filename = fileURLToPath(import.meta.url);

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ Connected to MongoDB`);
  } catch (err) {
    console.error(`❌ MongoDB Connection Failed: ${err.message}`);
    process.exit(1);
  }
};
connectDB();

// Routes
app.use("/api/patients", patientRoutes);
app.use("/attendance", attendRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/marks", marksRoutes);
app.use("/api/examSchedule", examRoutes);
app.use("/", studyMaterialsRoute);
app.use("/api", loginRoutes);


// Serve static files from the 'uploads' folder
app.use("/uploads", express.static(path.join( "uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
