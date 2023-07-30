// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const SliderComponent = () => {
  return (
    <div>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="./img/g-meet-0.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./img/g-meet0.5.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./img/g-meet-1.svg" alt="" /></SwiperSlide>
    </Swiper>
    </div>
  );
};

export default SliderComponent;