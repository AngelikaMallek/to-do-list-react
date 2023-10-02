import styled from "styled-components";

export const StyledButtons = styled.div`
    font-size: 15px;

    @media(max-width: 767px) {
        display: grid;
        grid-gap: 10px;
        margin: 20px;
}
`;

export const Button = styled.button`
    background-color: white;
    border: none;
    color: teal;
    transition: color 1s;

    &:hover {
        color: hsl(180, 100%, 30%);
        cursor: pointer;
    }

    &:disabled {
        color: grey;
        cursor: auto;
    }
`;