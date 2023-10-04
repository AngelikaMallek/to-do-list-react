import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        display: flex;
        flex-direction: column;
        margin: 10px;
}
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({theme}) => theme.color};
    color: white;
    flex-basis: 15%;
    border: none;
    transition: background 1s, transform 1s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        cursor: pointer;
        transform: scale(1.1);
    }

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        margin-top: 10px;

        &:hover {
        transform: scale(1);
    }
}
`;

export const Field = styled.input`
    padding: 10px;
    flex-basis: 80%;
    border: 1px solid #dfdfdf;
`;