import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
`

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #888;
    margin-bottom: 1%
`

export const Info = styled.div<{colorText:number}>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.colorText >= 0 ? 'green':'red'};
`
