import styled from 'styled-components';

export const WalletContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin-right: 100px;

  @media screen and (max-width: 800px) {
    width: 320px;
  }
`;

export const WalletTitle = styled.h2`
  margin: 10px 0;
`;

export const WalletBalance = styled.div`
  margin-top: 30px 0;
  font-size: 36px;`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WalletMainContainer = styled.div`
  width: 1250px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;