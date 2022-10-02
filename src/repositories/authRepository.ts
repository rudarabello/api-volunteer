import prisma from "../database";

export async function register(
    type: string,
    name: string,
    e_mail: string,
    phone: number,
    password: string,
) {
    await prisma.users.create({
        data: {
            type,
            name,
            e_mail,
            phone,
            password,
        }
    });
};

export async function findUserByEmail(e_mail: string) {
    return await prisma.users.findUnique({ where: { e_mail } });
};