


interface ProductInfoProps{
    markets:Market[]
}
interface Market{
  market:string,
  division:string,
  min:number,
  max:number
}


const PriceSummary = ({markets}:ProductInfoProps) => {
    if(markets.length===0){
        return <p></p>
    }
    const lowestMarket=markets.reduce((lowest,market)=>
         market.min<lowest.min?market:lowest
    )
     const highestMarket=markets.reduce((highest,market)=>
         market.min>highest.max?market:highest
    )
    return (
        <div className="py-5 px-5">
        <div
        className="grid grid-cols-3 rounded-lg bg-amber-200 px-5 py-5">
            <div className="">
                <h4>সর্বনিম্ন দাম</h4>
          <h4>  {lowestMarket.min.toLocaleString("bn-BD") } টাকা</h4>
         
         <h4>সবচেয়ে কম দামের বাজার</h4> </div>
         <div className="">
            <h4>সর্বাধিক দাম</h4>
            <h4>{highestMarket.max.toLocaleString("bn-BD")} টাকা</h4>
           <h4>সবচেয়ে বেশি দামের বাজার</h4>
            </div>
            <div className="">
                <h4>গড় দাম</h4>
            <h4>{((lowestMarket.min+highestMarket.max)/2).toLocaleString("bn-BD")} টাকা</h4>
       <h4>প্রতি কেজি-এর হিসাবে</h4>
        </div>
        </div>
        </div>
    );
};

export default PriceSummary;