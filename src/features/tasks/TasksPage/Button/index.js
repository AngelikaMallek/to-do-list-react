import styled from 'styled-components';

export const StyledButtons = styled.div`
    font-size: 15px;

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        display: grid;
        grid-gap: 10px;
        margin: 20px;
}
`;

export const Button = styled.button`
    background-color: ${({theme}) => theme.colors.white};
    border: none;
    color: ${({theme}) => theme.colors.teal};
    transition: color 1s;

    &:hover {
        color: ${({theme}) => theme.colors.hoverTeal};
        cursor: pointer;
    }

    &:disabled {
        color: ${({theme}) => theme.colors.grey};
        cursor: auto;
    }
`;