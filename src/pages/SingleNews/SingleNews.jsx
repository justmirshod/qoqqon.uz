import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import MoreNews from '../../components/MoreNews/MoreNews';
import { Container } from '../../layouts';
import { fetchSingleNews } from '../../store/api/siingleNewsSlice.api';
import { handleDateTime } from '../../config/config';
import { latinToCyrillic } from '../../hooks/useLatinToCrylic';

function SingleNews() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleNews, loading, success } = useSelector(
    (state) => state.singleNews
  );
  const { activeLang } = useSelector((state) => state.language);

  useEffect(() => {
    dispatch(fetchSingleNews(id));

    //eslint-disable-next-line
  }, []);

  if (!singleNews.id) return;

  return (
    <Container className='mb-10'>
      {loading ? (
        <Loader />
      ) : (
        <div className='single-news flex min-[0px]:flex-col  lg:flex-row gap-[70px]'>
          <div className='single-news__left-side min-[0px]:w-full lg:w-2/3 xl:w-3/4'>
            <p className='news-title text-[#33354d] min-[0px]:text-[18px] mt-4 lg:text-[25px] mb-[30px]'>
              {activeLang === 'ўз'
                ? latinToCyrillic(singleNews?.translations?.uz?.title)
                : singleNews?.translations[activeLang]?.title}
            </p>

            <img className='rounded-md w-full' src={singleNews?.image} alt='' />
            <div className='bottom-side mt-2'>
              <div className='news-item__right-side--details flex text-[0.875rem] mb-5 text-[#9397ad]'>
                <p className='details-date mr-5'>
                  {handleDateTime(singleNews.created_at, activeLang)}
                </p>
                <p className='detail-views'>
                  <i className='fa-solid fa-eye '></i>
                  <span className='ml-1'>{singleNews.views}</span>
                </p>
              </div>
            </div>
            <div className='w-[100px] h-[5px] bg-gray-700 mb-5'></div>
            <div className='div single-news__left-side--content lg:w-[90%]'>
              <div
                className='news-all__content'
                dangerouslySetInnerHTML={{
                  __html: singleNews?.translations?.uz?.content,
                }}
              ></div>
            </div>
          </div>
          <div className='single-news__right-side mt-4 min-[0px]:w-[full] lg:w-1/3 xl:w-1/4'>
            <h1 className='text-[18px] text-center mb-5'>
              Aloqador yangiliklar
            </h1>
            {singleNews?.categories[0]?.slug && success ? (
              <MoreNews
                slug={singleNews.categories[0]?.slug}
                id={id}
                handleDateTime={handleDateTime}
              />
            ) : null}
          </div>
        </div>
      )}
    </Container>
  );
}

export default SingleNews;
