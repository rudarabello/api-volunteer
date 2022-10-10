import prisma from "../database";
import { Tworkfront, TscheduleId } from '../types/homeTypes';
import { UserId } from '../types/userTypes';

export async function insertWorkFront(info: Tworkfront) {
    return await prisma.work_front.create({
        data: info
    });
};
export async function findByWorkFrontName(info: Tworkfront) {
    const { work_front_name } = info;
    return await prisma.work_front.findFirst({
        where: { work_front_name }
    })
}
export async function getAllWorkFronts(info: UserId) {
    const { user_id } = info;
    return await prisma.work_front.findMany({
        where: {
            manager_id: user_id
        },
        select: {
            work_front_id: true,
            work_front_name: true,
        },
    });
}

export async function findbyUserId(info: UserId) {
    const { user_id } = info;
    const type = "admim";
    return await prisma.users.findFirst({
        where: {
            user_id,
            type
        }
    });
};
export async function insertSchedule(info: TscheduleId) {
    return await prisma.schedule.create({
        data: info
    });
};