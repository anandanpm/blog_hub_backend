import type { Request, Response, NextFunction } from "express"
import { CustomError } from "../interfaces/iErrorinterface"





export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack) 

  let statusCode = res.statusCode === 200 ? 500 : res.statusCode
  let message = err.message || "Something went wrong!"


  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404
    message = "Resource not found."
  }


  if (err.code === 11000 && err.keyValue) {
    statusCode = 400
    message = `Duplicate field value: ${Object.keys(err.keyValue).join(", ")}. Please use another value.`
  }


  if (err.name === "ValidationError" && err.errors) {
    statusCode = 400
    message = Object.values(err.errors)
      .map((val: any) => val.message) 
      .join(", ")
  }

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  })
}
