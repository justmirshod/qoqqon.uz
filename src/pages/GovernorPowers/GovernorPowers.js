import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, MiniContainer } from '../../layouts';
import { fetchGovernorPowers } from './power_slice';
import translit from 'latin-to-cyrillic';
import { replaceKrill } from '../../config/config';
import { Link } from 'react-router-dom';
import { Contact } from '../../components';
export default function GovernorPowers() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.power);
  const { activeLang } = useSelector((state) => state.language);

  useEffect(() => {
    dispatch(fetchGovernorPowers());
  }, []);

  return (
    <div className=''>
      <MiniContainer>
        <div className='flex items-center text-[#9e9c9c] text-lg my-5'>
          <Link to={`${replaceKrill(activeLang)}/`} className=''>
            Bosh sahifa
          </Link>
          <i class='fa-solid fa-angle-right text-sm mt-1 mx-2'></i>
          <p>Hokim vakolatlari</p>
        </div>
        {loading ? (
          'Loading'
        ) : (
          <div className='text-lg leading-relaxed mb-10'>
            {activeLang === 'ўз'
              ? data?.translations?.uz?.text.replace(/<[^>]*>/g, '')
              : data?.translations[activeLang]?.text.replace(/<[^>]*>/g, '')}
            {/* {data?.translations?.uz?.text} */}
          </div>
        )}
      </MiniContainer>
      <Contact />
    </div>
  );
}
