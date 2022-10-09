
import { Response, Request } from 'express'
import * as workFrontService from '../services/workFrontService'
import * as homeTypes from '../types/homeTypes';

export const postWorkFrontCreate = async (req: Request, res: Response) => {
    const { work_front_name } = req.body;
    const { userId } = res.locals.user_id;
    const info: homeTypes.Tworkfront = {
        work_front_name,
        manager_id: userId
    }
    await workFrontService.verifyTypeUser(userId);
    await workFrontService.createWorkFront(info);
    res.status(201).send('Work front registred sucessfully');
}
