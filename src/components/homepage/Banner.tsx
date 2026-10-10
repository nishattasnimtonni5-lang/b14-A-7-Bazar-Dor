import Image from 'next/image';
import React from 'react';
import Time from '../shared/Time';
import BrowseItemPage from './BrowseItems';

const BannerPage = () => {
     
    return (
        <div className='px-5 py-3'>
        <div className='py-5 px-10 border rounded-md'>
        <div className='flex justify-between py-5   items-center rounded-md'>
        <div className=''>
            <h1 className='text-green-600 bg-gray-200 w-30 rounded-md'><Time/></h1>
            <h1 className='font-extrabold py-2 text-3xl'>আজকের বাজারের দাম এক নজরে</h1>
        <h1>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন- </h1>
        <h1>সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</h1>
       
        </div>
        <Image src={"/bazar-hero.png"} alt="banner" width={250} height={100}/>
       </div>  
  <BrowseItemPage/>
      </div>
        
        </div>
    );
};

export default BannerPage;