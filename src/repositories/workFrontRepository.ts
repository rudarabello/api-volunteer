import prisma from "../database";
import { Tworkfront } from '../types/homeTypes';

export async function insertWorkFront(info: Tworkfront) {
    return await prisma.work_front.create({
        data: info
    });
};