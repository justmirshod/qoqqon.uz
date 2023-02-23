import { useSelector } from 'react-redux';

const Namebox = ({ children }) => {
  const { x, y } = useSelector((state) => state.map.coordinates);

  return (
    <div
      style={{ top: y, left: x }}
      className='py-2 px-5 bg-gray-900 md:flex hidden absolute text-white border-2 border-white rounded-md font-bold'
    >
      {children}
    </div>
  );
};

export default Namebox;
