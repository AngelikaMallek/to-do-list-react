import styled from "styled-components";

export const StyledText = styled.p`
    padding: 20px;
    padding-top: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 10px;
}
`;


