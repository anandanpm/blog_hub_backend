import type { Request, Response } from "express"
import * as authService from "../services/authService"

export const register = async (req: Request, res: Response) => {
  try {
    const { user } = await authService.register(req.body) // Only destructure user
    // Removed setting of accessToken and refreshToken cookies
    res.status(201).json({ user }) // Only send user data in response body
  } catch (err: any) {
    res.status(400).json({ message: err.message })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { user, accessToken, refreshToken } = await authService.login(req.body.email, req.body.password)

    // Set access token as a regular cookie (can be accessed by client-side JS)
    res.cookie("accessToken", accessToken, {
      httpOnly: false, // Can be accessed by client-side JS
      secure: process.env.NODE_ENV === "production", // Use secure in production (HTTPS)
      sameSite: "strict", // CSRF protection
      maxAge: 15 * 60 * 1000, // 15 minutes
    })

    // Set refresh token as an httpOnly cookie (more secure, not accessible by client-side JS)
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, // Not accessible by client-side JS
      secure: process.env.NODE_ENV === "production", // Use secure in production (HTTPS)
      sameSite: "strict", // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })

    res.status(200).json({ user }) // Only send user data in response body
  } catch (err: any) {
    res.status(401).json({ message: err.message })
  }
}
