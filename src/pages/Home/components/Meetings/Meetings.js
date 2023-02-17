import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container } from '../../../../layouts';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../../../../store/api/newsSlice.api';
import { setActiveCategory } from '../../../../store/api/categoriesSlice.api';
import { replaceKrill, handleDateTime } from '../../../../config/config';
import MeetingsItem from './MeetingsItem';
import translit from 'latin-to-cyrillic';
import meetingTranslation from './translation.json';
import homeTranslation from '../../home.json';
import { latinToCyrillic } from '../../../../hooks/useLatinToCrylic';

export default function Meetings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activeLang } = useSelector((state) => state.language);
  const { news, loading } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(
      getAllNews({
        page_size: 4,
        category: 'uchrashuv',
        popular: '',
        search: '',
        page: 1,
      })
    );
  }, []);

  return (
    <div className='bg-[#fff] py-10 mb-4'>
      <Container>
        <div className='flex items-center justify-between mb-8'>
          <h1 className='text-2xl'>
            {meetingTranslation.meetings[activeLang]}
          </h1>
          <div className='hidden md:block'>
            <span
              className='cursor-pointer'
              onClick={() => {
                dispatch(setActiveCategory('uchrashuv'));
                navigate(`${replaceKrill(activeLang)}/news`);
              }}
            >
              {homeTranslation.all[activeLang]}
            </span>
            <i class='fa-solid fa-arrow-right-long ml-2'></i>
          </div>
        </div>

        <>
          {news?.total === 0 ? (
            'Yangiliklar topilmadi'
          ) : (
            <>
              <div className='grid lg:grid-cols-7  grid-cols-1 gap-6'>
                <div className='lg:col-span-3 border rounded-2xl hover:border-blue-300 lg:p-6 p-3'>
                  {news?.results?.map((item, index) => (
                    <>
                      {index === 0 ? (
                        <div className='flex flex-col justify-between h-full'>
                          <div>
                            <img
                              src={item.image}
                              className='rounded-xl'
                              alt=''
                            />
                            <div className='flex items-center mt-2'>
                              <span className='text-[#717171] inline-block mr-10'>
                                {handleDateTime(item.created_at, activeLang)}
                              </span>
                              <div className='text-[#717171] text-sm'>
                                <i className='fa-regular fa-eye mr-1'></i>
                                <span className=''>{item.views}</span>
                              </div>
                            </div>
                            <h1 className='text-xl font-semibold leading-tight my-3'>
                              {activeLang === 'ўз'
                                ? latinToCyrillic(item.translations?.uz?.title)
                                : item.translations[activeLang]?.title}
                            </h1>
                            <p className='font-semibold my-3 leading-relaxed text-gray-800'>
                              {activeLang === 'ўз'
                                ? latinToCyrillic(
                                    item.translations?.uz?.description
                                  )
                                : item.translations[activeLang]?.description}
                            </p>
                          </div>
                          <div className='mt-4 text-blue-600'>
                            <Link
                              to={`${replaceKrill(activeLang)}/news/${item.id}`}
                            >
                              <span>{homeTranslation.detail[activeLang]}</span>
                              <i class='fa-solid fa-arrow-right-long ml-2'></i>
                            </Link>
                          </div>
                        </div>
                      ) : null}
                    </>
                  ))}
                </div>
                <div className='lg:col-span-4 flex flex-col justify-between'>
                  {news?.results?.map((item, index) => (
                    <MeetingsItem {...item} index={index} />
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      </Container>
    </div>
  );
}
