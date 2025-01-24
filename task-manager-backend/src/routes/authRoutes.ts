import express from "express";
import {
  emailSignUp,
  emailLogin,
  googleLogin,
} from "../controllers/authController";

const router = express.Router();

router.post("/signup", emailSignUp);
router.post("/login", emailLogin);
router.post("/google-login", googleLogin);

export default router;
