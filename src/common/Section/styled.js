import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    margin: 10px 0;
`;

export const Header = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.color.silver};
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr; 
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    margin:0;
`;

export const SectionContainer = styled.div`
    padding: 20px
`;