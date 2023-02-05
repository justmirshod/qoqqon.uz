import { LatestNews, Navbar } from '../../components';
import main_bg from '../../assets/images/hk.webp';
import { Container } from '../../layouts';
import news_icon from '../../assets/images/news-report.png';
import map_icon from '../../assets/images/location.png';

const Home = () => {
  return (
    <div className=''>
      <div className='relative h-screen'>
        <img src={main_bg} className='w-full h-full' alt='' />
      </div>

      <div className=''>
        <Container>
          <div className='grid grid-cols-2 gap-10 py-20'>
            <div className='bg-[#fff] rounded-xl px-10 py-12 shadow-lg hover:shadow-2xl duration-200 hover:scale-[1.01] flex itmes-center'>
              <img src={news_icon} className='w-[60px] h-[60px] mr-4' alt='' />
              <div className='mt-[16px] text-xl'>
                Qoqon shahrining barcha yangiliklari
              </div>
            </div>
            <div className='bg-[#fff] rounded-xl px-10 py-12 shadow-lg hover:shadow-2xl duration-200 hover:scale-[1.01] flex items-center'>
              <img src={map_icon} alt='' className='w-[60px] h-[60px] mr-4' />
              <div className='text-xl'>Qo'qon shahar xaritasi</div>
            </div>
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
