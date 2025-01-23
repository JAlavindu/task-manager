import bcrypt from "bcryptjs";
import prisma from "../prisma/client";
import { generateToken } from "../utils/jwtUtils";
import { Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const emailSignUp = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, name },
    });
    const token = generateToken({ id: user.id, email: user.email });
    res.status(201).json({ token, user });
  } catch (err) {
    res.status(400).json({ error: "User already exists or invalid input" });
  }
};

export const emailLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (
      !user ||
      !user.password ||
      !(await bcrypt.compare(password, user.password))
    ) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = generateToken({ id: user.id, email: user.email });
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const googleLogin = async (req: Request, res: Response) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    if (!payload) {
      return res.status(400).json({ error: "Invalid Google token" });
    }
    const { email, name, sub: googleId } = payload;

    if (!email || !name) {
      return res.status(400).json({ error: "Invalid Google token payload" });
    }

    let user = await prisma.user.findUnique({ where: { googleId } });
    if (!user) {
      user = await prisma.user.create({
        data: { email, name, googleId, provider: "google" },
      });
    }

    const jwtToken = generateToken({ id: user.id, email: user.email });
    res.status(200).json({ token: jwtToken, user });
  } catch (err) {
    res.status(400).json({ error: "Google login failed" });
  }
};
