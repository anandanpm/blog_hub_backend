import mongoose from "mongoose"
import type { IBlog } from "../interfaces/iBloginterface"

const blogSchema = new mongoose.Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
)

export const Blog = mongoose.model<IBlog>("Blog", blogSchema)
