
import Image from 'next/image';
import NavLinksPage from './NavLinks';



import Time from './shared/Time';
import UserInfo from './UserInfo';


const HeaderPage = () => {
  
    return (
        <div className='mx-auto' >
            <div className='flex '>
           <div className=' flex gap-2'>
            
                <Image src={"/logo-icon.png"} alt="logo" width={30} height={20} className='bg-green-900 rounded-lg '/>
               
               <div> 
                <p className='font-extrabold'>বাজার দর</p>
                <Time/>
                 
            </div>
            
       <div>
        
           <UserInfo/>
              </div>
         </div>
          </div>
          <NavLinksPage/>
          <hr className='mt-2 max-w-full'/>
        </div>
    );
};

export default HeaderPage;