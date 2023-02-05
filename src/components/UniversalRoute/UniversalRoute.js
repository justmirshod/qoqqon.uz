import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLang } from '../Navbar/navbar_slice';

export default function UniversalRoute({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const langPathName = location.pathname.split('/')[1];
    console.log(langPathName);
    if (langPathName.length !== 2) {
      dispatch(setLang('ўз'));
    } else {
      dispatch(setLang(langPathName));
    }
  }, [location.pathname]);

  return <>{children}</>;
}
