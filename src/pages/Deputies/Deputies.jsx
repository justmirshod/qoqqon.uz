import { useEffect } from 'react';
import styles from './Deputies.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'react-bootstrap';

import { getDeputies } from '../../store/api/deputiesSlice.api';
import { Link } from 'react-router-dom';

const Deputies = () => {
  const dispatch = useDispatch();
  const { isLoading, deputies } = useSelector((state) => state.deputies);
  const items = [];

  for (
    let number = 1;
    number <= deputies?.total / deputies?.page_size;
    number++
  ) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === deputies?.page}
        onClick={() => dispatch(getDeputies({ page: number }))}
      >
        {number}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    dispatch(getDeputies({ page: 1 }));
  }, []);

  return (
    <div className={styles.deputies}>
      <h3>Депутаты районного Кенгаша</h3>
      <div className={styles.deputies__wrapper}>
        {deputies?.results?.map((d) => (
          <Link to={`/kengash-deputies/${d?.id}`} key={d?.id}>
            <div className={styles.deputies__wrapper_item}>
              <div className={styles.deputies__wrapper__item_img}>
                <img src={d?.image} alt='' />
              </div>
              <div className={styles.deputies__wrapper__item_info}>
                <h5>{d?.translations?.ru?.full_name}</h5>
                <p>{d?.translations?.ru?.partiya}</p>
                <p>{d?.translations?.ru?.okrug}</p>
                <p>{d?.phone_number}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default Deputies;
