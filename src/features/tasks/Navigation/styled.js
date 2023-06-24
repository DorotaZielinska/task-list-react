import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
 &.${activeClassName} {
    font-weight: bold;
 }
 text-decoration: none;
    color: ${({ theme }) => theme.color.white};
`;

export const NavigationList = styled.ul`
    list-style: none;
    background-color: ${({ theme }) => theme.color.teal};
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
`;

export const NavigationItem = styled.li`
    margin: 20px;
`;