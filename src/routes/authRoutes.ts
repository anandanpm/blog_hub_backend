import { Router } from "express"
import * as authController from "../controllers/authController"
import { authMiddleware } from "../middleware/authMiddleware"

const router = Router()

router.post("/register", authController.register)
router.post("/login", authController.login)
router.post('/logout', authController.logout) 
router.get('/me', authMiddleware,authController.getProfile)

export default router
