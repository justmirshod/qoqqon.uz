import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import generalTranslations from '../../translations/general.json';
import translation from './Leader/leader.json';

//Components
import { Container } from '../../layouts';
import Leader from './Leader/Leader.jsx';
import Governors from '../Governors/Governors';

function Management() {
  const { activeLang } = useSelector((state) => state.language);

  return (
    <Container>
      <div className='management'>
        <h1 className='page-route text-[#797f8c] my-[20px] text-[18px] flex items-center'>
          <Link to={'/'}>{generalTranslations.home[activeLang]}</Link>
          <i class='fa-solid fa-angle-right mx-2'></i>
          <Link to={'/management'}>{translation.management[activeLang]}</Link>
        </h1>
        <div className='management-leader'>
          <Leader />
        </div>
      </div>
    </Container>
  );
}

export default Management;
