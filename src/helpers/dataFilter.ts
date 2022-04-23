import {Item} from '../types/Item'

export const getCurrentMonth = () =>{
    let now = new Date()
    return `${now.getFullYear()}-${now.getMonth()+1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] =>{
    let newList: Item[] = []
    let [year, month] = date.split('-')

    for (let reg of list) {
        if(reg.date.getFullYear() === parseInt(year) && reg.date.getMonth() === parseInt(month)){
            newList.push(reg)
        }        
      }
    return newList
}

export const dataFormat = (data: Date): string=>{
    let month = data.getMonth()
    let year = data.getFullYear()
    let day = data.getDate()

    return `${addZero(day)}/${addZero(month)}/${year}`
}

export const addZero = (n:Number):string => n.toString().padStart(2, '0')

export const nameMonth = (currentMonth: string):string=>{
    let [year, month] = currentMonth.split('-')
    let listMonth = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']

    return `${listMonth[parseInt(month)-1]} de ${year}`
}

export const newData = (data:string)=>{
    let [year, month, day] = data.split('-')
    return new Date(parseInt(year),parseInt(month),parseInt(day))
}