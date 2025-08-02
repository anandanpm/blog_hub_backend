import type { IBlog } from "../interfaces/iBloginterface"
import { Blog } from "../models/Blog"

export const createBlog = (data: IBlog) => Blog.create(data)
export const getAllBlogs = () => Blog.find().populate("author", "name email")
export const getBlogById = (id: string) => Blog.findById(id).populate("author", "name email")
export const updateBlog = (id: string, data: Partial<IBlog>) => Blog.findByIdAndUpdate(id, data, { new: true })
export const deleteBlog = (id: string) => Blog.findByIdAndDelete(id)
