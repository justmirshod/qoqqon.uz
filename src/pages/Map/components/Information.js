import sideInfo from '../../../translations/map.json';
import { useSelector } from 'react-redux';

const info = [
  { name: 'Maydon', data: '1940' },
  { name: 'Binolar', data: '3400' },
  { name: 'Kvartiralar', data: '24000' },
  { name: "Ko'chalar", data: '1242' },
  { name: 'Aholi', data: '54000' },
  { name: "Do'konlar", data: '1423' },
  { name: 'Ovqatlanish joylari', data: '1221' },
];

const Information = () => {
  const { activeLang } = useSelector((state) => state.language);
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-5'>
        {sideInfo.map.translations[activeLang]}
      </h1>
      {sideInfo.sideInfo.map((item, index) => (
        <div
          className='flex items-center justify-between mb-3 pb-1 border-b-2 text-xl'
          key={index}
        >
          <h1 className='text-gray-500 '>{item.translations[activeLang]}</h1>
          <span>{item.data}</span>
        </div>
      ))}
    </div>
  );
};

export default Information;
