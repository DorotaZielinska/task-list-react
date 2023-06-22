import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.silver};
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border: none;
    transition: 1s;

    &:hover{
        background-color: ${({ theme }) => theme.color.blueChill};
        transform: scale(1.1);
    }

    &:active {
        background-color: ${({ theme }) => theme.color.robinsEggBlue};
    }

`;