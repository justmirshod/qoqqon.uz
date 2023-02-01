import { Link } from 'react-router-dom';
import { Container } from '../../layouts';

const Navbar = () => {
  return (
    <div>
      <Container>
        <div className='flex items-center'>
          <Link to='/' className='flex items-center'>
            <img
              src=''
              className='inline-block w-[80px] h-[80px] border'
              alt=''
            />
            <h1 className=''>Toshkent shahar Mirobod tumani hokimligi</h1>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
