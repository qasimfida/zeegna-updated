import React from 'react'
import AccessCard from './AccessCard'
import AccessData from '../../data/AccessData'

const AccessContainer = () => {
  return (
<div className="bg-[#fffff] poppin">
        <div className="max-w-7xl mx-auto py-20 mt-20 max-sm:py-0">
          <div className="text-center">
            <h2 className="font-semibold text-xl md:text-4xl">
            Exclusive access to jobs in your area
            </h2>
            <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[50px]">
            {AccessData?.map((card) => (
              <AccessCard
                key={card.id}
                image={card.image}
                title={card.title}
                bgColor={card.bgColor}
                chip={card.chip}
              />
            ))}
          </div>
        </div>
      </div>
  )
}

export default AccessContainer
