import { NextFunction, Request, Response } from 'express';

import * as authService from '../services/authService'

export async function signUp(
    req: Request,
    res: Response
) {
    const { type, name, e_mail, phone, password } = req.body;

    await authService.createUser({ type, name, e_mail, phone, password });

    res.status(201).send('user registred sucessfully');
}

// export async function signIn(
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) {
//     const { e_mail, password } = req.body;

//     const token = await authService.signIn({ e_mail, password });

//     res.status(200).send({ token });
// }