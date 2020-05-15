import JarActionTypes from './jar.types';

export const addTransaction = transaction => ({
    type: JarActionTypes.ADD_TRANSACTION,
    payload: transaction
});