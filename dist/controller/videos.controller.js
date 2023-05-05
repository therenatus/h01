"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validation_1 = require("../middleware/validation");
const videos_service_1 = require("../service/videos.service");
const router = express_1.default.Router();
const service = new videos_service_1.VideosService();
router.get("/", service.getAll);
router.post("/", validation_1.CreateVideoValidation, service.create);
router.get("/:id", service.getOne);
router.put("/:id", validation_1.UpdateVideoValidation, service.updateOne);
router.delete("/:id", service.deleteOne);
router.delete("/all-data", service.deleteAll);
exports.default = router;
