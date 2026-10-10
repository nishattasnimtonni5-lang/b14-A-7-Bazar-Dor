import Link from 'next/link';

interface Nav{
   id:string,
    nameBn:string,
    icon:string,
    slug:string
}
const NavLinksPage = async() => {
    const res=await fetch(`https://api.abcz.workers.dev/api/bazardor/categories`
    , {cache:"force-cache"})
    
    const data:Nav[]=await res.json();
    console.log(data.map((n) => n.icon));
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