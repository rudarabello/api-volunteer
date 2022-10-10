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

// export async function findUserIdByEmail(e_mail: string) {
//     const email = e_mail;
//     const user_volunteer_id = await prisma.users.findUnique({
//         where: {
//             e_mail: email
//         },
//         select: {
//             user_id: true
//         }
//     });
//     return user_volunteer_id
// };
