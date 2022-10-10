import * as workFrontRepository from '../repositories/workFrontRepository';
import * as homeTypes from '../types/homeTypes';
import * as userTypes from '../types/userTypes';
import * as errorUtils from '../utils/errorUtils';
import * as authRepository from '../repositories/authRepository';

export async function verifyTypeUser(UserId: userTypes.UserId) {
    const verifyTypeUser = await workFrontRepository.findbyUserId(UserId);
    if (!verifyTypeUser) throw errorUtils.conflictError('This user is not admin');
}

export async function getAllWorkFronts(UserId: userTypes.UserId) {
    const allWorkFronts = await workFrontRepository.getAllWorkFronts(UserId);
    return allWorkFronts;
}

export async function createWorkFront(Tworkfront: homeTypes.Tworkfront) {
    const verifyName = await workFrontRepository.findByWorkFrontName(Tworkfront);
    if (verifyName) throw errorUtils.conflictError('This work front was already registred');
    const inserted = await workFrontRepository.insertWorkFront(Tworkfront);
    if (!inserted) throw errorUtils.conflictError('Conflict on creation of work front');
}

export async function createSchedule(TscheduleId: homeTypes.TscheduleId) {
    const inserted = await workFrontRepository.insertSchedule(TscheduleId);
    if (!inserted) throw errorUtils.conflictError('Conflict on creation of work front');
}

