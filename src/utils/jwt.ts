import jwt, { JwtPayload } from 'jsonwebtoken';
import { Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'accesssecret';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'refreshsecret';

export const generateAccessToken = (payload: object): string => {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

export const generateRefreshToken = (payload: object): string => {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

export const sendTokens = (res: Response, accessToken: string, refreshToken: string): void => {
  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 15 * 60 * 1000,
    sameSite: 'strict',
  });
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: 'strict',
  });
};

export const verifyAccessToken = (token: string): JwtPayload => {
  return jwt.verify(token, ACCESS_TOKEN_SECRET) as JwtPayload;
};

export const verifyRefreshToken = (token: string): JwtPayload => {
  return jwt.verify(token, REFRESH_TOKEN_SECRET) as JwtPayload;
};
