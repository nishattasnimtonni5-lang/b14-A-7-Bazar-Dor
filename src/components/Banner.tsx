import Image from 'next/image';
import React from 'react';
import Time from './shared/Time';

const BannerPage = () => {
     
    return (
        <div className='flex'>
        <div>
            <h1><Time/></h1>
            <h1>আজকের বাজারের দাম এক নজরে</h1>
        <h1>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</h1>
       
        </div>
        <Image src={"/bazar-hero.png"} alt="banner" width={100} height={100}/>
        </div>
    );
};

export default BannerPage;