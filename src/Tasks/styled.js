import styled, {css} from "styled-components";

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

    ${({hidden}) => hidden && css`
       display: none;
    `}
`;

export const Content = styled.span`
    ${({done}) => done && css`
        text-decoration: line-through;
` }   
`;

export const Button = styled.button`
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 1s;

    ${({toggleDone}) => toggleDone && css`
        background-color: rgb(2, 94, 2);

        &:hover {
            background-color: rgb(2, 136, 2);
        }

        &:active {
            background-color: rgb(3, 179, 3);
        }
    `}

    ${({remove}) => remove && css`
    background-color: rgb(129, 4, 4);
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;

    &:hover {
        background-color: rgb(170, 7, 7);
    }

    &:active {
        background-color: rgb(196, 6, 6);
    }
    `}
`;