import * as workFrontRepository from '../repositories/workFrontRepository';
import * as homeTypes from '../types/homeTypes';
import * as errorUtils from '../utils/errorUtils';


export async function createWorkFront(Tworkfront: homeTypes.Tworkfront) {
    // verificar se ja tem um work front com esse nome
    // verificar se o user é do tipo admin       
    const inserted = await workFrontRepository.insertWorkFront(Tworkfront);
    if (!inserted) throw errorUtils.conflictError('Conflict on creation of work front');
}