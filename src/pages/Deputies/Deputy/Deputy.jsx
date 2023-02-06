import { useEffect } from 'react';
import styles from './Deputy.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getDeputy } from '../../../store/api/deputySlice.api';

const Deputy = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { deputy } = useSelector((state) => state.deputy);

  useEffect(() => {
    dispatch(getDeputy({ id: params.deputy }));
  }, []);

  return (
    <div className={styles.deputy}>
      <h3 className='text-xl'>Депутаты районного Кенгаша</h3>
      <div className={styles.deputy__wrapper}>
        <div className={styles.deputy__wrapper_left}>
          <div className={styles.deputy__wrapper__left_top}>
            <div>
              <img src={deputy?.image} alt='' />
            </div>
            <div>
              <h5>{deputy?.translations?.ru?.full_name}</h5>
              <p>{deputy?.translations?.ru?.partiya}</p>
              <p>{deputy?.translations?.ru?.okrug}</p>
              <p>{deputy?.phone_number}</p>
            </div>
          </div>
          <div className={styles.deputy__wrapper__left_bottom}>
            <div>
              <p>Место рождения</p>
              <p>{deputy?.translations?.ru?.birthday_place}</p>
            </div>
            <div>
              <p>Оразование, специальность</p>
              <p>{deputy?.translations?.ru?.mutaxassisligi}</p>
            </div>
            <div>
              <p>Занимаемая должность</p>
              <p>{deputy?.translations?.ru?.lavozimi}</p>
            </div>
            <div>
              <p>Членство в постоянном комитете</p>
              <p>{deputy?.translations?.ru?.kommisiyaga_azoligi}</p>
            </div>
          </div>
        </div>
        <div className={styles.deputy__wrapper_right}>
          <img src={deputy?.okrug_image} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Deputy;
