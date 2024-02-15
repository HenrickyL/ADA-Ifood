import { createGlobalStyle } from 'styled-components';
import { Colors } from './_middlewares/Color';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-family: sans-serif;
    scroll-behavior: smooth;
    -webkit-user-drag: none; /* Dragable */
  }

  body {
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.background};
  }
`;

export default GlobalStyle;
