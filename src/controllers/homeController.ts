import { Response, Request } from 'express';
import * as homeService from '../services/homeService';

export const getAllSchedule = async (req: Request, res: Response) => {
    const { userId } = res.locals.user_id;
    const schedule = await homeService.findAllSchedule(userId);
    res.status(201).send(schedule);
};

export const getNameManagers = async (req: Request, res: Response) => {
    const nameOfManagers = await homeService.getNameOfManagers();
    res.status(201).send(nameOfManagers);
};

export const getNameVolunteers = async (req: Request, res: Response) => {
    const nameOfVolunteers = await homeService.getNameOfVolunteers();
    res.status(201).send(nameOfVolunteers);
};
export const postConfirmSchedule = async (req: Request, res: Response) => {
    const { schedule_id } = req.body;
    await homeService.confirmSchedule(schedule_id);
    res.status(201).send('Schedule confirmed');
};
