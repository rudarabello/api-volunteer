import { Router } from "express";
import * as homeController from "../controllers/homeController";
import { validateToken } from "../middlewares/validateToken";



export const homeRouter = Router();

homeRouter.get('/home', validateToken, homeController.getAllSchedule);
homeRouter.get('/home/mangers', validateToken, homeController.getNameManagers);
homeRouter.get('/home/volunteers', validateToken, homeController.getNameVolunteers);
homeRouter.post('/home/confirm', validateToken, homeController.postConfirmSchedule);