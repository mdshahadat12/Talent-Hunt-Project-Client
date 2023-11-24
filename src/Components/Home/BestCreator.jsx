import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const BestCreator = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div><img src="https://i.ibb.co/xD0JGs0/MD-Shahadat.png"/></div></SwiperSlide>        
        <SwiperSlide><div><img src="https://i.ibb.co/xD0JGs0/MD-Shahadat.png"/></div></SwiperSlide>        
        <SwiperSlide><div><img src="https://i.ibb.co/xD0JGs0/MD-Shahadat.png"/></div></SwiperSlide>        
        <SwiperSlide><div><img src="https://i.ibb.co/xD0JGs0/MD-Shahadat.png"/></div></SwiperSlide>        
        <SwiperSlide><div><img src="https://i.ibb.co/xD0JGs0/MD-Shahadat.png"/></div></SwiperSlide>        
      </Swiper>
    </>
  );
};

export default BestCreator;
