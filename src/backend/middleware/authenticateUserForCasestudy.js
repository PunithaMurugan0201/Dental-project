import jwt from "jsonwebtoken";

const authenticateUserForCasestudy = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];
  console.log("🔍 Token received:", token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Token decoded:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("❌ JWT verification failed:", error.message);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default authenticateUserForCasestudy; // ✅ ES module export
