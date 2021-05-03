import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,body {
    margin:0;
    padding:0;
  }
  *,*::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items:center;
    background: ${({theme}) => theme.primaryDark};
    color:${({theme}) => theme.primaryLight};
    display:flex;
    height:100vh;
    justify-content:center;
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`