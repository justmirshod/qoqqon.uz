import { useEffect } from 'react';
import styles from './GeneralInfo.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { getHistoricalPlaces } from '../../store/api/placesSlice';
import history from '../../assets/history.webp';
import { Container } from '../../layouts';

const GeneralInfo = () => {
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.places);

  useEffect(() => {
    dispatch(getHistoricalPlaces());

    //eslint-disable-next-line
  }, []);

  console.log(info);

  return (
    <Container className=' my-10'>
      <div className={styles.general__info}>
        <div className={styles.general__info_wrapper}>
          <div className={styles.general__info__wrapper_left}>
            <h1 className='text-2xl'>{info?.translations?.uz?.title}</h1>
            <p>{info?.translations?.uz?.body}</p>
          </div>
          <div className={styles.general__info__wrapper_right}>
            <img src={info?.image} alt='' />
            <div className={styles.general__info__wrapper__right_statistics}>
              <h1 className='text-xl'>
                Статистика приросла населения в районе
              </h1>
              <div className={styles.general__info__wrapper__right_populations}>
                {info?.populations?.map((p) => (
                  <div
                    key={p?.id}
                    className={
                      styles.general__info__wrapper__right__populations_item
                    }
                  >
                    <p>{p?.translations?.uz?.year}</p>
                    <div
                      className={
                        styles.general__info__wrapper__right__populations__item_count
                      }
                    >
                      <p>{p?.translations?.uz?.population}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.general__info_bottom}>
          <h1 className='text-2xl text-center'>
            Сохранился в районе и сейчас в эксплуатации старинные постройки
          </h1>
          <div className={styles.general__info__bottom_places}>
            {info?.towns?.map((place) => (
              <div
                key={place.id}
                className={styles.general__info__bottom__places_item}
              >
                <h1 className='text-xl text-center'>
                  {place?.translations?.ru?.title}
                </h1>
                <div>
                  <div>
                    <img src={place?.old_image} alt='' />
                    <p>Старое состояние</p>
                  </div>
                  <div>
                    <img src={place?.new_image} alt='' />
                    <p>Новое состояние</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GeneralInfo;
