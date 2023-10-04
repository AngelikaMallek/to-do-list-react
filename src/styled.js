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
        background-color: #dfdfdf;
        font-family: "Lato", sans-serif;
    }

`;

export const theme = {
    breakpoints: {
        mobile: 767
    },
    color: "teal",
};