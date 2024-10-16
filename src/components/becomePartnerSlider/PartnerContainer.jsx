import React from 'react'
import PartnerSlider from './PartnerSlider'
import Netsales from '../netSales/Netsales'
import rating from '../../../public/images/rating.png'

const PartnerContainer = () => {
  return (
    <div className='pt-[30px] pb-[50px] bg-[#eefff0]'>
        <div className='flex flex-col items-center'>
            <h1 className='text-[64px] font-semibold font-poppins text-center'>
            Grow your business
            </h1>
            <p className='text-[24px] font-medium text-[#5E5E6F] text-center'>
            Join our network to help millions of seniors to age <br /> at home in good health and comfort
            </p>
            <button className='bg-black text-white py-[15px] px-[80px] rounded-full cursor-pointer mt-[30px]'>Start today</button>
        </div>
        <div className='mt-[30px] flex flex-col justify-between'>
            <div className='flex justify-between'>
          <div className='relative top-[60px] left-[54px]'> 
          <img src={rating} className=''></img>
          </div>
          <div className='relative top-[60px] right-[54px]'>
            <Netsales/>
            </div>
            </div>
            <PartnerSlider />
        </div>
    </div>
  )
}

export default PartnerContainer
// relative bottom-[316px] left-[80px]
