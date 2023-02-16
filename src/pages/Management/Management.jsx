import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//Components
import { Container } from '../../layouts';
import Leader from './Leader/Leader';
import Governors from '../Governors/Governors';

function Management() {
  return (
    <Container>
      <div className='management'>
        <h1 className='page-route text-[#797f8c] my-[20px] text-[18px]'>
          <Link to={'/'}>Bosh sahifa </Link>
          <span>{'>'}</span>
          <Link to={'/management'}> Rahbariyat</Link>
        </h1>
        <div className='management-leader'>
          <Leader />
        </div>
      </div>
    </Container>
  );
}

export default Management;
