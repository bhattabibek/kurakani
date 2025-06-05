import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const protectRoute = async (req, res, next) => {
  try {
    // 1. Get token from cookies
    const token = req.cookies?.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized — No token provided." });
    }

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Find user from decoded token
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized — User not found." });
    }

    // 4. Attach user to request for downstream use
    req.user = user;
    next();

  } catch (error) {
    console.error("JWT auth error:", error);
    res.status(401).json({ message: "Unauthorized — Token is invalid or expired." });
  }
};
