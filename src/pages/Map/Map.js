import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// components
import Namebox from './components/Namebox';
import Mapnav from './components/Mapnav';

// helpers
import changeView from './helpers/changeView';

// react-redux
import { useSelector } from 'react-redux';
import { setAnimation, setMahallaId, setModal, setX, setY } from './MapSlice';
import InfoModal from './components/InfoModal';
import Sector from './components/Sector';
import SideInfo from './components/SideInfo';
import { Container } from '../../layouts';

const Map = () => {
  const { sector, modal, mahallaName } = useSelector((state) => state.map);

  const dispatch = useDispatch();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (modal && !e.target.id) {
        dispatch(setAnimation(false));
        dispatch(setMahallaId(''));
        setTimeout(() => {
          dispatch(setModal(false));
        }, 200);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [modal]);

  return (
    <div className='bg-gray-100 py-10'>
      <Container className='lg:grid lg:grid-cols-5 flex flex-col gap-10 md:px-0 px-2'>
        {modal ? <InfoModal /> : null}
        <div className='col-span-3'>
          <div className='bg-white rounded-xl flex items-center flex-col py-5 md:h-[700px] h-[420px]'>
            <Mapnav />
            {mahallaName !== '' ? <Namebox>{mahallaName}</Namebox> : null}
            <svg
              viewBox={changeView(sector)}
              className={`rounded-xl w-full h-full px-2`}
              onMouseMove={(e) => {
                dispatch(setX(e.clientX + 10));
                dispatch(setY(e.clientY + 20));
              }}
            >
              <Sector />
            </svg>
          </div>
        </div>
        <div className='col-span-2'>
          <SideInfo />
        </div>
      </Container>
    </div>
  );
};
export default Map;
