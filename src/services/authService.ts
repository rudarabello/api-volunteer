import { encrypt, verifyPassword } from "../utils/jwtUtils";
import * as userTypes from '../types/userTypes'
import * as authRepository from '../repositories/authRepository';
import * as errorUtils from '../utils/errorUtils';


export async function createUser(CreateUser: userTypes.CreateUser) {
    const { type, name, e_mail, phone, password } = CreateUser;

    const user = await authRepository.findUserByEmail(e_mail);

    if (user) throw errorUtils.conflictError('user')

    const passwordHash = encrypt(password);

    authRepository.insertUser({
        type, name, e_mail, phone, password: passwordHash,
    })
}

// export async function loginUser(dataUser: authRepository.CreateUser) {
//     const { email, password } = dataUser;

//     const user = await authRepository.findByEmail(email);
//     if (!user) throw errorUtils.unauthorizedError('credentials');

//     const matchPassword = await bcrypt.compare(password, user.password);
//     if (!matchPassword) throw errorUtils.unauthorizedError('credentials');

//     const secretKey = process.env.JWT_SECRET_KEY ?? 'secretKey';

//     const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '30d' })
//     return token;
// }

// export async function findUserByEmail(e_mail: string) {
//     const user = await authRepository.findUserByEmail(e_mail);

//     return user
// }

// export async function getUsers() {
//     const users = await authRepository.getUsers();

//     return users
// }