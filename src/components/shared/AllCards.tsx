
import Link from 'next/link';
import React from 'react';
import SingleCard from './SingleCard';

const AllCards = async () => {
    const res=await fetch("https://api.abcz.workers.dev/api/bazardor/products")
     const data=await res.json();
    return (
        <div className='grid grid-cols-3 gap-5 '>
            {
                data.map((item)=>
                <Link href="/" key={item.id}>
               
               <SingleCard item={item}/>
                </Link>)
            }
        </div>
    );
};

export default AllCards;