import { Link } from 'react-router-dom';
import { Container } from '../../layouts';
import logo_icon from '../../assets/images/logo.png';
import dark_mode_icon from '../../assets/icons/night-mode.png';
import light_mode_icon from '../../assets/icons/sun.png';
import { useSelector, useDispatch } from 'react-redux';
import NavbarRoutes from './NavbarRoutes';
import { setTheme, setShowLangs } from './navbar_slice';
import routes from '../../translations/routes.json';
import MiniNavbarItem from '../MiniNavbar/MiniNavbarItem';
import MiniNavbar from '../MiniNavbar/MiniNavbar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { setLang } from './navbar_slice';

const Navbar = () => {
  const { isLangLoading, activeLang, activeTheme, showLangs } = useSelector(
    (state) => state.language
  );
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  const langs = ['uz', 'ru', 'en', 'ўз'];

  useEffect(() => {
    document.body.style.overflow = 'initial';
    setShowModal(false);
  }, [location.pathname]);

  return (
    <div className={`bg-[#fff] sticky top-0 w-full z-20 shadow-lg`}>
      <div className='relative'>
        {isLangLoading ? (
          'Loading...'
        ) : (
          <Container>
            <div className='flex items-center py-4 relative'>
              <Link
                to={
                  activeLang === 'uz'
                    ? '/uz'
                    : activeLang === 'ru'
                    ? '/ru'
                    : activeLang === 'en'
                    ? '/en'
                    : '/'
                }
                className='flex items-center mr-6 lg:w-1/4 xl:w-1/5 md:w-1/3 w-1/2'
              >
                <img
                  src={logo_icon}
                  className='inline-block w-[60px] h-[60px]  sm:w-[80px] sm:h-[80px]'
                  alt=''
                />
                <p className='sm:block hidden text-lg font-semibold ml-3'>
                  {activeLang === 'ўз'
                    ? 'Қўқон шаҳар ҳокимлиги'
                    : activeLang === 'uz'
                    ? "Qo'qon shahar hokimligi"
                    : activeLang === 'en'
                    ? 'Kokan city administration'
                    : 'Администрация города Кокан'}
                </p>
              </Link>
              <ul className='flex items-center justify-end xl:justify-between w-4/5'>
                <div className='xl:flex items-center hidden'>
                  {routes[activeLang].map((item, index, arr) => (
                    <NavbarRoutes key={item.name} item={item} />
                  ))}
                </div>

                <div className='flex items-center'>
                  <div
                    className={`${
                      activeTheme === 'dark' ? '' : ''
                    } duration-200 w-[50px] h-[25px] rounded-2xl flex items-center mr-3 bg-blue-600 box-border`}
                    onClick={() => {
                      if (activeTheme === 'light') {
                        dispatch(setTheme('dark'));
                      } else {
                        dispatch(setTheme('light'));
                      }
                    }}
                  >
                    <div
                      className={`${
                        activeTheme === 'dark'
                          ? 'translate-x-[130%]'
                          : 'translate-x-[20%] '
                      } duration-200 w-[20px] h-[20px] rounded-full translate-y-[0.4px] bg-[#fff]`}
                    ></div>
                  </div>
                  <div className='relative mr-3'>
                    <button className='bg-gray-100 py-2 px-3 rounded'>
                      {activeLang.toUpperCase()}
                    </button>
                    <div className='absolute pt-1'>
                      <div className='flex flex-col border bg-[#fff]'>
                        {langs.map((item) => (
                          <div
                            className='py-2 px-3 border-b hover:bg-gray-50 cursor-pointer'
                            onClick={dispatch(setLang(item))}
                          >
                            {item.toUpperCase()}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className='bg-blue-600 hover:bg-blue-700 hidden xl:block rounded-lg py-2 px-3'>
                    <Link
                      to={`/${activeLang}/contacts`}
                      className='text-[#fff] text-center'
                    >
                      {activeLang === 'ўз'
                        ? 'Боғланиш'
                        : activeLang === 'uz'
                        ? "Bog'lanish"
                        : activeLang === 'en'
                        ? 'Contact'
                        : 'Контакт'}
                    </Link>
                  </button>
                  <button
                    className='w-10 h-10 xl:hidden'
                    onClick={() => {
                      setShowModal(true);
                      document.body.style.overflow = 'hidden';
                    }}
                  >
                    <i class='fa-solid fa-bars text-2xl font-semibold'></i>
                  </button>
                </div>
              </ul>
            </div>
          </Container>
        )}
        <MiniNavbar show={showModal} setShow={setShowModal} />
      </div>
    </div>
  );
};

export default Navbar;
