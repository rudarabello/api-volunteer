import { users } from '@prisma/client';

export type CreateUser = Omit<users, "user_id">;

export type LoginUser = Omit<users, "user_id" | "type" | "name" | "phone">;

export type TypeUser = Omit<users, "user_id" | "name" | "e_mail" | "phone" | "password">;

export type UserId = Omit<users, "type" | "name" | "e_mail" | "phone" | "password">;

export type EmailUser = Omit<users, "user_id" | "type" | "name" | "phone" | "password">;