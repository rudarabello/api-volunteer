import { encrypt, verifyPassword, generateUserToken } from '../utils/jwtUtils';
import * as userTypes from '../types/userTypes';
import * as authRepository from '../repositories/authRepository';
import * as errorUtils from '../utils/errorUtils';

export async function createUser(CreateUser: userTypes.CreateUser) {
    const { type, name, e_mail, phone, password } = CreateUser;
    const emailVerify = await authRepository.findUserByEmail(e_mail);
    if (emailVerify) throw errorUtils.conflictError('user already register');
    const phoneVerify = await authRepository.findUserByPhone(phone);
    if (phoneVerify) throw errorUtils.conflictError('Your phone number is already registred');
    const passwordHash = encrypt(password);
    authRepository.insertUser({
        type,
        name,
        e_mail,
        phone,
        password: passwordHash,
    });
}

export async function loginUser(LoginUser: userTypes.LoginUser) {
    const { e_mail, password } = LoginUser;
    const user = await authRepository.findUserByEmail(e_mail);
    if (!user) throw errorUtils.unauthorizedError('Your credentials does not exists');
    const matchPassword = await verifyPassword(password, user.password);
    if (!matchPassword) throw errorUtils.unauthorizedError('Wrong password');
    const token: string = generateUserToken(user.user_id);
    return token;
}

