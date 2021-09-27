import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const StyledGlobalStyle = createGlobalStyle`


    * {
        font-family: 'Lora', serif;
    }

    html,
    body {
        box-sizing: border-box;
        margin: 0;
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? colors.dark : colors.secondary};
        margin: 0;  
    }

    h1{
        font-family: 'Lora', serif;
        font-size: 2rem;
        weight: 500;
    }

    h2{
        font-family: 'Lora', serif;
        font-size: 1.8rem;
        weight: 200;
    }

    #root{
        width:100%;
    }

    button,li,a{
        text-decoration: none;
    }

`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
