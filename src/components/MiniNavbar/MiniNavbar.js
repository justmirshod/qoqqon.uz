import { useSelector } from 'react-redux';

import MiniNavbarItem from './MiniNavbarItem';
import routes from '../../translations/routes.json';
import { useEffect } from 'react';

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
          <ul className='grid grid-cols-1 md:grid-cols-2 w-full bg-[#fff] lg:px-10 py-8'>
            {routes[activeLang].map((item) => (
              <MiniNavbarItem {...item} />
            ))}
          </ul>
          <div
            className='absolute top-4 right-5  cursor-pointer'
            onClick={() => {
              setShow(false);
              setTimeout(() => {
                document.body.style.overflow = 'initial';
              }, 100);
            }}
          >
            <i class='fa-solid fa-xmark text-2xl'></i>
          </div>
        </div>
      </div>
    </>
  );
}
