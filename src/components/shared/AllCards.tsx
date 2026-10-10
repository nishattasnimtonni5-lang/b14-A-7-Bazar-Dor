
import Link from 'next/link';
import React from 'react';
import SingleCard from './SingleCard';
import { ItemProps } from '@/types';
import NotFound from '@/app/not-found';

const AllCards = async () => {
    const res=await fetch(`https://api.abcz.workers.dev/api/bazardor/products`
        , {cache:"force-cache"})
    
     const data=await res.json();
      if(!data){
      NotFound()
    }
    return (
        <div className='grid grid-cols-3 gap-5 '>
            {
                data.map((item:ItemProps)=>
                <Link href={`/bazardor/${item.id}`} key={item.id}>
               
               <SingleCard item={item}/>
                </Link>)
            }
        </div>
    );
};

export default AllCards;