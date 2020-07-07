import loginAccount from "../../../controllers/web/account/login";
import { Router } from "express";

const router = Router();

router.post("/", loginAccount);

export default router;
