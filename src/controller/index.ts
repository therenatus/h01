import express, { Router } from 'express';
import videoController from './videos.controller';

const router = express.Router();

router.use('/video', videoController);

export default router;
