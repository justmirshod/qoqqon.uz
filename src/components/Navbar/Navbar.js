import { Link } from 'react-router-dom';
import { Container } from '../../layouts';
import logo_icon from '../../assets/images/logo.png';
import dark_mode_icon from '../../assets/icons/night-mode.png';
import light_mode_icon from '../../assets/icons/sun.png';
import { useSelector, useDispatch } from 'react-redux';
import NavbarRoutes from './NavbarRoutes';
import { setTheme, setShowLangs } from './navbar_slice';

const routes = {
  uz: [
    {
      name: 'Hokimiyat haqida',
      links: [
        {
          name: 'Maqsad va vazifalari',
          link: 'uz/goals-and-objectives',
        },
        {
          name: 'Rahbariyat',
          link: 'uz/management',
        },
        {
          name: 'Apparat',
          link: 'uz/apparats',
        },
        {
          name: 'Tarkibiy tuzilma',
          link: 'uz/structure',
        },
        {
          name: 'Fuqarolarni qabul qiish tartibi',
          link: 'uz/procedure',
        },
        {
          name: 'Tuman tasarrufidagi tashkilotlar',
          link: 'uz/subdivisions',
        },
        {
          name: 'Hokimning yordamchilari',
          link: 'uz/manager-asistants',
        },
        {
          name: "Bo'sh ish o'rinlari",
          link: 'uz/vacancies',
        },
      ],
    },
    {
      name: 'Axborot xizmati',
      links: [
        {
          name: 'Yangiliklar',
          link: 'uz/news',
        },
        {
          name: 'OAV biz haqimizda',
          link: 'uz/mass-media-about-us',
        },
        {
          name: 'Statistika',
          link: 'uz/statistics',
        },
        {
          name: 'Infografika',
          link: 'uz/infografic',
        },
        {
          name: 'Fotojamlanmalar',
          link: 'uz/photo-galery',
        },
        {
          name: 'Videojamlanmalar',
          link: 'uz/video-galery',
        },
      ],
    },
    {
      name: 'Deputatlar kengashi',
      links: [
        {
          name: 'Tuman deputatlari',
          link: 'uz/kengash-deputies',
        },
        {
          name: 'Qabul qilingan hujjatlar',
          link: 'uz/accepted-documents',
        },
      ],
    },

    // {
    //   name: "Ochiq ma'lumotlar",
    //   links: [
    //     {
    //       name: "Ochiq ma'lumotlar",
    //       link: 'uz/open-information',
    //     },
    //   ],
    // },
    {
      name: 'Tuman',
      links: [
        {
          name: "Umumiy ma'lumot",
          link: 'uz/general-information',
        },
        {
          name: 'Tuman reytingi',
          link: '/uz/indicator',
        },
        {
          name: 'Qiziqarli joylar',
          link: 'uz/interesting-places',
        },
        {
          name: 'Tuman xaritasi',
          link: 'uz/map',
        },
      ],
    },
  ],
  ўз: [
    {
      name: 'Ҳокимият ҳақида',
      links: [
        {
          name: 'Мақсад ва вазифалари',
          link: '/goals-and-objectives',
        },
        {
          name: 'Раҳбарият',
          link: '/management',
        },
        {
          name: 'Aппарат',
          link: '/apparats',
        },
        {
          name: 'Таркибий тузилма',
          link: '/structure',
        },
        {
          name: 'Фуқароларни қабул қииш тартиби',
          link: '/procedure',
        },
        {
          name: 'Туман тасарруфидаги ташкилотлар',
          link: '/subdivisions',
        },
        {
          name: 'Ҳокимнинг ёрдамчилари',
          link: '/manager-asistantas',
        },
        {
          name: 'Бўш иш ўринлари',
          link: '/vacancies',
        },
      ],
    },
    {
      name: 'Aхборот хизмати',
      links: [
        {
          name: 'Янгииликлар',
          link: '/news',
        },
        {
          name: 'ОAВ биз ҳақимизда',
          link: 'mass-media-abou-us',
        },
        {
          name: 'Статистика',
          link: '/statistics',
        },
        {
          name: 'Инфографика',
          link: '/infografic',
        },
        {
          name: 'Фотожамланмалар',
          link: '/photo-galery',
        },
        {
          name: 'Видеожамланмалар',
          link: '/video-galery',
        },
      ],
    },
    {
      name: 'Депутатлар кенгаши',
      links: [
        {
          name: 'Туман депутатлари',
          link: '/kengash-deputies',
        },
        {
          name: 'Қабул қилинган ҳужжатлар',
          link: '/accepted/documents',
        },
      ],
    },
    {
      name: 'Туман',
      links: [
        {
          name: 'Умумий маълумот',
          link: '/general-information',
        },
        {
          name: 'Туман рейтинги',
          link: '/indicator',
        },
        {
          name: 'Қизиқарли жойлар',
          link: '/interesting-places',
        },
        {
          name: 'Туман харитаси',
          link: '/map',
        },
      ],
    },
  ],
};

const Navbar = () => {
  const scrollHeight = document;
  console.log(scrollHeight);
  const { isLangLoading, activeLang, activeTheme, showLangs } = useSelector(
    (state) => state.language
  );
  const dispatch = useDispatch();
  return (
    <div className={`bg-[#fff] fixed w-full z-20`}>
      {isLangLoading ? (
        'Loading...'
      ) : (
        <Container>
          <div className='flex items-center py-4'>
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
              className='flex items-center mr-6 w-1/5'
            >
              <img
                src={logo_icon}
                className='inline-block w-[60px] h-[60px]'
                alt=''
              />
              <p className='max-w-[150px] text-lg font-semibold ml-3'>
                {activeLang === 'ўз'
                  ? 'Қўқон шаҳар ҳокимлиги'
                  : activeLang === 'uz'
                  ? "Qo'qon shahar hokimligi"
                  : activeLang === 'en'
                  ? 'Kokan city administration'
                  : 'Администрация города Кокан'}
              </p>
            </Link>
            <ul className='flex items-center justify-between w-4/5'>
              <div className='flex items-center'>
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
                <div className='mr-3'>
                  <div
                    className='inline-flex bg-white border rounded-md'
                    onMouseOver={(e) => {
                      if (e.target.tagName === 'BUTTON') {
                        dispatch(setShowLangs(true));
                      }
                    }}
                    onMouseOut={(e) => {
                      if (e.target) dispatch(setShowLangs(false));
                    }}
                  >
                    <button className='px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md'>
                      {activeLang.toUpperCase()}
                    </button>

                    <div
                      className={`relative ${
                        showLangs ? 'h-full' : 'h-0 overflow-hidden'
                      } `}
                    >
                      <div className='absolute right-0 z-10 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg top-6'>
                        <div className='p-2'>
                          <Link
                            to='EN'
                            className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
                          >
                            EN
                          </Link>
                          <Link
                            to='RU'
                            className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
                          >
                            RU
                          </Link>
                          <Link
                            to='/uz'
                            className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
                          >
                            UZ
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className='bg-blue-600 hover:bg-blue-700 rounded-lg py-2 px-3'>
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
              </div>
            </ul>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Navbar;
