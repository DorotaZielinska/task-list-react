import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: teal;
    color: white;
    border: none;
    transition: 1s;

    &:hover{
        background-color: rgb(12, 156, 156);
        transform: scale(1.1);
    }

    &:active {
        background-color: rgb(8, 190, 190);
    }

`;