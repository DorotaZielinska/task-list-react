import { Link } from "react-router-dom/cjs/react-router-dom";
import styled, {css} from "styled-components";

export const TaskLink = styled(Link)`
text-decoration: none;
color: ${({ theme }) => theme.color.teal};
`;

export const TaskList = styled.ul`
    list-style: none;
    padding: 0;
    margin:0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    
    ${({ hidden }) => hidden && css`
       display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
` }   
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.white};
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 1s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.japaneseLaurel};

        &:hover {
            background-color: ${({ theme }) => theme.color.japaneseLaurelBrighter};
        }

        &:active {
            background-color: ${({ theme }) => theme.color.green};
        }
    `}

    ${({ remove }) => remove && css`
         background-color: ${({ theme }) => theme.color.darkBurgundy};
         background-size: auto;
         background-position: center;
         background-repeat: no-repeat;

         &:hover {
            background-color: ${({ theme }) => theme.color.milanoRed};
        }

        &:active {
            background-color: ${({theme}) => theme.color.milanoRedBrighter};
        }
    `}
`;

