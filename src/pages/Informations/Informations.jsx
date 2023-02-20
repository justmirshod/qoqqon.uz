import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MiniContainer } from '../../layouts';
import { fetchInformations } from './information_slice';
import { replaceKrill } from '../../config/config';
import { Link } from 'react-router-dom';
import { Contact } from '../../components';
import Loader from '../../components/Loader/Loader';
import generalTranslations from '../../translations/general.json';
import translations from './informations.json';
import { latinToCyrillic } from '../../hooks/useLatinToCrylic';

export default function Informations() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.information);
  const { activeLang } = useSelector((state) => state.language);
  const texts = useRef();

  useEffect(() => {
    if (data.id) return;
    dispatch(fetchInformations());

    //eslint-disable-next-line
  }, []);

  if (loading) <Loader />;
  if (!data.id) return;

  return (
    <div className=''>
      <MiniContainer>
        <div className='flex items-center text-[#9e9c9c] text-lg my-5'>
          <Link to={`${replaceKrill(activeLang)}/`} className=''>
            {generalTranslations.home[activeLang]}
          </Link>
          <i class='fa-solid fa-angle-right text-sm mt-1 mx-2'></i>
          <p>{translations.powers[activeLang]}</p>
        </div>
        <h1 className='text-3xl my-4'>{translations.powers[activeLang]}</h1>
        {loading ? (
          'Loading'
        ) : (
          <div
            className='text-lg mb-10 text-gray-600 leading-loose'
            ref={texts}
            dangerouslySetInnerHTML={{
              __html:
                activeLang === 'ўз'
                  ? data?.translations.uz?.text
                  : data?.translations[activeLang]?.text,
            }}
          ></div>
        )}
      </MiniContainer>
      <Contact />
    </div>
  );
}
