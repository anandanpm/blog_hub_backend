import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser" // Import cookie-parser
import authRoutes from "./routes/authRoutes"
import blogRoutes from "./routes/blogRoutes"
import { errorHandler } from "./middleware/errorHandler"

dotenv.config() 

const app = express()

app.use(express.json()) 
app.use(cookieParser()) 

app.use(cors({
  origin: process.env.FRONTEND_URI , // your frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    next();
});


app.use("/api/auth", authRoutes)
app.use("/api/blogs", blogRoutes)


app.use(errorHandler)

export default app
