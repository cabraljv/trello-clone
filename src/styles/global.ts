import { createGlobalStyle } from 'styled-components';
import theme from './themes';

const global = createGlobalStyle`

 *{
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  html, border-style, #root {
    height: 100%;
  }
  button {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  body{
    font-family: 'Roboto', sans-serif;
    background: ${theme.primary};
    color: ${theme.text};
    -webkit-font-smoothing: antaliased !important;
    font-size: 14px;
  }
  ul{
    list-style: none;
  }
`;

export default global;
