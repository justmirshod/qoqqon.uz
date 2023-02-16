//hooks
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//extra libraries
import { v4 } from 'uuid';

//slices
import { fetchManager } from './managers_slice';

//layouts
import { Container } from '../../layouts';

//helpers
import { replaceKrill } from '../../config/config';
import ManagerAsistantItem from './ManagerAsistantItem';

export default function ManagerAsistant() {
  const dispatch = useDispatch();

  //state data
  const { activeLang } = useSelector((state) => state.language);
  const { data, loading } = useSelector((state) => state.managerAsistants);

  useEffect(() => {
    dispatch(fetchManager());
  }, []);
  return (
    <div className='py-10'>
      <Container>
        <div className='flex items-center text-[#9e9c9c] text-lg my-5'>
          <Link to={`${replaceKrill(activeLang)}/`} className=''>
            Bosh sahifa
          </Link>
          <i className='fa-solid fa-angle-right text-sm mt-1 mx-2'></i>
          <p>Hokim yordamchilari</p>
        </div>
        {loading ? (
          'Loading...'
        ) : (
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
            {data?.results?.map((item) => (
              <ManagerAsistantItem key={v4()} {...item} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
