import { ItemProps } from "@/types";
import Image from "next/image";



const SingleCard = ({item}:{item:ItemProps}) => {
   
    return (
        <div className="border border-gray-500 rounded-lg px-3">
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
                <h4 className="font-extrabold text-xl">
                {item.today}     
                </h4>
               <div className="flex justify-between">
                <h4>
                  আজকের দাম
                </h4>
                <h4>
                    {item.change.pct}
                </h4>
            </div>
        </div>
    );
};

export default SingleCard;