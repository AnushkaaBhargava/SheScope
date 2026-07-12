import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import scholarshipRoutes from "./routes/scholarshipRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import savedScholarshipRoutes from "./routes/savedScholarshipRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();
console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log(JSON.stringify(process.env.CLOUDINARY_API_KEY));
console.log("API Secret exists:", !!process.env.CLOUDINARY_API_SECRET);
const app=express();
connectDB();
app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/login",authRoutes);
app.use("/api/scholarships",scholarshipRoutes);
app.use("/api/scholarships",scholarshipRoutes);
app.use("/api/scholarships/:id",scholarshipRoutes);
app.use("/api/applications",applicationRoutes);
app.use("/api/saved",savedScholarshipRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/dashboard",dashboardRoutes);

app.use((err, req, res, next) => {
    console.error("GLOBAL ERROR");
    console.error(err);

    res.status(500).json({
        message: err.message,
        name: err.name,
        stack: err.stack,
    });
});

app.get("/",(req,res)=>{
       res.send("Backend running!");
})



const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})