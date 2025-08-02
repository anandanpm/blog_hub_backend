import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { JwtPayload } from "../interfaces/iJwtpayload"



export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization?.split(" ")[1]


  if (!token && req.cookies && req.cookies.accessToken) {
    token = req.cookies.accessToken
  }

  if (!token) return res.status(401).json({ message: "Unauthorized" })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "supersecretjwtkey") as JwtPayload
    req.userId = decoded.userId
    next()
  } catch (err) {
    res.status(401).json({ message: "Invalid token" })
  }
}
