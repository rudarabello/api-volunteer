import { Router } from "express";
import * as homeController from "../controllers/homeController";
import { validateToken } from "../middlewares/validateToken";



export const homeRouter = Router();

homeRouter.get('/home', validateToken, homeController.getWorkFrontController);
homeRouter.get('/home/mangers', validateToken, homeController.getNameManagers);
homeRouter.get('/home/volunters', validateToken, homeController.getNameVolunteers);