import { Link } from 'react-router-dom';
import { Container } from '../../layouts';
import logo_icon from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <div>
      <Container>
        <div className='flex items-center'>
          <Link to='/' className='flex items-center'>
            <img
              src={logo_icon}
              className='inline-block w-[80px] h-[80px]'
              alt=''
            />
            <p className=''>Toshkent shahar Mirobod tumani hokimligi</p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
