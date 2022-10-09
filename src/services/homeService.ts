import { schedule } from '@prisma/client';
import * as homeRepository from '../repositories/homeRepository';

export async function findAllSchedule(user_volunteer_id: number): Promise<schedule[] | []> {
    const schedule = await homeRepository.findAllSchedule(user_volunteer_id);
    return schedule;
}
export async function getNameOfManagers() {
    const nameOfManagers = await homeRepository.findAllManagers();
    return nameOfManagers;
}
export async function getNameOfVolunteers() {
    const nameOfVolunteers = await homeRepository.findAllVolunteers();
    return nameOfVolunteers;
}