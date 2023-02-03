import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';

function Pagination({ pageCount, setState, activePageIndex }) {
  const dispatch = useDispatch();
  console.log(activePageIndex);
  console.log(pageCount);

  const handlePageClick = (event) => {
    dispatch(setState(event.selected));
  };

  return (
    <>
      <ReactPaginate
        initialPage={activePageIndex}
        breakLabel={
          <span className='border-2 border-[#DFE3E8] bg-[#fff] rounded-md px-[12px] py-[6px]'>
            ...
          </span>
        }
        nextLabel={
          <span className=' border-2 border-[#6366f1] bg-[#fff] rounded-md inline-flex items-center justify-center w-[30px] h-[30px]'>
            <span className='icon icon-next bg-[#fff]'></span>
          </span>
        }
        previousLabel={
          <span className=' border-2 border-[#6366f1] bg-[#fff] rounded-md inline-flex items-center justify-center w-[30px] h-[30px]'>
            <span className='icon icon-prev bg-[#fff]'></span>
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        className='flex text-xl items-center m-auto mt-[50px]'
        pageLinkClassName='bg-[#fff] text-[#6366f1] border-[#6366f1] rounded-md mx-1 inline-flex items-center justify-center w-[30px] h-[30px] border-2 '
        activeLinkClassName='border-2 border-[#6366f1 bg-[#6366f1]  text-[#fff]'
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
