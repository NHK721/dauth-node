import loginAccount from "../controllers/account/index";
import { Router } from "express";

const router = Router();

router.post("/login", loginAccount);

export default router;
