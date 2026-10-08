import { ItemProps, ProductProps } from '@/types';
import React from 'react';
interface ProductInfoProps{
    id:string |number
}

const ProductInfo = async({id}:ProductInfoProps) => {
  const res=await fetch(`https://api.abcz.workers.dev/api/bazardor/products`
     , {cache:"force-cache"});
  const data=await res.json();
  const singleProduct=data.find((item:ProductProps)=>item.id.toString()===id.toString());
  const allMarkets=singleProduct?.markets||[];
 
    return (
        <div>
            {
                allMarkets.map((marketItems:ProductProps,index:number)=>
                    <div key={index}>
                        {marketItems.market}
                    </div>
                )
            }
        </div>
    );
};

export default ProductInfo;