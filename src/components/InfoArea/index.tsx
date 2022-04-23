import * as C from './styles'
import { Item } from '../../types/Item'
import { nameMonth } from '../../helpers/dataFilter'
import { ResumeItem } from '../ResumeItem/'

type Props={
    currentMonth: string
    changeM: (newMonth:string) => void
    list: Item[]
    income: number
    expense: number
}

export const InfoArea = ({currentMonth, changeM, list, income, expense}:Props) =>{

    const handlePrevMonth = ()=>{
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year),parseInt(month)-1,1)       
        currentDate.setMonth(currentDate.getMonth()-1)
        changeM(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }
    
    const handleNextMonth = ()=>{
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year),parseInt(month)-1,1)       
        currentDate.setMonth(currentDate.getMonth()+1)
        changeM(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }
    
    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                    <C.MonthTitle>{nameMonth(currentMonth)} </C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title = 'Receitas' value = {income}/>
                <ResumeItem title = 'Despesas' value = {expense}/>
                <ResumeItem title = 'Balanço' value = {income+expense}/>
            </C.ResumeArea>
        </C.Container>
    )
}