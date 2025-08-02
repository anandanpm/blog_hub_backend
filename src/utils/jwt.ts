import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET as string 
const ACCESS_TOKEN_EXPIRATION = "15m" 
const REFRESH_TOKEN_EXPIRATION = "7d"

export const generateAccessToken = (payload: { id: string }) => {
  return jwt.sign({ userId: payload.id }, JWT_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRATION })
}

export const generateRefreshToken = (payload: { id: string }) => {
  return jwt.sign({ userId: payload.id }, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRATION })
}
