import styled from "styled-components";

export const Container = styled.div<{fechar:string}>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 80;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    background-color: red;
    display: ${props => props.fechar};

`

export const Modal = styled.div`
    z-index: 100;
    background: white;
    position: relative;
    margin: auto auto;
    border-radius: 3px;
    max-width: 70vw;
    min-width: 50vw;
    min-height: 50vh;
    padding: 8px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
`

export const Button=styled.button`
    width: 30%;
    height: 33px;
    padding: 0 5px;
    background-color: lightblue;
    border: 1px solid lightblue;
    border-radius: 5px;
    cursor: pointer;

    &: hover{
        color: white;
        background-color: darkblue;
`    