import styled from 'styled-components';

export const HistoryItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media screen and (max-width: 800px) {
      font-size: 18px;
    }
`;

export const TextContainer = styled.span`
    width: 25%;

    @media screen and (max-width: 800px) {
      width: 23%;
    }
`;