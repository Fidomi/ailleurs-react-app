/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
import { fontSizes, fonts } from './fonts';
import React from 'react';
import colors from './colors';
import { createGlobalStyle } from 'styled-components';
import device from './device';

const StyledGlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: ${fonts.fontBody};
    }

    html,
    body {
        margin: 0;
        background-color: ${({ isDarkMode }) =>
            isDarkMode ? colors.dark : colors.secondary};
        margin: 0;
        font-size:${fontSizes.fontM};
        z-index:0;
    }

    h1{
        font-family: ${fonts.fontTitle};
        font-size: ${fontSizes.fontM};
        weight: 800;
        @media ${device.tablet} {
            font-size: ${fontSizes.fontL};
        }
        @media ${device.laptop} {
            font-size: ${fontSizes.fontXL};
        }
        @media ${device.desktop} {
            font-size: ${fontSizes.fontXXL};
        }
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
