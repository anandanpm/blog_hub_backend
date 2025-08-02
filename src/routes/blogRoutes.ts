import { Router } from "express"
import * as blogController from "../controllers/blogController"
import { authMiddleware } from "../middleware/authMiddleware"

const router = Router()

router.get("/", blogController.getAllBlogs)
router.get("/:id", blogController.getBlogById)
router.post("/", authMiddleware, blogController.createBlog)
router.put("/:id", authMiddleware, blogController.updateBlog)
router.delete("/:id", authMiddleware, blogController.deleteBlog)

export default router
