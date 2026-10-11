export interface ItemProps{
    today:string,
    nameBn:string,
    image:string,
    slug:string,
    category:string,
    categoryIcon:string,
    categoryNameBn:string,
    id:number |string,
    params:{
        id:number,
       
    }
    change:{
        dir:string,
        pct:number
}}
export interface ProductProps{
    id:number |string ,
    market:string,
    min:number,
    max:number,
    division:string
}