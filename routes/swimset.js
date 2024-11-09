import express from 'express';
import * as swimsetController from '../controllers/swimset.js';

export const swimsetRouter = express.Router()

swimsetRouter.get('/create', swimsetController.renderCreatePage);

swimsetRouter.post('/create', swimsetController.createSwimSet);

swimsetRouter.get('/swimset', swimsetController.renderSwimSetList);