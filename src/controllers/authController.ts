import type { Request, Response } from "express"
import * as authService from "../services/authService"

export const register = async (req: Request, res: Response) => {
  try {
    const { user } = await authService.register(req.body) 
    if(user){
res.status(201).json({message:'User registered successfully'})
    }else{
        res.status(400).json({ message: "User registration failed" })
    }
     
  } catch (err: any) {
    res.status(400).json({ message: err.message })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { user, accessToken, refreshToken } = await authService.login(req.body.email, req.body.password)

    
    res.cookie("accessToken", accessToken, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production", 
      sameSite: "strict", 
      maxAge: 15 * 60 * 1000, 
    })

    
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      sameSite: "strict", 
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    res.status(200).json({ user }) 
  } catch (err: any) {
    res.status(401).json({ message: err.message })
  }
}
