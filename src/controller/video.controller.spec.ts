import express from "express";
import { VideosServiceTest } from "../service/video.service.spec";

const router = express.Router();
const service = new VideosServiceTest();

router.delete("/all-data", service.deleteAll);

export default router;
