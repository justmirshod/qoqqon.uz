import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMoreNews } from '../../store/api/moreNewsSlice.api';
import Loader from '../Loader/Loader';

function MoreNews({ slug, id, handleDateTime }) {
  const dispatch = useDispatch();
  const { moreNews, loading } = useSelector((state) => state.moreNews);

  useEffect(() => {
    dispatch(fetchMoreNews(slug));

    //eslint-disable-next-line
  }, []);

  const renderMoreNews = (news) => {
    if (loading) <h1>Loading</h1>;

    if (!news.results) return;

    const newArray = news.results.filter((item) => +item.id !== +id);
    return newArray.map((item) => {
      return (
        <Link key={item.id} to={`/news/${item.id}`}>
          <div className='single-more__news-item w-[350px] hover:shadow-lg transition-all delay-75 duration-75 ease-linear shadow-none cursor-pointer hover:text-[#6366f1] rounded-md border'>
            <div
              style={{
                backgroundImage: `url(https://abdusamad4803.pythonanywhere.com${item.image})`,
              }}
              className='item-image  h-[200px] bg-cover rounded-md'
            ></div>
            <div className='more-news--content'>
              <p className='px-2 mt-2'>{item.translations?.uz?.title}</p>
              <div className='bottom-side p-2 mt-3'>
                <div className='news-item__right-side--details flex text-[0.875rem] mb-1 text-[#9397ad]'>
                  <p className='details-date mr-5 '>
                    {handleDateTime(item.created_at)}
                  </p>
                  <p className='detail-views'>
                    <i className='fa-solid fa-eye '></i>
                    <span className='ml-1'>{item.views}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <div className='moreNews flex flex-col items-center gap-4'>
      {renderMoreNews(moreNews)}
    </div>
  );
}

export default MoreNews;
