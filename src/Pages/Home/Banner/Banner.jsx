import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import bannerImg1 from "../../../assets/banner1.jpg";
import bannerImg2 from "../../../assets/banner2.jpg";
import bannerImg3 from "../../../assets/banner3.jpg";
import bannerImg4 from "../../../assets/banner4.webp";
import bannerImg5 from "../../../assets/banner5.jpeg";

const Banner = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper m-8 max-w-7xl max-h-[500px] rounded-xl"
      >
        <SwiperSlide>
          <img className="w-full mx-auto" src={bannerImg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full mx-auto" src={bannerImg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full mx-auto" src={bannerImg3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full mx-auto" src={bannerImg4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full mx-auto" src={bannerImg5} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
