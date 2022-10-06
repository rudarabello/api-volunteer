import prisma from "../database";
import { Tschedule } from "../types/homeTypes";

export async function findAllSchedule(user_volunteer_id: number) {
    return await prisma.schedule.findMany({ where: { user_volunteer_id } });
}