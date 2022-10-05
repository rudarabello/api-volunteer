import { encrypt, verifyPassword, generateUserToken } from "../utils/jwtUtils";
import * as userTypes from '../types/userTypes'
import * as authRepository from '../repositories/authRepository';
import * as errorUtils from '../utils/errorUtils';


export async function createUser(CreateUser: userTypes.CreateUser) {
    const { type, name, e_mail, phone, password } = CreateUser;
    const user = await authRepository.findUserByEmail(e_mail);
    if (user) throw errorUtils.conflictError('user already register')
    const passwordHash = encrypt(password);
    authRepository.insertUser({
        type, name, e_mail, phone, password: passwordHash,
    })
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

// export async function findUserByEmail(e_mail: string) {
//     const user = await authRepository.findUserByEmail(e_mail);

//     return user
// }

// export async function getUsers() {
//     const users = await authRepository.getUsers();

//     return users
// }