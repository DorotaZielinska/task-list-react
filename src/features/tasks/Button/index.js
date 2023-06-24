import styled from "styled-components";

export default styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.color.teal};
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.2s;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
}

&:hover {
    color: ${({ theme }) => theme.color.niagara},
}

&:disabled {
    color: ${({ theme }) => theme.color.silver};
}
`;