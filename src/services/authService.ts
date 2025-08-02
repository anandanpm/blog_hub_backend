import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../repositories/userRepo';
import { IUser } from '../interfaces/IuserInterface';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const registerService = async (data: IUser) => {
  const existingUser = await findUserByEmail(data.email);
  if (existingUser) throw new Error('User already exists');
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return createUser({ ...data, password: hashedPassword } as IUser);
};

export const loginService = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('Invalid credentials');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });
  return { token, user };
}