export type Category = {
    [tag: string]:{
        title: string, // se der errado mudar para ';'
        color: string,
        expense: boolean,
    }
}