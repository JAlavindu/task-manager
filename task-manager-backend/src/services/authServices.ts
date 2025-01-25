import prisma from "../config/prisma";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

export const registerUser = async (
  email: string,
  password: string,
  name: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: { email, password: hashedPassword, name },
  });
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password!))) {
    throw new Error("Invalid credentials");
  }
  const token = generateToken(user.id.toString());
  return { token, user };
};

export const googleLogin = async (
  googleId: string,
  name: string,
  email: string
) => {
  let user = await prisma.user.findUnique({ where: { googleId } });
  if (!user) {
    user = await prisma.user.create({
      data: { googleId, name, email },
    });
  }
  const token = generateToken(user.id.toString());
  return { token, user };
};
