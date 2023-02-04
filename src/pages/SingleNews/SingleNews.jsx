import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MoreNews from '../../components/MoreNews/MoreNews';
import { Container } from '../../layouts';
import { fetchSingleNews } from '../../store/api/siingleNewsSlice.api';

function SingleNews() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleNews, loading } = useSelector((state) => state.singleNews);

  useEffect(() => {
    dispatch(fetchSingleNews(id));

    //eslint-disable-next-line
  }, []);

  const handleDateTime = (dateString) => {
    const months = {
      en: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      ru: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      uz: [
        'Yanvar',
        'Fevral',
        'Mart',
        'Aprel',
        'May',
        'Iyun',
        'Iyul',
        'Avgust',
        'Sentabr',
        'Oktabr',
        'Noyabr',
        'Dekabr',
      ],
    };
    const date = new Date(dateString);
    const monthIndex = date.getMonth();
    const monthName = months.uz[monthIndex];

    const day = date.getDate();
    const year = date.getFullYear();
    return monthName + ' ' + day + ', ' + year;
  };

  if (!singleNews.id) return;

  return (
    <Container>
      <div className='single-news flex gap-[90px]'>
        <div className='single-news__left-side w-2/3'>
          <p className='news-title text-[#33354d] mt-4 text-[25px] mb-[30px]'>
            {singleNews?.translations?.uz?.title}
          </p>

          <div
            style={{ backgroundImage: `url(${singleNews?.image})` }}
            className='image-box w-[full] h-[600px] bg-cover mb-5 rounded-md '
          ></div>
          <div className='bottom-side'>
            <div className='news-item__right-side--details flex text-[0.875rem] mb-5 text-[#9397ad]'>
              <p className='details-date mr-5 '>
                {handleDateTime(singleNews.created_at)}
              </p>
              <p className='detail-views'>
                <i className='fa-solid fa-eye '></i>
                <span className='ml-1'>{singleNews.views}</span>
              </p>
            </div>
          </div>
          <div className='w-[100px] h-[5px] bg-gray-700 mb-5'></div>
          <div className='div single-news__left-side--content w-[90%]'>
            <div
              className='news-all__content'
              dangerouslySetInnerHTML={{
                __html: singleNews?.translations?.uz?.content,
              }}
            ></div>
          </div>
        </div>
        <div className='single-news__right-side mt-4 w-1/3 '>
          <h1 className='text-[18px] text-center mb-5'>Aloqador yangiliklar</h1>
          {singleNews?.categories[0]?.slug ? (
            <MoreNews
              slug={singleNews.categories[0]?.slug}
              id={id}
              handleDateTime={handleDateTime}
            />
          ) : null}
        </div>
      </div>
    </Container>
  );
}

export default SingleNews;
