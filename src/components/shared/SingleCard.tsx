import { ItemProps } from "@/types";




const SingleCard = ({item}:{item:ItemProps}) => {
   
    return (
        <div className="border border-gray-500 rounded-lg px-3 py-5">
          <div className="flex gap-2 py-4 ">
            <p className="text-5xl py-3 bg-amber-100 rounded-lg">{item.image}</p> 
             
             <div className="">
              <p className="font-extrabold text-xl">
                {item.nameBn}
               
                </p>
                <p>
                    প্রতি কেজি
                </p>
                </div>
                </div>
                <h4 className="font-extrabold text-lg">
                      আজকের দাম
                </h4>
               <div className="flex justify-between">
                <h4>
                {Number(item.today).toLocaleString("bn-BD") } টাকা
                </h4>
                <h4>
                  {item.change.pct > 0 && (
    <span className="bg-red-100 text-red-600 rounded px-2 py-1">
        ▲ {Number(item.change.pct).toLocaleString("bn-BD")}%
    </span>
)}

{item.change.pct < 0 && (
    <span className="bg-green-100 text-green-600 rounded px-2 py-1">
        ▼ {Number(item.change.pct).toLocaleString("bn-BD")}%
    </span>)}
    {item.change.pct === 0 && (
    <span className="bg-gray-100 text-gray-600 rounded px-2 py-1">
        0%
    </span>

)}
                </h4>
            </div>
        </div>
    );
};

export default SingleCard;