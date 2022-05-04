import * as C from './styles'
import { useState } from 'react'
import {categories} from '../../data/categories'
import { newData } from '../../helpers/dataFilter';
import {Item} from '../../types/Item'

type Prop={
    add: (newItem:Item)=>void,
    indexList: number
}

export const AddArea = ({add,indexList}:Prop) =>{

    let categoryKeys: string[] = Object.keys(categories);
    
    const [inputTitle, setInputTitle] = useState('')
    const [inputData, setInputData] = useState('')
    const [inputPrice, setInputPrice] = useState(0)
    const [inputCategoria, setInputCategoria] = useState('')

    const addNewItem = () =>{

        let erro = []

        if(!inputCategoria){
            erro.push('Escolha uma categoria!')
        }
        if(!inputData){
            erro.push('Escolha uma data!')
        }
        if(!inputTitle){
            erro.push('Escreva um titulo!')
        }
        if(!inputPrice){
            erro.push('Escreva o preço!')
        }

        if (erro.length > 0) {
            return alert(erro.join('\n'))
        }

        add({
            id: indexList,
            date: newData(inputData),
            category: inputCategoria, 
            title: inputTitle, 
            value: inputPrice
        })
        clear()        
    }    

    const clear = () =>{
        setInputTitle('')
        setInputPrice(0)
        setInputCategoria('')
    }
    

    return(
        <C.Container>
            <C.InputLable>
                <C.InputTitle>Data</C.InputTitle>
                <C.Inputinput type="date" onChange={e=>setInputData(e.target.value)} />
            </C.InputLable>

            <C.InputLable>
                <C.InputTitle>Categoria</C.InputTitle>
                <C.Inputselect value={inputCategoria} onChange={e=>setInputCategoria(e.target.value)}>
                    <option></option>
                    {categoryKeys.map((item,index)=>(
                        <option key={index} value={item}>{categories[item].title}</option>
                    ))}
                </C.Inputselect>
            </C.InputLable>

            <C.InputLable>
                <C.InputTitle>Titulo</C.InputTitle>
                    <C.Inputinput value={inputTitle} type="text" onChange={e=> setInputTitle(e.target.value)}/>
                </C.InputLable>

            <C.InputLable>
                <C.InputTitle>Valor</C.InputTitle>
                <C.Inputinput type="number" value={inputPrice === 0 ?'': inputPrice} onChange={e=> setInputPrice(parseFloat(e.target.value))}/>
            </C.InputLable>           
            
            <C.InputLable>
                <br/>
                <C.Inputbutton onClick={addNewItem}>Adicionar</C.Inputbutton>
            </C.InputLable>
            
        </C.Container>
    )
}