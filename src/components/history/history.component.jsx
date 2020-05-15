import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HistoryItem from '../../components/history-item/history-item.component';

import {
  selectTransactionsItems
} from '../../redux/jar/jar.selectors';

import {
  HistoryTitle,
  Search,
  HistoryContainer,
  HistoryHeaderContainer,
  HeaderBlockContainer
} from './history.styles';

const History = ({ firebaseItems }) => {
  const [filter, setFilter] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleChange = event => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    const results = firebaseItems.filter(transactionItem =>
      transactionItem.name.toLowerCase().includes(filter) || 
      transactionItem.amount.toLowerCase().includes(filter) ||
      transactionItem.createdAt.toDate().toString().toLowerCase().includes(filter)
    );
    setSearchResults(results);
  }, [filter]);

  return (
    <HistoryContainer>

      <HistoryTitle>History</HistoryTitle>

      <Search 
        type='text' 
        placeholder='Search history'
        value={filter} 
        onChange={handleChange} 
      />

      <HistoryHeaderContainer>
        <HeaderBlockContainer>
          <span>Date</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Name</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Action</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Amount</span>
        </HeaderBlockContainer>
      </HistoryHeaderContainer>
      {!filter ? firebaseItems.map(transactionItem => (
        <HistoryItem key={transactionItem.id} transactionItem={transactionItem} />
      )) : searchResults.map(transactionItem => (
        <HistoryItem key={transactionItem.id} transactionItem={transactionItem} />
      ))
      }
    </HistoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  transactionItems: selectTransactionsItems,
});

export default connect(mapStateToProps)(History);