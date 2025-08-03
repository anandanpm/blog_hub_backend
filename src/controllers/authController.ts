import type { Request, Response } from "express"
import asyncHandler from "express-async-handler"
import * as authService from "../services/authService"

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { user } = await authService.registerService(req.body)
  res.status(201).json({ user })
})

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { user, accessToken, refreshToken } = await authService.loginService(req.body.email, req.body.password)

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite:process.env.SAMESITE as  'none',
    maxAge: 15 * 60 * 1000,
  })

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
     sameSite:process.env.SAMESITE as  'none',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })

  res.status(200).json({ user })
})

export const logout = asyncHandler(async (req: Request, res: Response) => {
  res.clearCookie("accessToken")
  res.clearCookie("refreshToken")
  res.status(200).json({ message: "Logged out successfully" })
})

export const getProfile = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.userId 
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" })
    return
  }

  const user = await authService.getProfileService(userId)
  res.status(200).json({ user })
})
