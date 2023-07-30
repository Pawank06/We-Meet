// import React, {useState } from 'react';
// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="">
          <img src="./img/g-meet-0.svg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="./img/g-meet0.5.svg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="./img/g-meet-1.svg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
