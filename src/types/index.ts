export interface ItemProps{
    today:string,
    nameBn:string,
    image:string,
    slug:string,
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
}