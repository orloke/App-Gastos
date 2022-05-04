import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 10px #ccc;
    margin-top: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    @media (max-width:760px) {
        flex-direction: column;

    }

`
export const InputLable =styled.div`
    flex:1;
    margin-right: 3%;
    @media (max-width:760px) {
        margin-right:3%;
        margin-top: 6%;
        text-align: center;

    }
`

export const InputTitle =styled.div`
    color: black;
    font-weight: bold;
    text-align: center;
    @media (max-width:760px) {
        font-size: 14px;

    }
`

export const Inputinput =styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border-radius: 5px;
    border: 1px solid lightblue;
`

export const Inputselect=styled.select`
    width: 109%;
    height: 33px;
    padding: 0 5px;
    border-radius: 5px;
    border: 1px solid lightblue;
    @media (max-width:760px) {
        width:104%
    }
`

export const Inputbutton=styled.button`
    width: 109%;
    height: 33px;
    padding: 0 5px;
    background-color: lightblue;
    border: 1px solid lightblue;
    border-radius: 5px;
    cursor: pointer;

    &: hover{
        color: white;
        background-color: darkblue;
    }
    @media (max-width:760px) {
        width:50%;
    }
`
