import { stripHtml } from 'string-strip-html';
import { NextFunction, Request, Response } from "express";

export const sanitizeDatas = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) next();

    Object.keys(req.body).forEach((key) => {
      if (typeof req.body[key] === 'string') {
        req.body[key] = stripHtml(req.body[key]).result.trim();
      }
    });

    next();
  };
};
