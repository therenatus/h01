import express, { Router } from "express";
import videoController from "./videos.controller";

const router = express.Router();

router.use("/videos", videoController);

export default router;
