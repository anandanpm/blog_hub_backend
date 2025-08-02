import mongoose from "mongoose"
import type { IUser } from "../interfaces/iUserinterface"

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true, // Ensures email is unique across users
      trim: true,
      lowercase: true, // Store emails in lowercase for consistency
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address."], // Basic email regex validation
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      minlength: [6, "Password must be at least 6 characters long."], // Minimum password length
    },
  },
  { timestamps: true },
)

export const User = mongoose.model<IUser>("User", userSchema)
