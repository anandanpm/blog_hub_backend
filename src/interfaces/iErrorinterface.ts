import type { Error as MongooseError } from "mongoose" 


export interface CustomError extends Error {
  statusCode?: number
  code?: number 
  kind?: string 
  keyValue?: { [key: string]: any }
  errors?: MongooseError.ValidationError['errors'] 
}