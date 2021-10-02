import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import { fonts, fontSizes } from "./fonts";

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: ${fonts.fontBody};
    }

    html,
    body {
        box-sizing: border-box;
        margin: 0;
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? colors.dark : colors.secondary};
        margin: 0;
        font-size:${fontSizes.fontM};
        z-index:0;
    }

    h1{
        font-family: ${fonts.fontTitle};
        font-size: ${fontSizes.fontXL};
        weight: 800;
    }

    h2{
        font-family: ${fonts.fontTitle};
        font-size: ${fontSizes.fontL};
        weight: 500;
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
