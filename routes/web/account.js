import loginAccount from "../../controllers/web/account";
import { Router } from "express";

const router = Router();

router.post("/login", loginAccount);

export default router;
