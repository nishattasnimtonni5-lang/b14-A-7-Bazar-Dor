import Image from 'next/image';


const HeaderPage = () => {
    const date=new Date().toLocaleDateString("bn-Bd",{
       dateStyle:"full" })
    return (
        <div className='mx-auto flex gap-2'>
            
                <Image src={"/logo-icon.png"} alt="logo" width={30} height={20} className='bg-green-900 rounded-lg '/>
               <div> 
                <p className='font-extrabold'>বাজার দর</p>
                <p>{date}</p>
            </div>
          <hr/>
        </div>
    );
};

export default HeaderPage;