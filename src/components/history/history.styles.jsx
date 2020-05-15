import styled from 'styled-components';

export const HistoryContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  margin-top: 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const Search = styled.input`
  font-size: 20px;
  width: 300px;
  height: 40px;
  text-align: center;
  margin-bottom: 30px;
`;

export const HistoryTitle = styled.h2`
`;

export const HistoryHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 25%;
  font-weight: 700;

  @media screen and (max-width: 800px) {
    width: 23%
  }
`;