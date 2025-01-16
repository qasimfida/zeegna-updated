import React from 'react'
import ChartIcon from '../../assets/icons/Charticon/ChartIcon'

const Netsales = () => {
  return (
    <div className='w-[183px]'>
        <div className='flex py-[10px] px-[15px] bg-[#E2FFE2] rounded'>
            <div className='pr-[10px]'>
                <ChartIcon />
            </div>
            <div>
            <p className='text-2xl font-semibold border-b-[2px] border-[#5E5E6F]'>$78,420</p>
            <p className='text-base font-medium text-[#5E5E6F]'>Net sales</p>
            </div>
      </div>
    </div>
  )
}

export default Netsales
