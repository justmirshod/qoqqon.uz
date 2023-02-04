import { useEffect } from 'react';
import styles from './InterestingPlaces.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { getInterestingPlaces } from '../../store/api/placesSlice';
import { getCategories } from '../../store/api/categoriesSlice';
import SwitchSelector from '../../components/SwitchSelector/SwitchSelector';
import { Link } from 'react-router-dom';

const InterestingPlaces = () => {
  const dispatch = useDispatch();
  const { interestingPlaces } = useSelector((state) => state.places);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getInterestingPlaces());
    dispatch(getCategories());
  }, []);

  return (
    <div className={styles.interesting__places}>
      <h1 className='text-2xl'>Интересные места</h1>
      {/* <SwitchSelector options={categories} /> */}
      <div className={styles.interesting__places_wrapper}>
        {interestingPlaces?.map((p) => (
          <Link key={p?.id} to={`/interesting-places/${p?.id}`}>
            <div className={styles.interesting__places__wrapper_item}>
              <div>
                <img src={p?.image} alt='' />
              </div>
              <div>
                <h1 className='text-xl'>{p?.translations?.ru?.title}</h1>
                <p className='mt-4 text-fst'>{p?.translations?.ru?.address}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InterestingPlaces;
