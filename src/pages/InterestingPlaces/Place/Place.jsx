import { useEffect } from 'react';
import styles from './Place.module.css';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPlace } from '../../../store/api/placesSlice';

const Place = () => {
  const dispatch = useDispatch();
  const { place } = useSelector((state) => state.places);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPlace({ id: id }));
  }, []);

  return (
    <div className={styles.place}>
      <h1 className='text-2xl'>{place?.translations?.ru?.title}</h1>
      <div className={styles.place__card}>
        <div className={styles.place__card_top}>
          <div>
            <img src={place?.image} alt='' />
          </div>
          <div>
            <ul>
              <li>
                <p>Адрес</p>
                <p>{place?.translations?.ru?.address}</p>
              </li>
              <li>
                <p>Телефон</p>
                <p>{place?.phone_numbers}</p>
              </li>
              <li>
                <p>Режим работы</p>
                <p>{place?.translations?.ru?.working_time}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.place__card_bottom}>
          <h1 className='text-xl'>{place?.translations?.ru?.title}</h1>
          <p className='text-fst'>{place?.translations?.ru?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Place;
