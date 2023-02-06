import React from 'react';
import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { replaceKrill } from '../../config/config';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../store/api/categoriesSlice.api';

function NewsItem({ translations, categories, image, created_at, views, id }) {
  const { activeLang } = useSelector((state) => state.language);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const renderCategories = (categoryList) => {
    const colors = ['red', 'yellow', 'blue', 'green'];
    return categoryList?.map((item) => {
      const itemClassname = classNames(
        'news-item__category text-white inline-block p-1 rounded-[5px] text-[13px] mr-3 cursor-pointer',
        {
          'bg-[#22C55E] shadow-md shadow-[#22C55E]':
            item.id % colors.length === 0,
          'bg-[#ef4444] shadow-md shadow-[#ef4444]':
            item.id % colors.length === 1,
          'bg-[#ffba08] shadow-md shadow-[#ffba08]':
            item.id % colors.length === 2,
          'bg-[#4c82f7] shadow-md shadow-[#4c82f7]':
            item.id % colors.length === 3,
        }
      );
      return (
        <div
          onClick={() => {
            dispatch(setActiveCategory(item.slug));
          }}
          key={item.id}
          className={itemClassname}
        >
          {item?.translations?.uz?.name}
        </div>
      );
    });
  };

  return (
    <div className={`news-item flex min-h-[240px] gap-4 mb-4 `}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className='news-item__left-side w-1/3 bg-cover bg-center-top rounded-md cursor-pointer'
        onClick={() => {
          navigate(replaceKrill(activeLang) + `/news/${id}`);
        }}
      ></div>
      <div
        className={`news-item__right-side w-2/3 flex flex-col justify-between pb-2`}
      >
        <div className='top-side'>
          <div className='news-item__right-side--category'>
            {renderCategories(categories)}
          </div>
          <Link to={replaceKrill(activeLang) + `/news/${id}`}>
            <p className='news-item__right-side--title text-[#33354d] mt-4 hover:text-[#6366f1] cursor-pointer transition-colors duration-125 delay-75 ease-linear'>
              {translations?.uz?.title}
            </p>
          </Link>

          <p className='news-item__right-side--description text-[#575a74] leading-6 text-[14px] mt-2'>
            {translations?.uz?.description}
          </p>
        </div>
        <div className='bottom-side'>
          <div className='news-item__right-side--details flex text-[0.875rem] text-[#9397ad]'>
            <p className='details-date mr-5 '>{handleDateTime(created_at)}</p>
            <p className='detail-views'>
              <i className='fa-solid fa-eye '></i>
              <span className='ml-1'>{views}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;