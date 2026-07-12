import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => ({
        folder: "SheScope/resumes",
        resource_type: "raw",
        use_filename: true,
        unique_filename: false
    })
});

const resumeUpload = multer({ storage });

export default resumeUpload;