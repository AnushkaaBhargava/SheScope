import express from "express";
import {applyScholarship,getMyApplications} from "../controllers/applicationController.js";
import protect from "../middleware/authMiddleware.js";

const router=express.Router();

router.post("/",protect,applyScholarship);

router.get("/my",protect,getMyApplications);

export default router;
