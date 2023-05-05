import express from "express";
import {
  CreateVideoValidation,
  UpdateVideoValidation,
} from "../middleware/validation";
import { VideosService } from "../service/videos.service";

const router = express.Router();
const service = new VideosService();

router.get("/", service.getAll);
router.post("/", CreateVideoValidation, service.create);
router.get("/:id", service.getOne);

router.put("/:id", UpdateVideoValidation, service.updateOne);

router.delete("/:id", service.deleteOne);
router.delete("/all-data", service.deleteAll);

export default router;
