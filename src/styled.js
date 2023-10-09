import { createGlobalStyle, } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    .body {
        margin: 0 auto;
        max-width: 1000px;
        background-color: ${({theme}) => theme.colors.alto};
        font-family: "Lato", sans-serif;
    }

`;

export const theme = {
    breakpoints: {
        mobile: 767
    },
    colors: {
        white: '#FFFFFF',
        teal: '#008080',
        hoverTeal: 'hsl(180, 100%, 30%)',
        red: '#DC143C',
        grey: '#808080',
        green: '#008F00',
        alto: '#dfdfdf',
        hoverRed: 'hsl(0, 100%, 65%)',
        hoverGreen: 'hsl(120, 100%, 35%)',
    }
};