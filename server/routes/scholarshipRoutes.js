import express from "express";
import {getAllScholarships,createScholarship,getScholarshipById} from "../controllers/scholarshipController.js";

const router=express.Router();

router.get("/",getAllScholarships);

router.post("/",createScholarship);

router.get("/:id",getScholarshipById);

export default router;