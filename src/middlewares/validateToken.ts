import { decodeToken } from '../utils/jwtUtils'
import { NextFunction, Request, Response } from "express";

export const validateToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split('Bearer ')[1];
    if (!token) {
        return res.status(403).json({ message: 'token was not found!' })
    }
    const decoded = decodeToken(token);
    if (!decoded) {
        return res.status(401).send('Unauthorized');
    }
    res.locals.user_id = decoded;
    next();
};
