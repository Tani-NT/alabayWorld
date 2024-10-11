import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Slider.css';
import slider1 from '../image/slider1.png';
import slider2 from "../image/slider2.png";
import slider3 from "../image/slider3.png";
import slider4 from "../image/slider4.png";

const Slider = () => {
  return (
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          rewind={true}
          modules={[Navigation]}
          className="mySwiper w-[100%] h-full"  
        >
          <SwiperSlide>
            <img src={slider1} alt="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="slider2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="slider3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="slider4" />
          </SwiperSlide>
        </Swiper>
  )
}

export default Slider
