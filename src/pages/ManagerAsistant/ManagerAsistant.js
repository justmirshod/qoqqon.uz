import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchManager } from './managers_slice';

export default function ManagerAsistant() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchManager());
  }, []);
  return <div className=''>hello world</div>;
}
