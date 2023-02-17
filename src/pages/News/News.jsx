import React, { useState, useEffect } from 'react';
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
  setActiveCategory,
  setCategoryPageIndex,
} from '../../store/api/categoriesSlice.api';
import Loader from '../../components/Loader/Loader';

//translations
import generalTranslations from '../../translations/general.json';
import translations from './news.json';
import { replaceKrill } from '../../config/config';

function News() {
  const { news, loading } = useSelector((state) => state.news);
  const navigate = useNavigate();
  const { activeCategory, categories, query } = useSelector(
    (state) => state.newsCategories
  );
  const { activeLang } = useSelector((state) => state.language);
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilter] = useState(false);

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
    const category = searchParams.get('category');
    if (!category) {
      dispatch(setActiveCategory(activeCategory));
      return;
    }
    dispatch(setActiveCategory(searchParams.get('category')));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (activePageIndex === undefined) return;
    setShowFilter(false);
    dispatch(
      getAllNews({
        category: activeCategory === 'all' ? '' : activeCategory,
        search: query,
        page: activePageIndex ? activePageIndex + 1 : 1,
      })
    );
    handleRouteSubmit();
    //eslint-disable-next-line
  }, [activePageIndex, activeCategory, query]);

  const handleRouteSubmit = () => {
    const params = {
      category: activeCategory,
    };
    const options = {
      pathname: replaceKrill(activeLang) + '/news',
      search: `?${createSearchParams(params)}`,
    };
    navigate(options, { replace: true });
  };

  if (showFilters) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.height = 'fit-content';
    document.body.style.overflow = 'visible';
  }

  const renderAllNews = () => {
    if (loading) <Loader />;

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
    <div>
      <Container
        className={`min-[0px]:static lg:relative  ${
          showFilters ? 'min:[0px]:h-screen overflow-hidden' : ''
        }`}
      >
        <h1 className='page-route text-[#797f8c] my-[20px] text-[18px]'>
          <Link to={`${replaceKrill(activeLang)}/`}>
            {generalTranslations.home[activeLang]}
          </Link>
          <i class='fa-solid fa-angle-right mx-2'></i>
          <Link to={`${replaceKrill(activeLang)}/news`}>
            {translations.news[activeLang]}
          </Link>
        </h1>
        <section className='allnews-container w-full '>
          <h1 className='section-route text-[24px] mb-[10px]'>
            {translations.news[activeLang]}
          </h1>
          <div className={`section-content flex gap-20 `}>
            <div className='section-content__news  lg:w-3/4  sm:w-full'>
              {loading ? <Loader /> : renderAllNews()}
            </div>

            <div
              className={`section-content__categories  lg:py-[40px]  min-[0px]:w-[100vw]  ${
                showFilters ? 'h-screen' : ''
              } z-[100] min-[0px]:top-0 min-[0px]:right-0 transition-all delay-75 lg:h-fit  lg:top-[120px]  duration-300 ease-linear min-[0px]:absolute lg:w-1/4 lg:sticky lg:z-0 lg:bg-[transparent] lg:max-w-none ${
                !showFilters ? 'max-w-[0px] overflow-hidden' : 'max-w-[100vw]'
              } flex justify-center`}
            >
              <Categories
                setShowFilter={setShowFilter}
                showFilters={showFilters}
              />
            </div>
          </div>
        </section>

        <section className='pagination flex selection mb-[100px] '>
          {news?.results && !loading ? (
            <Pagination
              pageCount={handlePageCount(news)}
              setState={setCategoryPageIndex}
              activePageIndex={handleActiveCategoryPageIndex(activeCategory)}
              slug={activeCategory}
            />
          ) : null}
        </section>
        <button
          onClick={() => {
            setShowFilter(true);
          }}
          className='lg:hidden filters-btn fixed w-[100vw] py-3 text-[#fff] bg-[#4044ee] top-[93vh] left-0'
        >
          Filter
        </button>
      </Container>
    </div>
  );
}

export default News;
