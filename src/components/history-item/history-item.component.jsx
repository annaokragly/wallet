import React from 'react';
// import { connect } from 'react-redux';

import {
    HistoryItemContainer,
    TextContainer
} from './history-item.styles';


const HistoryItem = ({ transactionItem }) => {
    return (
        <HistoryItemContainer>
            <TextContainer>{transactionItem.createdAt.toDate().toString()}</TextContainer>
            <TextContainer>{transactionItem.name.replace(/(.{20})/g,'$1\n')}</TextContainer>
            <TextContainer>{transactionItem.action}</TextContainer>
            <TextContainer>{transactionItem.amount}zł</TextContainer>
        </HistoryItemContainer>
    );
};


export default HistoryItem;