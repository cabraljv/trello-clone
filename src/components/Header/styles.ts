import styled from 'styled-components';
import trello_logo from '../../assets/trello-logo-white.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 100%;
  background: rgba(0, 0, 0, 0.15);
  h1 {
    font-size: 12px;
    span.trello-logo {
      background-image: url(${trello_logo});
      background-position: 100% 0;
      background-repeat: no-repeat;
      background-size: 80px 30px;
      cursor: pointer;
      display: inline-block;
      height: 30px;
      width: 80px;
    }
  }
  p {
    position: absolute;
    right: 10px;
  }
`;
