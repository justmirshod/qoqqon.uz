import { Link } from 'react-router-dom';
import { Container } from '../../layouts';
import logo_icon from '../../assets/images/logo.png';
import { useSelector, useDispatch } from 'react-redux';

const routes = {
  uz: [
    {
      name: 'Hokimiyat haqida',
      links: [
        {
          name: 'Maqsad va vazifalari',
          link: '/goals-and-objectives',
        },
        {
          name: 'Rahbariyat',
          link: '/management',
        },
        {
          name: 'Apparat',
          link: '/apparats',
        },
        {
          name: 'Tarkibiy tuzilma',
          link: '/structure',
        },
        {
          name: 'Fuqarolarni qabul qiish tartibi',
          link: '/procedure',
        },
        {
          name: 'Tuman tasarrufidagi tashkilotlar',
          link: '/subdivisions',
        },
        {
          name: 'Hokimning yordamchilari',
          link: '/manager-asistants',
        },
        {
          name: "Bo'sh ish o'rinlari",
          link: '/vacancies',
        },
      ],
    },
    {
      name: 'Deputatlar kengashi',
      links: [
        {
          name: 'Tuman deputatlari',
          link: '/district-deputies',
        },
        {
          name: 'Qabul qilingan hujjatlar',
          link: '/accepted-documents',
        },
      ],
    },
    {
      name: 'Matbuot markazi',
      links: [
        {
          name: 'Yangiliklar',
          link: '/news',
        },
        {
          name: 'OAV biz haqimizda',
          link: '/mass-media-about-us',
        },
        {
          name: 'Statistika',
          link: '/statistics',
        },
        {
          name: 'Infografika',
          link: '/infografic',
        },
        {
          name: 'Fotojamlanmalar',
          link: 'photo-galery',
        },
        {
          name: 'Videojamlanmalar',
          link: 'video-galery',
        },
      ],
    },
    {
      name: "Ochiq ma'lumotlar",
      links: [
        {
          name: "Ochiq ma'lumotlar",
          link: '/open-information',
        },
      ],
    },
    {
      name: 'Tuman',
      links: [
        {
          name: "Umumiy ma'lumot",
          link: '/general-information',
        },
        {
          name: 'Tuman reytingi',
          link: 'indicator',
        },
        {
          name: 'Qiziqarli saytlar',
          link: '/interesting-places',
        },
        {
          name: 'Tuman xaritasi',
          link: '/map',
        },
      ],
    },
    {
      name: "Bog'lanish",
      links: [
        {
          name: "Bog'lanish",
          link: '/contacts',
        },
      ],
    },
  ],
};

const uz = {
  name: 'Hokimiyat haqida',
  links: [
    'Maqsad va vazifalari',
    'Rahbariyat',
    'Apparat',
    'Tarkibiy tuzilma',
    'Fuqarolarni qabul qiish tartibi',
    'Tuman tasarrufidagi tashkilotlar',
    'Hokimning yordamchilari',
    "Bo'sh ish o'rinlari",
  ],
};

const kr = {
  name: 'Ҳокимият ҳақида',
  links: [
    'Мақсад ва вазифалари',
    'Раҳбарият',
    'Aппарат',
    'Таркибий тузилма',
    'Фуқароларни қабул қииш тартиби',
    'Туман тасарруфидаги ташкилотлар',
    'Ҳокимнинг ёрдамчилари',
    'Бўш иш ўринлари',
  ],
};

const Navbar = () => {
  const { isLangLoading, activeLang } = useSelector((state) => state.language);

  return (
    <div>
      {isLangLoading ? (
        'Loading...'
      ) : (
        <Container>
          <div className='flex items-center'>
            <Link to='/' className='flex items-center'>
              <img
                src={logo_icon}
                className='inline-block w-[80px] h-[80px]'
                alt=''
              />
              <p className='max-w-[150px] text-lg font-semibold ml-3'>
                Qo'qon shahar hokimligi
              </p>
            </Link>
            <ul className='flex items-center'>
              <li></li>
            </ul>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Navbar;
