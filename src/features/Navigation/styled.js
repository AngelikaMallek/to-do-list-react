import styled, { createGlobalStyle, } from "styled-components";
import { NavLink } from "react-router-dom";

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