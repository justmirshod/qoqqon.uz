import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { replaceKrill } from '../../config/config';
import { fetchMoreNews } from '../../store/api/moreNewsSlice.api';

function MoreNews({ slug, id, handleDateTime }) {
  const dispatch = useDispatch();
  const { moreNews, loading } = useSelector((state) => state.moreNews);
  const { activeLang } = useSelector((state) => state.language);

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
        <Link
          key={item.id}
          to={replaceKrill(activeLang) + `/news/${item.id}`}
          className='single-more__news-item min-[0px]:w-full min-[500px]:w-[48%] lg:w-full min-[500px]:text-[14px] hover:shadow-lg transition-all delay-75 duration-75 ease-linear flex flex-col justify-between shadow-none cursor-pointer hover:text-[#6366f1] rounded-md border'
        >
          <div className='top-side'>
            <div
              style={{
                backgroundImage: `url(https://abdusamad4803.pythonanywhere.com${item.image})`,
              }}
              className='item-image  min-[0px]:min-h-[250px] min-[0px]:bg-cover  min-[500px]:min-h-[200px] min-[850px]:min-h-[250px] lg:min-h-[240px] xl:min-h-[200px] lg:bg-[length:100%] bg-no-repeat rounded-md'
            ></div>
            <p className='px-2 mt-2'>{item.translations[activeLang]?.title}</p>
          </div>
          <div className='bottom-side p-2 mt-3'>
            <div className='news-item__right-side--details flex text-[0.875rem] mb-1 text-[#9397ad]'>
              <p className='details-date mr-5 '>
                {handleDateTime(item.created_at, activeLang)}
              </p>
              <p className='detail-views'>
                <i className='fa-solid fa-eye '></i>
                <span className='ml-1'>{item.views}</span>
              </p>
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <div className='moreNews flex flex-row flex-wrap min-[0px]:gap-2 lg:gap-4'>
      {renderMoreNews(moreNews)}
    </div>
  );
}

export default MoreNews;
