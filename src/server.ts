import app from "./app"
import mongoose from "mongoose"

const PORT = process.env.PORT 
const MONGO_URI = process.env.MONGO_URI as string 

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!")
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch((err) => console.error("MongoDB connection error:", err))
