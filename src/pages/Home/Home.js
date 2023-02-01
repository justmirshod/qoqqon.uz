import { Navbar } from '../../components';
import { useEffect } from 'react';
import { useHttp } from '../../hooks/useHttp';

const Home = () => {
  const { request } = useHttp();
  useEffect(() => {
    request(
      'GET',
      'https://abdusamad4803.pythonanywhere.com/api/v1/department/hokim/'
    ).then((data) => console.log(data));
  }, []);

  return <Navbar />;
};

export default Home;
