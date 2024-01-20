import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CardOng from './CardOng';

const Ideia = () => (
  <>
    <div className="bg-secondary-400 text-white w-100 py-8 px-16 grid grid-cols-2 gap-16">
      <section>
        <h2 className="font-bold text-4xl">Ajuda Quem Faz!</h2>
        <p className="text-2xl mt-8">
          Descrição da ideia do nosso e-comerce. Descrição da ideia do nosso e-comerce.
          Descrição da ideia do nosso e-comerce. Descrição da ideia do nosso e-comerce.
          Descrição da ideia do nosso e-comerce.
        </p>
      </section>
      <section className="">
        <h2 className="font-bold text-2xl mb-8">
          Milhares de projetos sendo impulsionados por você! <br /> Conheça quem faz:
        </h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper py-8"
        >
          <SwiperSlide>
            <CardOng></CardOng>
          </SwiperSlide>
          <SwiperSlide>
            <CardOng></CardOng>
          </SwiperSlide>
          <SwiperSlide>
            <CardOng></CardOng>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  </>
);

export default Ideia;
