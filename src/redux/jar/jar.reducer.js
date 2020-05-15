import JarActionTypes from './jar.types';
import { addTransactionToHistory } from './jar.utils';

const INITIAL_STATE = {
    transactionItems: []
};

const jarReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case JarActionTypes.ADD_TRANSACTION:
            return {
                ...state,
                transactionItems: addTransactionToHistory(state.transactionItems, action.payload)
            };
        default:
            return state;
    }
};

export default jarReducer;