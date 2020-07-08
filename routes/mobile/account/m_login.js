import loginMobileAccount from "../../../controllers/mobile/account/m_login";
import { Router } from "express";

const router = Router();

router.post("/", loginMobileAccount);

export default router;
