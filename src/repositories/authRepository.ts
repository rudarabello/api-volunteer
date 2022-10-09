import prisma from "../database";
import { CreateUser } from '../types/userTypes';

export async function insertUser(dataUser: CreateUser) {
    await prisma.users.create({
        data: dataUser
    });
};

export async function findUserByEmail(e_mail: string) {
    return await prisma.users.findUnique({ where: { e_mail } });
};

export async function findUserByPhone(phone: string) {
    return await prisma.users.findUnique({ where: { phone } });
};

export const getUserById = async (user_id: number) => {
    return await prisma.users.findUnique({ where: { user_id } });
};
