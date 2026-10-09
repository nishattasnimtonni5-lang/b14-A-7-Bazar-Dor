
import Image from 'next/image';
import NavLinksPage from './NavLinks';



import Time from './shared/Time';


const HeaderPage = () => {
  
    return (
        <div className='mx-auto' >
           <div className=' flex gap-2'>
            
                <Image src={"/logo-icon.png"} alt="logo" width={30} height={20} className='bg-green-900 rounded-lg '/>
               <div> 
                <p className='font-extrabold'>বাজার দর</p>
                <Time/> <hr/>
            </div>
         
          </div>
          <NavLinksPage/>
        </div>
    );
};

export default HeaderPage;