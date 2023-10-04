import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    padding: 20px;
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    color: white;
    transition: background 1s;

    &:hover {
        cursor: pointer;
        background-color: hsl(0, 100%, 65%);
    }
`;

export const ToggleDoneButton = styled(Button)`
    background-color: green;

    &:hover{
        background-color: hsl(120, 100%, 35%);
        cursor: pointer;
    }
`;

export const RemoveButton = styled(Button)`
    background-color: red;

    &:hover {
        cursor: pointer;
        background-color: hsl(0, 100%, 65%);
    }
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 10px;
    border-bottom: 2px solid #dfdfdf;
    padding: 10px;
    word-break: break-word;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ toogleDone }) => toogleDone && css`
        text-decoration: line-through;
    `}
`;