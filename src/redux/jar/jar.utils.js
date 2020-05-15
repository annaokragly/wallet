export const addTransactionToHistory = (transactionItems, transactionItemToAdd) => {

    return [...transactionItems, {...transactionItemToAdd}];
};