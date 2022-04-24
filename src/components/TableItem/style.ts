import styled from "styled-components";

export const TableLine = styled.tr``

export const TableColomun = styled.td`
    padding: 10px 0;

`
export const Category = styled.td<{color:string}>`
    background-color: ${props=>`${props.color}`};
    margin-right: 100px;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
`

export const Value = styled.p<{colorText?: boolean}>`
    color: ${props => props.colorText ? `red`:'green'};

`

export const Option = styled.p<{colorText?: boolean}>`
    color: ${props => props.colorText ? `red`:'green'};
    display: flex;

`

export const Button = styled.button`
    display: flex;
    margin-right: 5%;
    background-color: #fff;
    border: 1px solid;
    cursor: pointer;
    transform: scale(0.9);

    &:hover{
        transform: scale(1);
    }

`

