'use client'


const BrowseItemPage = () => {
    const handleBrowseClick=()=>{
        document.getElementById('bazardor')?.scrollIntoView({
            behavior:'smooth',
            block:'start'
        });
    };
    return (
        <div>
            <button
     onClick={handleBrowseClick}
     className='bg-green-700 hover:bg-black text-white hover:text-white px-5 py-2 cursor-pointer rounded-2xl text-sm '>
      সব পণ্য দেখুন
            </button>
        </div>
    );
};

export default BrowseItemPage;