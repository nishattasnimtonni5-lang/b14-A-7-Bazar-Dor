

import React from 'react';
interface ProductInfoProps{
    markets:Market[]
}
interface Market{
  market:string,
  division:string,
  min:number,
  max:number
}
const ProductInfo = ({markets}:ProductInfoProps) => {
  
 
    return (
        <div>
            {
                markets.map((marketItems,index:number)=>
                    <div key={index} className='grid grid-cols-5 border border-gray-500 py-5 px-5'>
                
                    <p> {marketItems.market}</p>
                      
                     
                    
                       <p>{marketItems.division}</p>
                      
                    
                      <p> {(marketItems.min).toLocaleString("bn-BD")}</p>
                     
                      <p> {(marketItems.max).toLocaleString("bn-BD")}</p>
                      <p>{((marketItems.max+marketItems.min)/2).toLocaleString("bn-BD")}</p>
                    </div>
                )
            }
        </div>
    );
};

export default ProductInfo;