import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNews } from '../../store/api/newsSlice.api';
import {
  useNavigate,
  createSearchParams,
  useSearchParams,
} from 'react-router-dom';

function News() {
  const { news, loading, success } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [page_size, setPageSize] = useState(10);

  useEffect(() => {
    dispatch(
      getAllNews({
        category: '',
        search: '',
        popular: 'null',
        page: 1,
        page_size: 10,
      })
    );
    if (searchParams.get('category')) {
      setQuery(searchParams.get('category'));
    }
    if (searchParams.get('search')) {
      setSearch(searchParams.get('search'));
    }
    if (searchParams.get('page')) {
      setPage(searchParams.get('page'));
    }
    if (searchParams.get('page_size')) {
      setPageSize(searchParams.get('page_size'));
    }
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const params = {
            category: query,
            search,
            page,
            page_size,
          };
          if (params.search === '') {
            delete params.search;
          }
          const options = {
            pathname: '/news',
            search: `?${createSearchParams(params)}`,
          };
          navigate(options, { replace: true });
        }}
      >
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default News;
