// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Slider

const SliderComponent = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="ss">
          <div className="main-div">
          <img className="slider-image" src="./img/g-meet-0.svg" alt="" />
          <div>
          <h2 className="text-under-slide">Get a link you can share</h2></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/g-meet0.5.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/g-meet-1.svg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComponent;
