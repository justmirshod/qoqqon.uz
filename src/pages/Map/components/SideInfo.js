import Information from './Information';
import { useSelector, useDispatch } from 'react-redux';
import { setAnimation, setMahallaId, setModal } from '../MapSlice';
import { qoqonMap } from '../helpers/qoqonMap';
import { latinToCyrillic } from '../../../hooks/useLatinToCrylic';

const SideInfo = () => {
  const { sector, modal } = useSelector((state) => state.map);
  const { activeLang } = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const getID = (id) => {
    dispatch(setMahallaId(id));
    dispatch(setModal(true));
    setTimeout(() => {
      dispatch(setAnimation(true));
    }, 15);
  };

  return (
    <div className='bg-white rounded-xl py-5 px-8'>
      {sector !== 0 ? (
        qoqonMap[sector - 1].mahalla.map((item, index) => (
          <h1
            id='mahalla'
            className={`text-xl border-b-2 border-gray-300 pb-1 last:border-b-0 mt-2 text-gray-500 cursor-pointer px-2 pt-1 rounded-md hover:bg-gray-50`}
            onMouseEnter={() => !modal && dispatch(setMahallaId(item.id))}
            onMouseOut={() => !modal && dispatch(setMahallaId(''))}
            key={index}
            onClick={() => getID(item.id)}
          >
            {activeLang === 'ўз' ? latinToCyrillic(item.name) : item.name}
          </h1>
        ))
      ) : (
        <Information />
      )}
    </div>
  );
};

export default SideInfo;
