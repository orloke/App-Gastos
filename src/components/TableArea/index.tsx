import { Item } from '../../types/Item'
import * as C from './styles'
import {TableItem} from '../TableItem/index'

type Props = {
    list: Item[],
    del: (idregistro:number) => void
 
}

export const TableArea = ({list, del}:Props) =>{
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width = {100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width = {100}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn width = {400}>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width = {400}>Valor</C.TableHeadColumn>
                    <C.TableHeadColumn width = {50}>Opções</C.TableHeadColumn>
                </tr>
            </thead>
            <C.TableTbody>
                {list.map((item, index)=>(
                    <TableItem key={index} item={item} d = {item.id} del={del}/>
                ))}
            </C.TableTbody>
        </C.Table>
    )
}