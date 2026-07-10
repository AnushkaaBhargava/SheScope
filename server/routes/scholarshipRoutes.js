import express from "express";
import {getAllScholarships,createScholarship,getScholarshipById,updateScholarship,deleteScholarship} from "../controllers/scholarshipController.js";
import admin from "../middleware/adminMiddleware.js";
const router=express.Router();

router.get("/",getAllScholarships);

router.post("/",createScholarship);

router.get("/:id",admin,getScholarshipById);

router.put("/:id",admin,updateScholarship);

router.delete("/:id",admin,deleteScholarship);



export default router;