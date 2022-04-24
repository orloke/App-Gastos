import { Item } from '../../types/Item'
import * as C from './styles'
import {TableItem} from '../TableItem/index'

type Props = {
    list: Item[],
 
}

export const TableArea = ({list}:Props) =>{
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width = {100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width = {100}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn width = {400}>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width = {100}>Valor</C.TableHeadColumn>
                    <C.TableHeadColumn width = {100}>Opções</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <TableItem key={index} item={item} d = {item.id}/>
                ))}
            </tbody>
        </C.Table>
    )
}