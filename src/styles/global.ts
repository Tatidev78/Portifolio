import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #0B0B0F;
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
  }

  h1, h2{
    font-family: 'Outfit', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyle