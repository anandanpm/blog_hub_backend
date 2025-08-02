import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser" // Import cookie-parser
import authRoutes from "./routes/authRoutes"
import blogRoutes from "./routes/blogRoutes"

dotenv.config() // Load environment variables from .env file

const app = express()

app.use(express.json()) // Enable JSON body parsing
app.use(cookieParser()) // Use cookie-parser middleware

app.use("/api/auth", authRoutes)
app.use("/api/blogs", blogRoutes)

export default app
