import { NextFunction, Request, Response } from 'express';

export const sanitizeDatas = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) next();

    Object.keys(req.body).forEach((key) => {
        if (typeof req.body[key] === 'string') {
            req.body[key] = req.body[key].replace(/<\/?[^>]+(>|$)/g, '').trim();
        }
    });

    next();
};
