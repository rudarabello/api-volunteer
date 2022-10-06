import { schedule } from '@prisma/client';

export type Tschedule = Omit<schedule, "schedule_id" | "work_front_id" | "date_to_work" | "time_to_work" | "invite_accept">;
