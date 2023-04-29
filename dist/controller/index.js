"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const videos_controller_1 = __importDefault(require("./videos.controller"));
const router = express_1.default.Router();
router.use('/video', videos_controller_1.default);
exports.default = router;
