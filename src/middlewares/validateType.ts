import { NextFunction, Request, Response } from "express";
import * as errorUtils from '../utils/errorUtils';
import '../config/index';

export async function validateType(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const token = req.body.token;

    if (token === process.env.MANAGER_KEY) {
        res.locals.type = "admin";
        next();
    } else if (token === process.env.LEADER_KEY) {
        res.locals.type = "manager";
        next();
    } else if (token === process.env.VOLUNTEER_KEY) {
        res.locals.type = "volunteer";
        next();
    } else {
        throw errorUtils.conflictError('Wrong token, please verify');
    }
};