import * as C from './styles'
import {useState} from 'react'

type Props = {
    modalFechar: string
    setModalFechar: React.Dispatch<React.SetStateAction<string>>
}


export const Modal = ({modalFechar, setModalFechar}:Props) =>{
    

    return(
        <C.Container fechar={modalFechar}>
            <C.Modal>
                
                <C.Button onClick={()=>{setModalFechar('none')}}>fechar</C.Button>
            </C.Modal>
        </C.Container>
    )
}