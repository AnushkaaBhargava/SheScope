import express from "express";
import {Profile,updateProfile,uploadProfilePicture,uploadResume} from "../controllers/ProfileController.js";
import protect from "../middleware/authMiddleware.js"
import upload from "../middleware/uploadMiddleware.js";
import resumeUpload from "../middleware/resumeUploadMiddleware.js";


const router=express.Router();

router.get("/",protect,Profile);

router.put("/",protect,updateProfile);

router.put(
  "/profile-picture",
  protect,
  (req, res, next) => {
    console.log("Reached before upload");
    next();
  },
  upload.single("profilePic"),
  uploadProfilePicture
);

router.put(
    "/resume",
    protect,
    resumeUpload.single("resume"),
    uploadResume
);

export default router;