import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGovernors } from '../../store/api/governorsSlice.api';
import { Link } from 'react-router-dom';
import { Container } from '../../layouts';
import Loader from '../../components/Loader/Loader';
import { onlineUrl } from '../../config/config';
import { latinToCyrillic } from '../../hooks/useLatinToCrylic';
import generalTranslations from '../../translations/general.json';
import translations from './governor.json';

function Governors() {
  const dispatch = useDispatch();
  const { governors, governorsLoading } = useSelector(
    (state) => state.governors
  );
  const { activeLang } = useSelector((state) => state.language);

  useEffect(() => {
    if (governors.results) return;
    dispatch(fetchGovernors());

    //eslint-disable-next-line
  }, []);

  const renderGovernors = (array) => {
    return array?.map((item) => {
      const { id, translations, image } = item;
      return (
        <div
          key={id}
          className='single-governor grid grid-cols-1 md:grid-cols-3 gap-5 bg-[#fff] p-5 rounded-md shadow-lg hover:shadow-2xl'
        >
          <div className='image-box col-span-1'>
            <img className='w-full rounded-md' src={image} alt='' />
          </div>

          <div className='content-box col-span-1 md:col-span-2 flex flex-col justify-between pb-3'>
            <div className='texts'>
              <p className='text-[20px]  text-[#33354d] mt-4 hover:text-[#6366f1] cursor-pointer'>
                {activeLang === 'ўз'
                  ? latinToCyrillic(translations?.uz?.full_name)
                  : translations[activeLang]?.full_name}
              </p>
              <p className='department min-h-[72px] mt-3 text-[#575a74] leading-6 text-[14px]'>
                {activeLang === 'ўз'
                  ? latinToCyrillic(translations?.uz?.department)
                  : translations[activeLang]?.department}
              </p>
            </div>
            <div className='buttons flex gap-4 justify-between items-center pr-3'>
              <a href={onlineUrl} target='_blank' rel='noreferrer'>
                <button className='p-2 hover:bg-blue-600 hover:text-[#fff] border transition-colors duration-100 ease-linear border-blue-600 rounded-md'>
                  {generalTranslations.booked[activeLang]}
                </button>
              </a>

              <Link
                to={`/hokim-orinbosarlari/${id}/${translations?.uz?.full_name}`}
                className='group text-blue-600'
              >
                {generalTranslations.detail[activeLang]}
                <i className='group-hover:translate-x-1 transition-transform duration-100 ease-linear fa-solid fa-arrow-right-long '></i>
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };

  if (governorsLoading) {
    return <Loader />;
  }

  if (!governors.results) return;

  return (
    <Container>
      <div className='governors'>
        <h1 className='page-route text-[#797f8c] my-[20px] text-[18px]'>
          <Link to={'/'}>{generalTranslations.home[activeLang]}</Link>
          <i class='fa-solid fa-angle-right mx-2'></i>
          <Link to={'/hokim-orinbosarlari'}>
            {translations.asistants[activeLang]}
          </Link>
        </h1>

        <h1 className='text-2xl'>{translations.asistants[activeLang]}</h1>
        <div className='governors-list grid grid-col-1 lg:grid-cols-2 mt-5 gap-10'>
          {renderGovernors(governors.results)}
        </div>
      </div>
    </Container>
  );
}

export default Governors;
