import { Container } from '../../../../layouts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getLatestNews } from '../../../../store/api/newsSlice.api';
import LatestNewsItem from '../LatestNewsItem/LatestNewsItem';
import { Link } from 'react-router-dom';
import { replaceKrill } from '../../../../config/config';

export default function LatestNews() {
  useEffect(() => {
    dispatch(getLatestNews());
  }, []);

  const dispatch = useDispatch();
  const { latestNewsLoading, latestNews } = useSelector((state) => state.news);
  const { activeLang } = useSelector((state) => state.language);

  return (
    <div className='bg-[#fff] pt-8 pb-20'>
      <Container>
        {latestNewsLoading ? (
          'Loading...'
        ) : (
          <>
            {latestNews.results?.length === 0 ? (
              'Nothing found'
            ) : (
              <>
                <h1 className='text-2xl mt-4 mb-6'>So'nggi xabarlar</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                  {latestNews.results?.map((item) => (
                    <LatestNewsItem key={item.id} {...item} />
                  ))}
                </div>
              </>
            )}
            <div className='text-center mt-10'>
              <Link to={`${replaceKrill(activeLang)}/news`}>
                <button className='bg-blue-600 hover:bg-blue-700 text-[#fff] py-3 px-5 rounded-xl'>
                  Barcha xabarlar
                </button>
              </Link>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
