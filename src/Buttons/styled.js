import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledButtons = styled.button`
    background-color: transparent;
    color: teal;
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.2s;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color: rgb(10, 161, 161)
    }

    &:disabled {
        color: #ccc;
    }
`;