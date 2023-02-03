import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNews } from '../../store/api/newsSlice.api';
import {
  useNavigate,
  createSearchParams,
  useSearchParams,
  Link,
} from 'react-router-dom';
import { Container } from '../../layouts';
import NewsItem from './NewsItem';
import Categories from '../../components/Categories/Categories';
import Pagination from '../../components/Pagination/Pagination';
import {
  setActivePage,
  setActiveCategory,
} from '../../store/api/categoriesSlice.api';

function News() {
  const { news, loading } = useSelector((state) => state.news);
  const { activePageIndex, activeCategory } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(
      getAllNews({
        category: activeCategory === 'all' ? '' : activeCategory,
        search: '',
        popular: '',
        page: activePageIndex + 1,
        page_size: 1,
      })
    );

    //eslint-disable-next-line
  }, [activePageIndex, activeCategory]);

  // const handleRouteSubmit = (e) => {
  //   e.preventDefault();
  //   const params = {
  //     category: query,
  //     search,
  //     page,
  //     page_size,
  //   };
  //   if (params.search === '') {
  //     delete params.search;
  //   }
  //   const options = {
  //     pathname: '/news',
  //     search: `?${createSearchParams(params)}`,
  //   };
  //   navigate(options, { replace: true });
  // };

  const renderAllNews = (data) => {
    return news?.results?.map((item, index) => {
      return <NewsItem key={item.id} {...item} index={index} />;
    });
  };

  const handlePageCount = (data) => {
    return Math.ceil(data?.total / data?.page_size);
  };

  return (
    <Container className='relative'>
      <h1 className='page-route text-[#797f8c] my-[20px] text-[18px]'>
        <Link to={'/'}>Bosh sahifa </Link>
        <span>{'>'}</span>
        <Link to={'/news'}> Yangiliklar</Link>
      </h1>
      <section className='allnews-container'>
        <h1 className='section-route text-[24px] mb-[10px]'>Yangiliklar</h1>
        <div className={`section-content flex gap-20`}>
          <div className='section-content__news w-2/3 '>
            {loading ? <h1>Loading</h1> : renderAllNews()}
          </div>

          <div className='section-content__categories w-1/3 flex  justify-center'>
            <Categories />
          </div>
        </div>
      </section>
      <section className='pagination flex'>
        {news?.results ? (
          <Pagination
            pageCount={handlePageCount(news)}
            setState={setActivePage}
            activePageIndex={activePageIndex}
          />
        ) : null}
      </section>
    </Container>
  );
}

export default News;
