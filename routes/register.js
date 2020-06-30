import express from "express";

const router = express.Router();
router.get("/register", (req, res, next) => {
  res.send("Hello world");
});

export default router;
