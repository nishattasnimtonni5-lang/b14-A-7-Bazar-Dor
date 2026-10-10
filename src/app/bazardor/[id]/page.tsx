import NotFound from "@/app/not-found";
import PriceSummary from "@/components/PriceSummary";
import ProductInfo from "@/components/ProductInfo";

interface PageProps{
    params:Promise<{id:string}>
}

const page = async({params}:PageProps) => {
  const resolvedParams=await params;
  const id=resolvedParams.id;
    const res=await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${id}`
   , {cache:"no-cache"})
    const data=await res.json();
    if(!data){
      NotFound()
    }
    return (
       
           <div className="">
                <div className="flex justify-between bg-amber-100 px-10  py-3 rounded-lg items-center"> 
                  <div className="flex flex-cols-1  h-30 gap-4 rounded-lg  items-center">
                
                    <p className="text-5xl rounded-lg bg-gray-100 py-2  ">{data.categoryIcon}</p>
                 
                  <div className="">
                    <p className="font-extrabold text-3xl">{data.nameBn}</p>
                   <div className="flex gap-1">
                    <p>প্রতি কেজি ·</p>
                  <p>{data.nameBn}</p>
                   
                    </div>
                    <div>
                      {data.yesterday-data.today<0?(
                       <p>গতকালের তুলনায় আজ দাম বেড়েছে · {(data.today-data.yesterday).toLocaleString("bn-BD")} টাকা </p>
                      )
                   :
                   ( <p>গতকালের তুলনায় আজ দাম কমেছে · {(data.yesterday-data.today).toLocaleString("bn-BD")} টাকা </p>
                
                       ) }
                            </div>
                   </div>
                     </div>
                     
                    
                
                 <div>
                  <h4>আজকের দাম</h4>
                  <h4 className="text-green-500 font-extrabold text-3xl">{(data.today).toLocaleString("bn-BD")} </h4>
                  <h4>টাকা / কেজি</h4>
                
                  </div>
                 </div>
                 <PriceSummary markets={data.markets??[]}/>
                 <ProductInfo markets={data.markets??[]}/>
          </div>
      
    );
};

export default page;