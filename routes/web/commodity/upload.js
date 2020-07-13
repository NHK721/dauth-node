import addItem from "../../../controllers/web/commodity/addItem";
import upload from "../../../utills/upload";
import { Router } from "express";

const router = Router();
router.post("/", upload.single("img"), addItem);

export default router;
