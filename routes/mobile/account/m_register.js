import registerMobileAdmin from "../../../controllers/mobile/account/m_register";
import { Router } from "express";

const router = Router();

router.post("/", registerMobileAdmin);

export default router;
