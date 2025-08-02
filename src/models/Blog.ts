import mongoose from "mongoose"
import type { IBlog } from "../interfaces/iBloginterface"

const blogSchema = new mongoose.Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, "Blog title is required."], // Custom error message
      trim: true, // Remove leading/trailing whitespace
      minlength: [3, "Title must be at least 3 characters long."],
      maxlength: [100, "Title cannot exceed 100 characters."],
    },
    content: {
      type: String,
      required: [true, "Blog content is required."],
      trim: true,
      minlength: [10, "Content must be at least 10 characters long."],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author is required."],
    },
  },
  { timestamps: true },
)

export const Blog = mongoose.model<IBlog>("Blog", blogSchema)
