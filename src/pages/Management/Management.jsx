import React from 'react';
import { Container } from '../../layouts';
import { Link } from 'react-router-dom';

function Management(props) {
  return (
    <Container>
      <h1 className='page-route text-[#797f8c] my-[20px] text-[18px]'>
        <Link to={'/'}>Bosh sahifa </Link>
        <span>{'>'}</span>
        <Link to={'/management'}> Rahbariyat</Link>
      </h1>
    </Container>
  );
}

export default Management;
