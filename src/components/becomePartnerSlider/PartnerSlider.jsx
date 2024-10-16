import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import imageOne from '../../../public/images/personManOne.png'
import imageTwo from '../../../public/images/personWomen.png'
import imageThree from '../../../public/images/personManTwo.png'
import imageFour from '../../../public/images/personManFour.png'
import imageFive from '../../../public/images/personManThree.png'
import '../../assets/css/slider.css'

const images = [
  { src: [imageOne], index: 1, alt: 'person 1' },
  { src: [imageTwo], index: 2, alt: 'person 2' },
  { src: [imageThree], index: 3, alt: 'person 3' },
  { src: [imageFour], index: 4, alt: 'person 4' },
  { src: [imageFive], index: 5, alt: 'person 5' },
];
const PartnerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <>
            <div className=' w-full pt-7 h-[50vh]'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'5'}
            spaceBetween={50}
            coverflowEffect={{
                rotate: 1,
                stretch: 0,
                depth: 50,
                modifier: 6,
                slideShadows: false,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="flex justify-between gap-10 h-full"
            // grey scale effect for active slide
            onSlideChange={handleSlideChange}
            initialSlide={2}
          >
 {images.map((image, index) => (
          <SwiperSlide key={index} className={`relative ${activeIndex === index ? 'z-10' : 'z-0' }`}>
            <img
              className={`w-full h-full object-cover rounded-lg transition-all duration-300 ${
                activeIndex === index ? 'grayscale-0' : 'grayscale'
              }`}
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
          </Swiper>
          </div>
    
    </>
  )
}

export default PartnerSlider
