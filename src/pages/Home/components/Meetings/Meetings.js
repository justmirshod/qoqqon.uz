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
                <div className='grid grid-cols-2 gap-6'>
                  <div className='col-span-1 p-4 flex flex-col justify-between border hover:border-blue-300 duration-100 rounded-2xl'>
                    <div className='rounded-xl'>
                      <img
                        src={news?.results[0]?.image}
                        className='rounded-lg w-full'
                        alt=''
                      />
                      <div className='flex items-center text-[#717171] text-sm mt-2'>
                        <span>
                          {handleDateTime(
                            news?.results[0]?.created_at,
                            activeLang
                          )}
                        </span>
                        <div className='ml-10'>
                          <i className='fa-regular fa-eye mr-1'></i>
                          <span>{news?.results[0]?.views}</span>
                        </div>
                      </div>
                      <h1 className='text-lg font-semibold leading-tight my-3'>
                        {activeLang === 'ўз'
                          ? translit(news?.results[0]?.translations.uz?.title)
                          : news?.results[0]?.translations[activeLang]?.title}
                      </h1>
                      <p className=' text-gray-800 leading-tight my-3'>
                        {activeLang === 'ўз'
                          ? translit(
                              news?.results[0]?.translations.uz?.description
                            )
                          : news?.results[0]?.translations[activeLang]
                              ?.description}
                      </p>
                      <div className='mt-10 text-blue-600'>
                        <Link
                          to={`${replaceKrill(activeLang)}/news/${
                            news?.results[0]?.id
                          }`}
                        >
                          <span>Batafsil</span>
                          <i class='fa-solid fa-arrow-right-long ml-2'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-1 flex flex-col justify-between'>
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
