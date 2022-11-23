import { schedule, work_front } from '@prisma/client';

export type Tschedule = Omit<schedule, 'schedule_id' | 'work_front_id' | 'date_to_work' | 'time_to_work' | 'invite_accept'>;

export type Tworkfront = Omit<work_front, 'work_front_id'>;

export type TscheduleId = Omit<schedule, 'schedule_id'>;
