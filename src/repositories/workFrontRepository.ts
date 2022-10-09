import prisma from "../database";
import { Tworkfront } from '../types/homeTypes';
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

