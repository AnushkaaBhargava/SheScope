import express from "express";
import {applyScholarship,getMyApplications, getAllApplications,updateApplicationStatus} from "../controllers/applicationController.js";
import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";

const router=express.Router();

router.post("/",protect,applyScholarship);

router.get("/my",protect,getMyApplications);

router.get("/",protect,admin,getAllApplications);

router.put("/:id",protect,admin,updateApplicationStatus);

export default router;
