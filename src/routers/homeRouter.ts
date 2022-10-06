import { Router } from "express";
import { getWorkFrontController } from "../controllers/homeController";
import { validateToken } from "../middlewares/validateToken";



export const homeRouter = Router();

homeRouter.get('/home', validateToken, getWorkFrontController);

