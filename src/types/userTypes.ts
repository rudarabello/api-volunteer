import { users } from '@prisma/client';

export type CreateUser = Omit<users, "user_id">;

export type LoginUser = Omit<users, "user_id" | "type" | "name" | "phone">;