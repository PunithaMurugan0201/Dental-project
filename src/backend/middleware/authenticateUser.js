import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authenticateUser = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Ensure reg_no is consistently assigned
    req.user = { 
      id: decoded.id,
      reg_no: decoded.reg_no, // ✅ Fix: Assign reg_no correctly
      role: decoded.role
    };

    if (!req.user.reg_no) {
      return res.status(401).json({ message: "Unauthorized: No reg_no in token" });
    }
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authenticateUser;
