import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 10px #ccc;
    margin-top: 20px;
    border-radius: 10px;
`

export const TableHeadColumn = styled.th<{width?: number}>`
    width: ${props => props.width ? `${props.width}px` : '100px'}
    padding: 10px 0;
    text-align: left;
`