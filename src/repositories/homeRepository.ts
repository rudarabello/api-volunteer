import prisma from "../database";

export async function findAllSchedule(user_volunteer_id: number) {
    return await prisma.schedule.findMany({
        where: {
            user_volunteer_id
        }, select: {
            schedule_id: true,
            date_to_work: true,
            time_to_work: true,
            invite_accept: true,
            work_front: {
                select: {
                    work_front_name: true,
                }
            },
            users: {
                select: {
                    name: true,
                }
            }
        }
    });
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
        select: {
            user_id: true,
            name: true,
            e_mail: true,
        },
    });
}

export async function confirmScheduleRepository(schedule_id: any) {
    return await prisma.schedule.update({
        where: {
            schedule_id
        },
        data: {
            invite_accept: true
        }
    })
}
