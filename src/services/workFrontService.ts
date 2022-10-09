import * as workFrontRepository from '../repositories/workFrontRepository';
import * as homeTypes from '../types/homeTypes';
import * as userTypes from '../types/userTypes';
import * as errorUtils from '../utils/errorUtils';

export async function verifyTypeUser(UserId: userTypes.UserId) {
    const verifyTypeUser = await workFrontRepository.findbyUserId(UserId);
    if (!verifyTypeUser) throw errorUtils.conflictError('This user is not admin');
}

export async function createWorkFront(Tworkfront: homeTypes.Tworkfront) {
    const verifyName = await workFrontRepository.findByWorkFrontName(Tworkfront);
    if (verifyName) throw errorUtils.conflictError('This work front was already registred');
    const inserted = await workFrontRepository.insertWorkFront(Tworkfront);
    if (!inserted) throw errorUtils.conflictError('Conflict on creation of work front');
}
