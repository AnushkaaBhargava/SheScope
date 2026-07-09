import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app=express();
connectDB();
app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/login",authRoutes);

app.get("/",(req,res)=>{
       res.send("Backend running!");
})

const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})