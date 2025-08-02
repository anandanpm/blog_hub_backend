import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser" // Import cookie-parser
import authRoutes from "./routes/authRoutes"
import blogRoutes from "./routes/blogRoutes"
import { errorHandler } from "./middleware/errorHandler"

dotenv.config() 

const app = express()

app.use(express.json()) 
app.use(cookieParser()) 

app.use("/api/auth", authRoutes)
app.use("/api/blogs", blogRoutes)

app.use(errorHandler)

export default app
