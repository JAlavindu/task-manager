import express from "express";
import { signup, login, googleAuth } from "../controllers/authController";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/google", googleAuth);

export default router;
