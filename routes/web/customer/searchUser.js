import searchUser from "../../../controllers/web/customer/searchUser";
import { Router } from "express";

const router = Router();
router.post("/", searchUser);

export default router;
