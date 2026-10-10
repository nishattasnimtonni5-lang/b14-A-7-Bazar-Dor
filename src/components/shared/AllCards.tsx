
import Link from 'next/link';
import React from 'react';
import SingleCard from './SingleCard';
import { ItemProps } from '@/types';
import NotFound from '@/app/not-found';


const AllCards = async () => {
    const res=await fetch(`https://api.abcz.workers.dev/api/bazardor/products`
        , {cache:"force-cache"})
    
     const data=await res.json();
     const increasedItems=data.filter(
        (item:ItemProps)=>Number(item.change.pct)>0)
     const decreasedItems=data.filter(
        (item:ItemProps)=>Number(item.change.pct)<0)
     
      if(!data){
      NotFound()
    }
    return(
    <div className='space-y-8'>
        <section className='px-5'>
            <h2 className='font-bold text-xl py-2'>আজ দাম বেড়েছে</h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    increasedItems.map((item:ItemProps)=>
                    <Link href={`/bazardor/${item.id}`} key={item.id}>
                        <SingleCard item={item}/>
                    </Link>)
                }
            </div>
        </section>
        <section className='px-5'>
            <h2 className='font-bold text-xl py-2'>আজ দাম কমেছে</h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    decreasedItems.map((item:ItemProps)=>
                    <Link href={`/bazardor/${item.id}`} key={item.id}>
                        <SingleCard item={item}/>
                    </Link>)
                }
            </div>
        </section>
        <div id="bazardor" className='px-5'>
          <h1 className='font-bold text-2xl'>সব পণ্য</h1>
          <h4 className='text-sm'>মোট ৩৩টি পণ্য দেখানো হচ্ছে</h4>
          </div>
        <div className='grid grid-cols-3 gap-5 px-5 '>
        
            {
                data.map((item:ItemProps)=>
                <Link href={`/bazardor/${item.id}`} key={item.id}>
               
               <SingleCard item={item}/>
                </Link>)
            }
        </div>
        </div>
    );
};

export default AllCards;