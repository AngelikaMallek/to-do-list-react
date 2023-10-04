import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin-bottom: 20px;
    box-shadow: 2px 2px 15px hsl(0, 0%, 50%);
`;

export const Heading = styled.h2`
    border-bottom: 2px solid #dfdfdf;
    padding: 20px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;

    
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        display: flex;
        flex-direction: column;  
    }
`;