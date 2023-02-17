import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGovernor } from '../../store/api/singleGovernorSlice.api';
import Container from '../../layouts/Container/Container';
import Loader from '../../components/Loader/Loader';
import { latinToCyrillic } from '../../hooks/useLatinToCrylic';
import generalTranslations from '../../translations/general.json';
import translations from '../Governors/governor.json';

function SingleGovernor(props) {
  const { governor, governorLoading } = useSelector(
    (state) => state.singleGovernor
  );
  const { activeLang } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (governor.id) return;
    dispatch(fetchGovernor(id));

    //eslint-disable-next-line
  }, []);

  const renderExperience = (array) => {
    if (array.lengths === 0) {
      return <h1>Hali tajribaga ega emas</h1>;
    }
    return array.map((item) => {
      return (
        <div key={item.id} className='single-experience flex'>
          <p className='date mb-1'>
            <span className='text-[teal]'>
              {item.from_date.split('-')[0]} - {item.to_date.split('-')[0]}:
            </span>
            <span className='ml-1 text-[#33354d] '>
              {activeLang === 'ўз'
                ? latinToCyrillic(item?.translations?.uz?.name)
                : item?.translations[activeLang]?.name}
            </span>
          </p>
        </div>
      );
    });
  };

  if (governorLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }
  if (!governor.id) return;

  return (
    <Container className='mt-10'>
      <h1 className='page-route text-[#797f8c] my-[20px] text-[18px] flex items-center'>
        <Link to={'/'}>{generalTranslations.home[activeLang]}</Link>
        <i class='fa-solid fa-angle-right mx-2'></i>
        <Link to={'/hokim-orinbosarlari'}>
          {translations.asistants[activeLang]}
        </Link>
        <i class='fa-solid fa-angle-right mx-2'></i>
        <div className='inline-block'>
          {activeLang === 'ўз'
            ? latinToCyrillic(governor?.translations?.uz?.full_name)
            : governor?.translations[activeLang]?.full_name}
        </div>
      </h1>
      <div className='single-governor'>
        <div className='single-governor__top-side flex gap-10 min-[0px]:flex-col sm:flex-row'>
          <div className='image-box min-w-[200px] min-[0px]:w-full sm:w-1/3 '>
            <img className='w-[100%]' src={governor.image} alt='' />
          </div>
          <div className='details-box min-[0px]:w-full sm:w-[2/3]'>
            <p className='text-[24px]  text-[#33354d]'>
              {activeLang === 'ўз'
                ? latinToCyrillic(governor?.translations?.uz?.full_name)
                : governor?.translations[activeLang]?.full_name}
            </p>
            <p className='department  mt-3 text-[#575a74] leading-6 text-[16px]'>
              {activeLang === 'ўз'
                ? latinToCyrillic(governor?.translations?.uz?.about)
                : governor?.translations[activeLang]?.about}
            </p>
            <div className='contact-details mt-3 text-[#838e91] min-[0px]:hidden sm:block'>
              <p className='leading-5'>
                Email:{' '}
                <span className='text-[#003b49] ml-3'>{governor?.email}</span>
              </p>
              <p>
                Telefon:{' '}
                <span className='text-[#003b49] ml-3'>
                  {governor?.phone_number}
                </span>
              </p>
            </div>
            <div className='experince-box mt-3 min-[0px]:hidden md:block'>
              {renderExperience(governor.experiences)}
            </div>
          </div>
        </div>
        <div className='bottom-side'>
          <div className='contact-details mt-3 sm:hidden text-[#838e91]'>
            <p className='leading-5'>
              Email:{' '}
              <span className='text-[#003b49] ml-3'>{governor?.email}</span>
            </p>
            <p>
              Telefon:{' '}
              <span className='text-[#003b49] ml-3'>
                {governor?.phone_number}
              </span>
            </p>
          </div>
          <div className='experince-box mt-3 md:hidden'>
            {renderExperience(governor.experiences)}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SingleGovernor;
