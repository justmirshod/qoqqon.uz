import { useSelector } from 'react-redux';

import MiniNavbarItem from './MiniNavbarItem';
import routes from '../../translations/routes.json';
import { useEffect } from 'react';
import { v4 } from 'uuid';

export default function MiniNavbar({ show, setShow }) {
  const { activeLang } = useSelector((state) => state.language);

  return (
    <>
      <div
        className={`w-screen h-screen ${
          show ? '' : '-translate-y-full'
        } duration-500 bg-[#fff] z-50 top-0 absolute right-0 overflow-y-scroll md:overflow-y-hidden`}
      >
        <div className='relative'>
          <ul className='grid grid-cols-1 md:grid-cols-2 w-full bg-[#fff] lg:px-10 py-14'>
            {routes[activeLang].map((item) => (
              <MiniNavbarItem key={v4()} {...item} />
            ))}
          </ul>
          <div
            className='absolute top-7 right-7 cursor-pointer'
            onClick={() => {
              setShow(false);
              setTimeout(() => {
                document.body.style.overflow = 'initial';
              }, 100);
            }}
          >
            <i className='fa-solid fa-xmark text-2xl'></i>
          </div>
        </div>
      </div>
    </>
  );
}
