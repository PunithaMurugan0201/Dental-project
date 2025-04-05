import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  reg_no: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  course: { type: String },
  year: { type: String },
  university: { type: String },
  contact: { type: String },
  bio: { type: String },
  profilePic: { type: String },
});

const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;
