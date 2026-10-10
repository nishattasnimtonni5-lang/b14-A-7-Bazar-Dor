import React from 'react';
import Marquee from "react-fast-marquee"
interface Headlines{
    id:number,
    nameBn:string,
    today:number
 change:{   pct:number}
    
}
const MarqueePage = async() => {
    const res=await fetch(`https://api.abcz.workers.dev/api/bazardor/products` , {cache:"force-cache"})
    const data=await res.json();

    return (
        <div className='text-black py-5 '>
            <Marquee>
            {data.map  ((item:Headlines)=><span key={item.id} className="flex gap-3">
            
                <span>{item.nameBn}</span>
                
                 <span>{Number(item.today).toLocaleString("bn-BD")} টাকা/কেজি</span>
          <span className="flex items-center gap-1">
    {item.change.pct > 0 && (
        <span className="text-red-600">▲</span>
    )}

    {item.change.pct < 0 && (
        <span className="text-green-600">▼</span>
    )}

    <span>
        {Number(item.change.pct).toLocaleString("bn-BD")}%
    </span>
</span>
                <span className='mx-5'>.</span>
            </span>)}
          
            </Marquee>
       
        </div>
    );
};

export default MarqueePage;