import prisma from "../database";
import { users } from '@prisma/client';

export async function register(dataUser: users) {
    await prisma.users.create({
        data: dataUser
    });
};

export async function findUserByEmail(e_mail: string) {
    return await prisma.users.findUnique({ where: { e_mail } });
};