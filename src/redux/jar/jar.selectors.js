import { createSelector } from 'reselect';

const selectTransaction = state => state.transaction;

export const selectTransactionsItems = createSelector(
    [selectTransaction],
    (transaction) => transaction.transactionItems
);