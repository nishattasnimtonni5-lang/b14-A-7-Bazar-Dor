import Image from "next/image";

interface ItemProps{
    today:string,
    nameBn:string,
    image:string,
    slug:string
}

const SingleCard = ({item}:{item:ItemProps}) => {
   
    return (
        <div className="border border-gray-500 rounded-lg px-3">
            <p>{item.image}</p> 
                
                
             <div>
              <p>
                {item.nameBn}
               
                </p>
                <p>
                    প্রতি কেজি
                </p>
                </div>
                <h4>
                {item.today}     
                </h4>
                <h4>
                  আজকের দাম
                </h4>
            
        </div>
    );
};

export default SingleCard;