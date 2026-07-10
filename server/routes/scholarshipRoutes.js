import express from "express";
import {getAllScholarships,createScholarship} from "../controllers/scholarshipController.js";

const router=express.Router();

router.get("/",getAllScholarships);

router.post("/",createScholarship);

export default router;