import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function MiniNavbarItem({ name, links }) {
  return (
    <>
      <div className='col-span-1 py-4 sm:py-6 px-4'>
        <h1 className='cursor-default text-center mb-2 text-lg'>{name}</h1>
        <div className={`w-full bg-gray-100 rounded-xl px-4 py-3`}>
          {links.map((item) => (
            <Link
              to={item.link}
              className='text-[#717171] hover:text-blue-600 cursor-pointer block my-3'
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
    // <li>
    //   <h1>{name}</h1>
    //   {links.map((item) => (
    //     <p>{item}</p>
    //   ))}
    // </li>
  );
}
