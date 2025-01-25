import { Request, Response } from "express";
import { registerUser, loginUser, googleLogin } from "../services/authServices";
import { getGoogleToken, getGoogleUser } from "../utils/googleAuth";

export const signup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  try {
    const user = await registerUser(email, password, name);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const { token, user } = await loginUser(email, password);
    res.json({ token, user });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};

export const googleAuth = async (req: Request, res: Response) => {
  const { code } = req.body;
  try {
    const { access_token } = await getGoogleToken(code);
    const googleUser = (await getGoogleUser(access_token)) as {
      id: string;
      name: string;
      email: string;
    };
    const { token, user } = await googleLogin(
      googleUser.id,
      googleUser.name,
      googleUser.email
    );
    res.json({ token, user });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
