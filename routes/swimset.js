import express from 'express';
import * as swimsetController from '../controllers/swimset.js';

export const swimsetRouter = express.Router()

swimsetRouter.get('/create', swimsetController.create);