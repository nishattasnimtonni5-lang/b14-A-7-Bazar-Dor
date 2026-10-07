import Image from 'next/image';
import NavLinksPage from './NavLinks';


const HeaderPage = () => {
    const date=new Date().toLocaleDateString("bn-Bd",{
       dateStyle:"full" })
    return (
        <div className='mx-auto' >
           <div className=' flex gap-2'>
            
                <Image src={"/logo-icon.png"} alt="logo" width={30} height={20} className='bg-green-900 rounded-lg '/>
               <div> 
                <p className='font-extrabold'>বাজার দর</p>
                <p>{date}</p> <hr/>
            </div>
         
          </div>
          <NavLinksPage/>
        </div>
    );
};

export default HeaderPage;