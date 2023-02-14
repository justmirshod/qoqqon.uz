import { useSelector } from 'react-redux';
import translit from 'latin-to-cyrillic';
import { adaptToLanguage } from '../../../../config/config';
import { handleDateTime } from '../../../../config/config';
import { Link } from 'react-router-dom';
import { replaceKrill } from '../../../../config/config';
import translation from '../../home.json';

export default function LatestNewsItem({
  translations,
  created_at,
  image,
  id,
  views,
}) {
  const { activeLang } = useSelector((state) => state.language);
  return (
    <div className='lg:p-6 p-4 rounded-2xl bg-[#faf8f8] shadow-lg col-span-1 flex flex-col justify-between'>
      <div>
        <img src={image} alt='' className='w-full h-[240px] rounded-xl' />
        <div className='flex items-center mt-2'>
          <span className='text-[#717171] inline-block text-sm mr-10'>
            {handleDateTime(created_at, activeLang)}
          </span>
          <div className='text-[#717171] text-sm'>
            <i className='fa-regular fa-eye mr-1'></i>
            <span className=''>{views}</span>
          </div>
        </div>
        <h1 className='text-lg font-semibold leading-tight my-3'>
          {activeLang === 'ўз'
            ? translit(translations.uz?.title)
            : translations[activeLang]?.title}
        </h1>
      </div>
      <div className='mt-4 text-blue-600'>
        <Link to={`${replaceKrill(activeLang)}/news/${id}`}>
          <span>{translation.detail[activeLang]}</span>
          <i class='fa-solid fa-arrow-right-long ml-2'></i>
        </Link>
      </div>
    </div>
  );
}
