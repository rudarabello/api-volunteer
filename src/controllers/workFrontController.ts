
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
export const getWorkFront = async (req: Request, res: Response) => {
    const { userId } = res.locals.user_id;
    const allWorkfronts = await workFrontService.getAllWorkFronts(userId);
    res.status(201).send(allWorkfronts);
}

export const postScheduleCreate = async (req: Request, res: Response) => {
    const { work_front_id, user_id, date_to_work, time_to_work } = req.body;
    const info: homeTypes.TscheduleId = {
        user_volunteer_id: user_id,
        work_front_id: work_front_id,
        date_to_work: date_to_work,
        time_to_work: time_to_work,
        invite_accept: false
    }
    await workFrontService.createSchedule(info);
    res.status(201).send('Schedule registred sucessfully');
}

