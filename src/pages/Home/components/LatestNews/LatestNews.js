import { Container } from '../../../../layouts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getLatestNews } from '../../../../store/api/newsSlice.api';
import LatestNewsItem from '../LatestNewsItem/LatestNewsItem';

export default function LatestNews() {
  useEffect(() => {
    dispatch(getLatestNews());
  }, []);

  const dispatch = useDispatch();
  const { latestNewsLoading, latestNews } = useSelector((state) => state.news);

  return (
    <div>
      {latestNewsLoading ? (
        'Loading...'
      ) : (
        <>
          {latestNews.results?.length === 0 ? (
            'Nothing found'
          ) : (
            <div className='grid grid-cols-3'>
              {latestNews.results?.map((item) => (
                <LatestNewsItem key={item.id} {...item} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
