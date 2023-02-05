import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNews } from '../../store/api/newsSlice.api';
import {
  // useNavigate,
  // createSearchParams,
  // useSearchParams,
  Link,
} from 'react-router-dom';
import { Container } from '../../layouts';
import NewsItem from './NewsItem';
import Categories from '../../components/Categories/Categories';
import Pagination from '../../components/Pagination/Pagination';
import { setCategoryPageIndex } from '../../store/api/categoriesSlice.api';
import Loader from '../../components/Loader/Loader';

function News() {
  const { news, loading } = useSelector((state) => state.news);
  const { activeCategory, categories, query } = useSelector(
    (state) => state.newsCategories
  );
  const dispatch = useDispatch();

  const handleActiveCategoryPageIndex = (activeCategory) => {
    if (!categories.results) return;
    const item = categories.results?.find(
      (item) => item.slug === activeCategory
    );

    return item.activePageIndex;
  };

  const activePageIndex = handleActiveCategoryPageIndex(activeCategory);

  useEffect(() => {
    if (activePageIndex === undefined) return;
    dispatch(
      getAllNews({
        category: activeCategory === 'all' ? '' : activeCategory,
        search: query,
        popular: '',
        page: activePageIndex ? activePageIndex + 1 : 1,
        page_size: 10,
      })
    );
    //eslint-disable-next-line
  }, [activePageIndex, activeCategory, query]);

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

  const renderAllNews = () => {
    if (news?.total === 0) {
      return <h1 className='text-center'>Hech qanaqa yangilik topilmadi</h1>;
    }

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
            {loading ? <Loader /> : renderAllNews()}
          </div>

          <div className='section-content__categories w-1/3 flex  justify-center'>
            <Categories />
          </div>
        </div>
      </section>
      <section className='pagination flex selection mb-5'>
        {news?.results && !loading ? (
          <Pagination
            pageCount={handlePageCount(news)}
            setState={setCategoryPageIndex}
            activePageIndex={handleActiveCategoryPageIndex(activeCategory)}
            slug={activeCategory}
          />
        ) : null}
      </section>
    </Container>
  );
}

export default News;
