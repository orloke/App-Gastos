import * as C from './style'
import {Item} from '../../types/Item'
import {dataFormat} from '../../helpers/dataFilter'
import { categories } from '../../data/categories'


type Props = {
    item: Item
}

export const TableItem = ({item}: Props) =>{
    return(
        <C.TableLine>
            <C.TableColomun>{dataFormat(item.date)}</C.TableColomun>
            <C.TableColomun >
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>                
            </C.TableColomun>
            <C.TableColomun>{item.title}</C.TableColomun>
            <C.TableColomun>
                <C.Value colorText={categories[item.category].expense}>
                    R$ {item.value.toFixed(2)}
                </C.Value>
            </C.TableColomun>
        </C.TableLine>

    )
}