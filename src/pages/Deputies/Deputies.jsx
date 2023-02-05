import { useEffect, useState } from 'react';
import styles from './Deputies.module.css';
import { replaceKrill } from '../../config/config';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pagination } from 'react-pagination-bar';

import { getDeputies } from '../../store/api/deputiesSlice.api';
import { Container } from '../../layouts';

const Deputies = () => {
  const dispatch = useDispatch();
  const { isLoading, deputies } = useSelector((state) => state.deputies);
  const { activeLang } = useSelector((state) => state.language);
  const [curPage, setCurPage] = useState(1);

  const handleChange = (pageNum) => {
    setCurPage(pageNum);
    dispatch(getDeputies({ page: pageNum }));
  };

  useEffect(() => {
    dispatch(getDeputies({ page: 1 }));
  }, []);

  return (
    <Container>
      <div className={styles.deputies}>
        <h3>Депутаты районного Кенгаша</h3>
        <div className={styles.deputies__wrapper}>
          {deputies?.results?.map((d) => (
            <Link
              to={`${replaceKrill(activeLang)}/kengash-deputies/${d?.id}`}
              key={d?.id}
            >
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
        <Pagination
          currentPage={curPage}
          itemsPerPage={deputies?.page_size}
          onPageChange={(pageNumber) => handleChange(pageNumber)}
          totalItems={deputies?.total}
          pageNeighbours={2}
          onlyPageNumbers={true}
        />
      </div>
    </Container>
  );
};

export default Deputies;
