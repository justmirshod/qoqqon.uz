import { Navbar } from '../../components';
import { useEffect } from 'react';
import { useHttp } from '../../hooks/useHttp';

const Home = () => {
  const { request } = useHttp();

  return <Navbar />;
};

export default Home;
