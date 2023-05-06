import express, { Router } from "express";
import videoController from "./videos.controller";
import videoTestController from "./video.controller.spec";

const router = express.Router();

router.use("/videos", videoController);
router.use("/testing", videoTestController);

export default router;
