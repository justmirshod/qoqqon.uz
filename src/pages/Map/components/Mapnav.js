import { useDispatch, useSelector } from 'react-redux';
import { setAnim, setSector } from '../MapSlice';
import data from '../../../translations/map.json';

const sectors = ['Hammasi', '1-sektor', '2-sektor', '3-sektor', '4-sektor'];

const Mapnav = () => {
  const { sector } = useSelector((state) => state.map);
  const { activeLang } = useSelector((state) => state.language);

  const dispatch = useDispatch();

  return (
    <div className='mb-5 flex flex-wrap justify-center'>
      {data.mapnav.map((item, index) => (
        <button
          key={index}
          disabled={index === sector}
          className={`rounded-xl md:py-2 py-1 px-4 md:mx-2 mx-1 my-1 font-medium duration-150 ${
            sector === index
              ? 'bg-gray-700 text-white'
              : 'bg-gray-300 backdrop-blur-xl'
          }`}
          onClick={() => {
            dispatch(setAnim(false));
            dispatch(setSector(index));
          }}
        >
          {item[activeLang]}
        </button>
      ))}
    </div>
  );
};

export default Mapnav;
