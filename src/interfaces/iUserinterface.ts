import type mongoose from "mongoose"
import type { Document } from "mongoose"

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId
  name: string
  email: string
  password: string
}


export interface IUserPayload {
  name: string
  email: string
  password: string
}
