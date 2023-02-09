import logo_icon from '../../assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { replaceKrill } from '../../config/config';
import { Link } from 'react-router-dom';
import routes from '../../translations/routes.json';
import translations from './footer.json';
import { Container } from '../../layouts';
import { v4 } from 'uuid';
export default function Footer() {
  const { activeLang } = useSelector((state) => state.language);

  return (
    <div className='bg-[#fff] py-10'>
      <Container>
        <div className='grid lg:grid-cols-2 md:grid-cols-5'>
          <div className='lg:col-span-1 md:col-span-2 md:flex md:flex-col md:justify-between'>
            <div className='flex md:block items-center justify-between mb-6'>
              <Link
                to={`${replaceKrill(activeLang)}`}
                className='flex items-center'
              >
                <img
                  src={logo_icon}
                  className='w-[70px] h-[70px] mr-3'
                  alt=''
                />
                <p className='hidden md:block text-lg max-w-[150px] font-bold'>
                  {translations.ministryName[activeLang]}
                </p>
              </Link>
              <div className='md:mt-10 flex items-center'>
                <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-blue-300 rounded-full mr-4'></div>
                <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-blue-300 rounded-full mr-4'></div>
                <div className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-blue-300 rounded-full mr-4'></div>
              </div>
            </div>
            <div className='text-sm text-[#7F7F7F]'>
              {translations.endingSentence[activeLang]}
            </div>
          </div>
          <div className='lg:col-span-1 md:col-span-3 md:flex hidden md:flex-col md:justify-between'>
            <div className='flex mb-14'>
              {routes[activeLang]
                .filter((_, id) => id === 0 || id === 1)
                .map((item) => (
                  <div className='w-1/2' key={v4()}>
                    <h1 className='text-xl font-bold cursor-default mb-4'>
                      {item.name}
                    </h1>
                    <ul className='flex flex-col'>
                      {item.links.map((route) => (
                        <li key={v4()} className='my-2 hover:text-blue-600'>
                          <Link to={route.link}>{route.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
            <p className='text-[#7F7F7F] text-sm text-right mr-10'>
              {translations.developerTeam[activeLang]}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
