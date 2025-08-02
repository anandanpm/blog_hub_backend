import type { IBlog } from "../interfaces/iBloginterface"
import * as blogRepo from "../repositories/blogRepo"

export const createBlogService = async (data: IBlog) => blogRepo.createBlog(data)
export const getAllBlogsService = async () => blogRepo.getAllBlogs()
export const getBlogByIdService = async (id: string) => blogRepo.getBlogById(id)
export const updateBlogService = async (id: string, data: Partial<IBlog>) => blogRepo.updateBlog(id, data)
export const deleteBlogService = async (id: string) => blogRepo.deleteBlog(id)
