import { schedule } from '@prisma/client';
import *as homeRepository from '../repositories/homeRepository';

export async function findAllSchedule(user_volunteer_id: number): Promise<schedule[] | []> {
    const schedule = await homeRepository.findAllSchedule(user_volunteer_id);
    return schedule;
}
