// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Projeto from './Projeto';

export default function Projetos() {
  return (
    <>
      <div className="container mx-auto py-10">
        <h2 className="font-bold text-2xl">Doe para projetos da sua região</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper py-8"
        >
          <SwiperSlide>
            <Projeto />
          </SwiperSlide>
          <SwiperSlide>
            <Projeto />
          </SwiperSlide>
          <SwiperSlide>
            <Projeto />
          </SwiperSlide>
          <SwiperSlide>
            <Projeto />
          </SwiperSlide>
          <SwiperSlide>
            <Projeto />
          </SwiperSlide>
          <SwiperSlide>
            <Projeto />
          </SwiperSlide>
          <SwiperSlide>
            <Projeto />
          </SwiperSlide>
          <SwiperSlide>
            <Projeto />
          </SwiperSlide>
          <SwiperSlide>
            <Projeto />
          </SwiperSlide>
          <SwiperSlide>
            <Projeto />
          </SwiperSlide>
          <SwiperSlide>
            <Projeto />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
