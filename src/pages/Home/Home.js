import { LatestNews, Navbar } from '../../components';
import main_bg from '../../assets/images/hk.webp';
import { Container } from '../../layouts';
import news_icon from '../../assets/images/news-report.png';
import map_icon from '../../assets/images/location.png';
import { useSelector } from 'react-redux';
import translations from './home.json';
import { Link } from 'react-router-dom';
import { replaceKrill } from '../../config/config';

const Home = () => {
  const { activeLang } = useSelector((state) => state.language);

  return (
    <div className=''>
      <div className='relative h-screen'>
        <img src={main_bg} className='w-full h-full' alt='' />
      </div>

      <div className=''>
        <Container>
          <div className='grid grid-cols-2 gap-10 py-20'>
            <Link
              to={`${replaceKrill(activeLang)}/news`}
              className='bg-[#fff] rounded-xl px-10 py-12 shadow-lg hover:shadow-2xl duration-200 hover:scale-[1.01] flex itmes-center'
            >
              <img src={news_icon} className='w-[60px] h-[60px] mr-4' alt='' />
              <div className='mt-[16px] text-xl'>
                {translations.allNews[activeLang]}
              </div>
            </Link>
            <Link
              to={`${replaceKrill(activeLang)}/map`}
              className='bg-[#fff] rounded-xl px-10 py-12 shadow-lg hover:shadow-2xl duration-200 hover:scale-[1.01] flex items-center'
            >
              <img src={map_icon} alt='' className='w-[60px] h-[60px] mr-4' />
              <div className='text-xl'>{translations.cityMap[activeLang]}</div>
            </Link>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <LatestNews />
        </Container>
      </div>
    </div>
  );
};

export default Home;
