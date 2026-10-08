import ProductInfo from "@/components/ProductInfo";

interface PageProps{
    params:Promise<{id:string}>
}

const page = async({params}:PageProps) => {
  const {id}=await params;
    const res=await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${id}`
   , {cache:"force-cache"})
    const data=await res.json();
    return (
        <div className="px-5">
           
                <div className="flex flex-cols-1 bg-amber-100 h-30 gap-2 rounded-lg px-10">
                
                    <p className="text-5xl rounded-lg bg-gray-100 py-5  ">{data.categoryIcon}</p>
                 
                  <div className="">
                    <p className="font-extrabold text-3xl">{data.nameBn}</p>
                   <div className="flex gap-1">
                    <p>প্রতি কেজি ·</p>
                  <p>{data.nameBn}</p>
                    </div>
                    <p>গতকালের তুলনায় আজ দাম বেড়েছে ·</p>
                   </div> 
                 
                </div>
                 <ProductInfo id={id}/>
          </div>
      
    );
};

export default page;