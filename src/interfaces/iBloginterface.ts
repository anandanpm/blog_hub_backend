import type mongoose from "mongoose"
import type { Document } from "mongoose"

export interface IBlog extends Document {
  _id: mongoose.Types.ObjectId
  title: string
  content: string
  author: mongoose.Types.ObjectId
}
