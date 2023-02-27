import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { latinToCyrillic } from '../../../hooks/useLatinToCrylic';
import { fetchHokim } from '../../../store/api/leaderSlice.api';
import translation from './leader.json';

function Leader() {
  const dispatch = useDispatch();
  const { hokim } = useSelector((state) => state.leader);
  const { activeLang } = useSelector((state) => state.language);
  useEffect(() => {
    if (hokim.results) return;
    dispatch(fetchHokim());

    //eslint-disable-next-line
  }, []);

  const renderSocialNumbers = (array) => {
    let newArray = [];
    array.forEach((item) => {
      const icon = item.icon.split('-').slice(-1)[0];
      if (
        icon !== 'facebook' &&
        icon !== 'telegram' &&
        icon !== 'globe' &&
        icon !== 'instagram'
      ) {
        newArray.push(item);
      }
    });
    return newArray?.map((item) => {
      return (
        <div key={item.id} className='flex gap-3 flex-col md:flex-row'>
          <p className='text-[#33354d] leading-8'>
            {activeLang === 'ўз'
              ? latinToCyrillic(item?.translations?.uz?.name)
              : item?.translations[activeLang]?.name}
          </p>
          <a
            className='text-[18px] hover:text-[#6366f1] min-w-[200px] md:mb-0 mb-5'
            href={item?.translations?.uz?.link}
          >
            {item?.translations?.uz?.link.split('tel:')[1]}
          </a>
        </div>
      );
    });
  };

  const renderSocialPages = (array) => {
    let newArray = [];
    array.forEach((item) => {
      const icon = item.icon.split('-').slice(-1)[0];
      if (
        icon === 'facebook' ||
        icon === 'telegram' ||
        icon === 'globe' ||
        icon === 'instagram'
      ) {
        newArray.push({
          id: item.id,
          link: item?.translations?.uz?.link,
          icon: item?.icon,
        });
      }
    });
    if (!newArray.length > 0) return;
    return newArray.map((item) => {
      return (
        <a key={item.id} href={item.link} target='_blank' rel='noreferrer'>
          <div className='single-page w-[40px] h-[40px] flex items-center hover:shadow-sm hover:shadow-blue-500/50 rounded-lg hover:border-[#6366f159] justify-center border-2 '>
            <span className={`${item.icon} `}></span>
          </div>
        </a>
      );
    });
  };

  if (!hokim.results) return;

  return (
    <div className='leader flex gap-3 flex-col-reverse md:flex-row'>
      <div className='leader-infos mb-40 w-full md:w-3/5'>
        <h1 className=' text-[30px] lg:text-[60px] text-[#33354d] '>
          {activeLang === 'ўз'
            ? latinToCyrillic(hokim?.results[0]?.translations?.uz?.full_name)
            : hokim?.results[0]?.translations[activeLang].full_name}
        </h1>
        <p className='leader-infos__content text-[#575a74] leading-8 text-[15px] mt-4'>
          {activeLang === 'ўз'
            ? latinToCyrillic(hokim?.results[0]?.translations?.uz?.about)
            : hokim?.results[0]?.translations[activeLang].about}
        </p>

        <div className='w-[100px] my-5 h-[5px] bg-slate-500'></div>

        <div className='social-media'>
          <h1 className='text-[20px] mb-4'>
            {translation['social-pages'][activeLang]}
          </h1>
          {renderSocialNumbers(hokim.results[0].social_pages)}
          <div className='social-pages mt-4 flex gap-4'>
            {renderSocialPages(hokim.results[0].social_pages)}
          </div>
        </div>
      </div>
      <div className='leader-image w-full md:w-2/5'>
        <img
          className='ml-auto rounded-lg'
          src={hokim.results[0].image}
          alt=''
        />
      </div>
    </div>
  );
}

export default Leader;
