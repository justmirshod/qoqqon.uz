import { useDispatch, useSelector } from 'react-redux';
import { setAnim, setSector } from '../MapSlice';

const sectors = ['Hammasi', '1-sektor', '2-sektor', '3-sektor', '4-sektor'];

const Mapnav = () => {
  const { sector } = useSelector((state) => state.map);

  const dispatch = useDispatch();

  return (
    <div className='mb-5 flex flex-wrap justify-center'>
      {sectors.map((item, index) => (
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
          {item}
        </button>
      ))}
    </div>
  );
};

export default Mapnav;
