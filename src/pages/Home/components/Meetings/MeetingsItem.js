import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { handleDateTime, replaceKrill } from '../../../../config/config';
import translit from 'latin-to-cyrillic';
export default function MeetingsItem({
  id,
  translations,
  image,
  created_at,
  index,
  views,
}) {
  const { activeLang } = useSelector((state) => state.language);

  return (
    <>
      {index !== 0 ? (
        <Link
          to={`${replaceKrill(activeLang)}/news/${id}`}
          className='grid md:gap-5 md:grid-cols-3 grid-cols-1 h-[32%] border lg:p-6 p-3 rounded-xl hover:border-blue-300 hover:cursor-pointer duration-150'
        >
          <img
            src={image}
            className='col-span-1 h-full overflow-hidden w-full rounded-xl mr-6'
            alt=''
          />
          <div className='col-span-2 flex flex-col h-full justify-between py-2'>
            <div>
              <h1 className='text-lg font-semibold leading-tight'>
                {activeLang === 'ўз'
                  ? translit(translations.uz?.title)
                  : translations[activeLang]?.title}
              </h1>
              <p className='font-semibold my-3 leading-relaxed text-gray-800'>
                {activeLang === 'ўз'
                  ? translit(translations?.uz?.description)
                  : translations[activeLang]?.description}
              </p>
            </div>
            <div className='flex items-center mt-2'>
              <span className='text-[#717171] inline-block text-sm mr-10'>
                {handleDateTime(created_at, activeLang)}
              </span>
              <div className='text-[#717171] text-sm'>
                <i className='fa-regular fa-eye mr-1'></i>
                <span className=''>{views}</span>
              </div>
            </div>
          </div>
        </Link>
      ) : null}
    </>
  );
}
