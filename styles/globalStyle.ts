import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  @font-face {
    font-family: 'BM-JUA';
    src: url('https://cdn.jsdelivr.net/gh/wizfile/font/BM-JUA.eot');
    src:url('https://cdn.jsdelivr.net/gh/wizfile/font/BM-JUA.woff') format('woff');
    font-style: normal;
}
  html,
  body {
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 0 auto;
    background-color: #F1EFEA;
    max-width: 100vw;
    min-height: 100vh;
    /* mobile viewport bug fix */
    min-height: fill-available;
  }
  
  #root {
    margin: 0 auto;
    font-family: 'Jua', sans-serif;
  }
 
  html {
    font-size: 62.5%;
    
  }
  
  * {
    box-sizing: border-box;
    
    font-family: 'BM-JUA'!important; 
  }
  
  body, button {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
  }
  
  button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    -webkit-tap-highlight-color : transparent;
  }
  
  a, a:visited {
    text-decoration: none;
    color: "black";
  }
`;

export default GlobalStyle;
