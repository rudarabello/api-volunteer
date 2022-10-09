import { Router } from "express";
import * as workFrontController from "../controllers/workFrontController";
import { validateToken } from "../middlewares/validateToken";



export const workFrontRouter = Router();

workFrontRouter.post('/create-wf',
    validateToken,
    workFrontController.postWorkFrontCreate
);


