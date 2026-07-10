import express from "express";
import {Profile,updateProfile} from "../controllers/ProfileController.js";
import protect from "../middleware/authMiddleware.js"

const router=express.Router();

router.get("/",protect,Profile);

router.put("/",protect,updateProfile);

export default router;