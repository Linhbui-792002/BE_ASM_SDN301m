import express from "express"
import authRouter from "./auth.router"
import upload from "./auth.upload"

const router = express.Router()

router.use(authRouter);
router.use(upload);

export default router;
