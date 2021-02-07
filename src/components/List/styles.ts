import styled from 'styled-components';
import theme from '../../styles/themes';

export const Container = styled.div`
  background: ${theme.light_gray};
  padding: 5px 10px;
  width: 272px;
  margin: 10px 5px;
  border-radius: 5px;
  height: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  div.list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 16px;
    }
    button {
      font-size: 18px;
      border-radius: 3px;
      width: 32px;
      height: 32px;
    }
    button:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  div.cards-zone {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  footer {
    margin-top: auto;
    button.add-card {
      border-radius: 3px;
      display: flex;
      width: 100%;
      align-items: center;
      font-size: 14px;
      padding: 5px 8px;
      color: ${theme.secondary_text};
      p {
        padding-left: 10px;
      }
    }
    button:hover {
      background: rgba(0, 0, 0, 0.1);
      p {
        color: ${theme.secondary};
      }
    }
  }
`;
