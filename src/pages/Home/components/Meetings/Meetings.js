import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container } from '../../../../layouts';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../../../../store/api/newsSlice.api';
import { setActiveCategory } from '../../../../store/api/categoriesSlice.api';
import { replaceKrill, handleDateTime } from '../../../../config/config';
import MeetingsItem from './MeetingsItem';
import translit from 'latin-to-cyrillic';

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
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl mb-8'>Uchrashuv va tadbirlar</h1>
          <div>
            <span
              className='cursor-pointer'
              onClick={() => {
                dispatch(setActiveCategory('uchrashuv'));
                navigate(`${replaceKrill(activeLang)}/news`);
              }}
            >
              Barchasi
            </span>
            <i class='fa-solid fa-arrow-right-long ml-2'></i>
          </div>
        </div>

        {loading ? (
          'Loading'
        ) : (
          <>
            {news?.total === 0 ? (
              'Yangiliklar topilmadi'
            ) : (
              <>
                <div className='grid grid-cols-7 gap-6'>
                  <div className='col-span-3 border rounded-2xl hover:border-blue-300 p-6'>
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
                                  ? translit(item.translations?.uz?.title)
                                  : item.translations[activeLang]?.title}
                              </h1>
                              <p className='font-semibold my-3 leading-relaxed text-gray-800'>
                                {activeLang === 'ўз'
                                  ? translit(item.translations?.uz?.description)
                                  : item.translations[activeLang]?.description}
                              </p>
                            </div>
                            <div className='mt-4 text-blue-600'>
                              <Link
                                to={`${replaceKrill(activeLang)}/news/${
                                  item.id
                                }`}
                              >
                                <span>Batafsil</span>
                                <i class='fa-solid fa-arrow-right-long ml-2'></i>
                              </Link>
                            </div>
                          </div>
                        ) : null}
                      </>
                    ))}
                  </div>
                  <div className='col-span-4 flex flex-col justify-between'>
                    {news?.results?.map((item, index) => (
                      <MeetingsItem {...item} index={index} />
                    ))}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </Container>
    </div>
  );
}
