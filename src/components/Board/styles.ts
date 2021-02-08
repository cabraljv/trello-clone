import styled from 'styled-components';
import theme from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  width: 100%;
  color: ${theme.secondary};

  button.add-list {
    display: flex;
    margin: 10px 5px;
    width: 272px;
    height: 40px;
    align-items: center;
    padding: 0 10px;
    font-size: 14px;
    color: ${theme.text};
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.2);
    p {
      padding-left: 7px;
    }
    transition: background 0.15s;
  }
  button.add-list:hover {
    background: rgba(255, 255, 255, 0.35);
  }
  div.lists {
    display: flex;
    height: 100%;
  }
`;
