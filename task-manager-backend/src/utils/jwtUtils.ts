import jwt from "jsonwebtoken";
const SECRET = process.env.JWT_SECRET || "default_secret";

export const generateToken = (payload: object, expiresIn = "7d") =>
  jwt.sign(payload, SECRET, { expiresIn });

export const verifyToken = (token: string) => jwt.verify(token, SECRET);

// module.exports = { generateToken, verifyToken };
