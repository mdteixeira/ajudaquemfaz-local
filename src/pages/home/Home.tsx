import Ideia from './InfoSection';
import InfoSection from './Ideia';
import Presentes from './Presentes';
import Projetos from './Projetos';
import CarouselSwiper from './CarouselSwiper';
import Contact from '../../components/Contact';

const Home = () => {
  return (
    <>
      <Contact />
      <CarouselSwiper />
      <Projetos />
      <Ideia />
      <Presentes />
      <InfoSection />
    </>
  );
};

export default Home;
