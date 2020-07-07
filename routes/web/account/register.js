import registerAdmin from "../../../controllers/web/account/register";
import { Router } from "express";

const router = Router();

router.post("/", registerAdmin);

export default router;
