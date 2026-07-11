import express from "express";
import {getAllScholarships,createScholarship,getScholarshipById,updateScholarship,deleteScholarship} from "../controllers/scholarshipController.js";
import admin from "../middleware/adminMiddleware.js";
import protect from "../middleware/authMiddleware.js"
const router=express.Router();

router.get("/",getAllScholarships);

router.post("/",protect,admin,createScholarship);

router.get("/:id",getScholarshipById);

router.put("/:id",protect,admin,updateScholarship);

router.delete("/:id",protect,admin,deleteScholarship);



export default router;