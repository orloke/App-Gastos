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

export const addZero = (n:Number):string => n>10 ? `${n}` : `0${n}`