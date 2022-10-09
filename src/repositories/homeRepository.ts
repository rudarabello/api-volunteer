import prisma from "../database";
import { Tschedule } from "../types/homeTypes";

export async function findAllSchedule(user_volunteer_id: number) {
    return await prisma.schedule.findMany({ where: { user_volunteer_id } });
}
export async function findAllManagers() {
    return await prisma.users.findMany({
        where: {
            type: "manager"
        },
        select: {
            name: true,
            e_mail: true,
        },
    });
}
export async function findAllVolunteers() {
    return await prisma.users.findMany({
        where: {
            type: "volunteer"
        },
        select: {
            name: true,
            e_mail: true,
        },
    });
}

