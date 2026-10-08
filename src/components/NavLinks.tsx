import Link from 'next/link';
import React from 'react';
interface Nav{
   id:string,
    nameBn:string,
    icon:string,
    slug:string
}
const NavLinksPage = async() => {
    const res=await fetch("https://api.abcz.workers.dev/api/bazardor/categories")
    const data:Nav[]=await res.json();
    return (
        <div className='flex gap-3 py-4'>
           
           {
            data.map((n:Nav)=>
                <Link key={n.id} href={n.slug} >
             
             <div>
              {n.icon}
              {n.nameBn}
              </div>
                </Link>
            )
           }
    
        </div>
    );
};

export default NavLinksPage;