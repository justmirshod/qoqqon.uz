import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavLinks from './NavLinks';

import down_icon from '../../assets/icons/angle-down.png';
import down_icon_hover from '../../assets/icons/down-arrow.png';

const NavbarRoutes = ({ item }) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <li
      onMouseOver={() => setShowLinks(true)}
      onMouseOut={() => setShowLinks(false)}
      className={`mr-6 cursor-pointer relative ${item.name} hover:text-blue-600`}
    >
      {item.links.length === 1 ? (
        <Link to={item.links[0].link}>{item.name}</Link>
      ) : (
        <div className='duration-200'>
          <p className={`${item.name} flex items-center`}>
            <span>{item.name}</span>
            <img
              src={showLinks ? down_icon : down_icon_hover}
              className={`w-[20px] h-[20px] mt-[1px] ml-1`}
              alt=''
            />
          </p>
          {showLinks ? (
            <div
              className={`absolute w-[300px] overflow-hidden bg-slate-300] bg-[#fff] p-4 rounded-lg shadow-lg pt-4`}
            >
              {item.links.map((linkItem) => (
                <div
                  key={linkItem.link}
                  className='my-2 text-[#575a74] hover:text-blue-600'
                >
                  <Link to={linkItem.link}>{linkItem.name}</Link>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      )}

      {/* {showLinks ? (
        
      ) : null} */}
    </li>
  );
};
export default NavbarRoutes;
