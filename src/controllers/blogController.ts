import type { Request, Response } from "express"
import * as blogService from "../services/blogService"

export const createBlog = async (req: Request, res: Response) => {
  try {
    
    const blog = await blogService.createBlogService({ ...req.body, author: req.userId })
    res.status(201).json(blog)
  } catch (err:any) {
    res.status(400).json({ message: err.message })
  }
}

export const getAllBlogs = async (_req: Request, res: Response) => {
  const blogs = await blogService.getAllBlogsService()
  res.json(blogs)
}

export const getBlogById = async (req: Request, res: Response) => {
  const blog = await blogService.getBlogByIdService(req.params.id)
  res.json(blog)
}

export const updateBlog = async (req: Request, res: Response) => {
  const blog = await blogService.updateBlogService(req.params.id, req.body)
  res.json(blog)
}

export const deleteBlog = async (req: Request, res: Response) => {
  await blogService.deleteBlogService(req.params.id)
  res.status(204).send()
}
