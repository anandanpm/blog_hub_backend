import mongoose from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
}