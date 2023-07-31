// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Slider

const SliderComponent = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className='ss'>
            <img src="./img/g-meet-0.svg" alt="" />

            <h2 className='slider-header m-2'>Get a link you can share</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='ss'>
            <img src="./img/g-meet0.5.svg" alt="" />
            <h2 className='slider-header m-2'>Plan ahead</h2>
          </div>

        </SwiperSlide>

        <SwiperSlide>
          <div className='ss'>
            <img src="./img/g-meet-1.svg" alt="" />
            <h2 className='slider-header m-2'>Your meeting is safe</h2>
          </div>

        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComponent;