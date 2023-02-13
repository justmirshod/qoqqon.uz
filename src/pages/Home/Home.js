import { Navbar } from '../../components';
import main_bg from '../../assets/images/hk.webp';
import { Container } from '../../layouts';
import news_icon from '../../assets/images/news-report.png';
import map_icon from '../../assets/images/location.png';
import { useSelector } from 'react-redux';
import translations from './home.json';
import { Link } from 'react-router-dom';
import { replaceKrill } from '../../config/config';
import LatestNews from './components/LatestNews/LatestNews';
import Map from '../Map/Map';
import Meetings from './components/Meetings/Meetings';
import Faq from './components/Faq/Faq';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  const { activeLang } = useSelector((state) => state.language);

  return (
    <div className=''>
      <div className='relative h-screen'>
        <img src={main_bg} className='w-full h-full' alt='' />
      </div>

      <div className=''>
        <Container>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-10 py-20'>
            <Link
              to={`${replaceKrill(activeLang)}/news`}
              className='bg-[#fff] rounded-xl px-10 py-12 shadow-lg hover:shadow-2xl transition-transform hover:scale-[1.01]  flex itmes-center'
            >
              <img src={news_icon} className='w-[60px] h-[60px] mr-4' alt='' />
              <div className='md:mt-[16px] text-xl'>
                {translations.allNews[activeLang]}
              </div>
            </Link>
            <Link
              to={`${replaceKrill(activeLang)}/map`}
              className='bg-[#fff] rounded-xl px-10 py-12 shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-transform flex items-center'
            >
              <img src={map_icon} alt='' className='w-[60px] h-[60px] mr-4' />
              <div className='text-xl'>{translations.cityMap[activeLang]}</div>
            </Link>
          </div>
        </Container>
      </div>
      <LatestNews />
      <Container>
        <div className='bg-gray-100'>
          <h1 className='text-2xl mt-10'>Qo'qon shahar xaritasi</h1>
          <Map />
        </div>
      </Container>
      <Meetings />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
