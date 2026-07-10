import express from "express";
import { saveScholarship ,getSavedScholarships,deleteSavedScholarship} from "../controllers/savedScholarshipController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, saveScholarship);

router.get("/", protect, getSavedScholarships);

router.delete("/",protect,deleteSavedScholarship);

export default router;