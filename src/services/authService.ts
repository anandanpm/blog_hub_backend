import bcrypt from "bcryptjs"
import { UserRepo } from "../repositories/userRepo"
import { generateAccessToken, generateRefreshToken, sendTokens } from "../utils/jwt"

export const register = async ({ name, email, password }: { name: string; email: string; password: string }) => {
  const existingUser = await UserRepo.findByEmail(email)
  if (existingUser) throw new Error("User already exists")
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await UserRepo.create({ name, email, password: hashedPassword })

  return { user }
}

export const login = async (email: string, password: string) => {
  const user = await UserRepo.findByEmail(email)
  if (!user) throw new Error("Invalid credentials")
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) throw new Error("Invalid credentials")
  const accessToken = generateAccessToken({ id: user._id.toString() })
  const refreshToken = generateRefreshToken({ id: user._id.toString() })
  return { user, accessToken, refreshToken }
}


export { sendTokens }
