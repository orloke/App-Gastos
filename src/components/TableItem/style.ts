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
    color: ${props => props.colorText ? `red`:'green'}
`