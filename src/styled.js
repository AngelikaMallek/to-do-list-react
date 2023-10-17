import styled, { createGlobalStyle, } from "styled-components";
import { NavLink } from "react-router-dom";

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

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 40px;
    background-color: ${({theme}) => theme.colors.teal};
    margin: 0;
    padding: 15px;
`;

export const StyledLink = styled(NavLink)`
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;

    &:hover {
        border-bottom: 1px solid;
    }

    &.active {
      font-weight: 700;
    } ;
`;