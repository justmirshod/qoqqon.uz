import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategories,
  setActiveCategory,
  setCategoryPageIndex,
  setQuery,
} from '../../store/api/categoriesSlice.api';

function Categories({ setShowFilter, showFilters }) {
  const { categories, loadingCat, activeCategory } = useSelector(
    (state) => state.newsCategories
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (categories.results) return;
    dispatch(getAllCategories());

    //eslint-disable-next-line
  }, []);

  const renderCategories = (categories) => {
    return categories?.results?.map((item) => {
      const catClass = classNames(
        'text-[14px] font-thin mb-1 cursor-pointer hover:text-[#6366f1] ',
        {
          'text-[#6366f1]': item.slug === activeCategory,
        }
      );
      return (
        <p
          onClick={() => {
            dispatch(setActiveCategory(item.slug));
          }}
          key={item.id}
          className={catClass}
        >
          {item?.translations?.uz?.name}
        </p>
      );
    });
  };

  if (loadingCat) return <p>loading</p>;

  return (
    <div
      className={`categories min-[0px]:w-full max-h-[100vh] overflow-auto lg:h-fit transition-opcatiy duration-75 ease-linear ${
        showFilters ? 'min-[0px]:bg-[#000000a6]' : 'min-[0px]:bg-[#000000]'
      } lg:bg-[transparent]`}
    >
      <div className='overflow-box min-[0px]:bg-[#fff] max-h-full overflow-auto min-[0px]:h-screen lg:bg-[transparent] min-[0px]:p-5 lg:p-0 max-w-[332px] ml-auto lg:h-fit'>
        <div className='lg:hidden sidebar-header flex justify-between items-center mb-4'>
          <p>Filters</p>
          <i
            onClick={() => setShowFilter(false)}
            className='fa-solid fa-close cursor-pointer'
          ></i>
        </div>
        <div className='categories-search relative text-[#565973] '>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.target);

              dispatch(setQuery(data.get('query')));
              dispatch(
                setCategoryPageIndex({ slug: activeCategory, index: 0 })
              );
            }}
          >
            <input
              className='bg-[transparent] border rounded-md border-[#e2e5f1]  focus:outline-none  focus:shadow-searchShadow focus:border-[#6366f159] text-[14px] px-2 py-3  pr-9  w-full transition-shadow duration-125 delay-74 ease-linear'
              type='text'
              placeholder='Qidiruv'
              name='query'
            />
          </form>
          <button type='submit' className='inline-block'>
            <i className='fa-solid fa-search absolute top-[18px] right-[12px] cursor-pointer'></i>
          </button>
        </div>
        <div className='categories-list mt-5 p-4 pt-6 border rounded-md border-[#e2e5f1]'>
          <p className='section-header pb-4 text-[22px] '>Kategoriyalar</p>

          {renderCategories(categories)}
        </div>
        <div className='social-links mt-5 p-4 pt-6 border rounded-md border-[#e2e5f1]'>
          <p className='section-header pb-4 text-[22px] '>
            Biz bilan bog'laning
          </p>
          <div className='socials flex items-center gap-3 '>
            <div className='icon-wrapper flex items-center justify-center p-2 bg-[#e0e4f0] rounded-sm hover:bg-[#b30734] cursor-pointer'>
              <span className='icon icon-instagram'></span>
            </div>
            <div className='icon-wrapper flex items-center justify-center p-2 bg-[#e0e4f0] rounded-sm hover:bg-[blue]  cursor-pointer'>
              <span className='icon icon-linkedin'></span>
            </div>
            <div className='icon-wrapper flex items-center justify-center p-2 bg-[#e0e4f0] rounded-sm hover:bg-blue-700  cursor-pointer'>
              <span className='icon icon-facebook'></span>
            </div>
            <div className='icon-wrapper flex items-center justify-center p-2 bg-[#e0e4f0] rounded-sm hover:bg-[lightblue]  cursor-pointer'>
              <span className='icon icon-telegram'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
