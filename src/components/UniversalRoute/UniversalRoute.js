import { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLang } from '../Navbar/navbar_slice';

export default function UniversalRoute({ children, path, element, item }) {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const langPathName = location.pathname.split('/')[1];
    if (langPathName.length !== 2) {
      dispatch(setLang('ўз'));
    } else {
      dispatch(setLang(langPathName));
    }
  }, [location.pathname]);

  return <>{children}</>;
}
