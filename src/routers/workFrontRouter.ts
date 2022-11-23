import { Router } from 'express';
import * as workFrontController from '../controllers/workFrontController';
import { validateToken } from '../middlewares/validateToken';

export const workFrontRouter = Router();

workFrontRouter.post('/create-wf', validateToken, workFrontController.postWorkFrontCreate);
workFrontRouter.get('/get-wf', validateToken, workFrontController.getWorkFront);

workFrontRouter.post('/create-sc', validateToken, workFrontController.postScheduleCreate);
