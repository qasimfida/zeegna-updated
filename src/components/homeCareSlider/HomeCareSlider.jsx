import React from 'react'
import Banner from '../../../public/images/bannerHomeCare.png'
import HomeCareSlides from './HomeCareSlides'





const HomeCareSlider = () => {
  return (
    <>
    <section className='gap-[106px] pt-[80px] pl-[90px] pr-[71px] pb-[64px] h-[494px] flex font-poppins'>
        <div className='w-[364px]'>
            <img src={Banner} alt="img"/>
        </div>
        <div className='w-[804px]'>
            <div className='pb-[30px]'>
                <HomeCareSlides/>
            </div>
            <h2 className='pb-[10px] text-[24px] font-semibold'>
            How to find the right home care near me?
            </h2>
            <p className='text-[20px] font-medium text-[#5E5E6F] w-[67%]'>
            Take our care quiz to find help with daily activities like bathing, dressing, meal prep, and companionship. Connect with trusted home care agencies to help you and your loved ones age at home safely and comfortably.
            </p>
            <div className='flex gap-3 pt-[30px]'>
                <button className='border border-black px-[26px] py-[13px] rounded-full hover:bg-black hover:text-white'>Take our care quiz</button>
                <button className='bg-black text-white px-[26px] py-[13px] rounded-full hover:text-black hover:bg-transparent hover:border hover:border-black'>Find home care near me</button>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default HomeCareSlider
