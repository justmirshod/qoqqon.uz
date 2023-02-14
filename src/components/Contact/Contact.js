import FullMap from '../FullMap/FullMap';
import { useSelector } from 'react-redux';
import translation from './contact.json';
export default function Contact() {
  const { activeLang } = useSelector((state) => state.language);

  const { connection, date, place } = translation;

  return (
    <div className='bg-[#fff]'>
      <div className='grid md:grid-cols-7 grid-cols-1'>
        <div className='md:col-span-3 col-span-1 md:flex px-10 md:px-16 py-10 md:py-0 md:flex-col md:justify-center'>
          <h1 className='text-3xl mb-10'>{connection[activeLang]}</h1>
          <ul className='flex flex-col'>
            <li className='flex items-center text-xl text-gray-800  mb-8'>
              <i class='fa-solid fa-location-dot mr-3'></i>
              {place[activeLang]}
            </li>
            <li className='flex items-center text-xl text-gray-800  mb-8'>
              <i class='fa-regular fa-envelope mr-3'></i>
              qoqon@umail.uz
            </li>
            <li className='flex items-center text-xl text-gray-800  mb-8'>
              <i class='fa-solid fa-phone mr-3'></i>
              +998 91 136 05 58
            </li>
            <li className='flex items-center text-xl text-gray-800 mb-8'>
              <i class='fa-regular fa-clock mr-3'></i>
              {date[activeLang]} 09:00 -18:00
            </li>
          </ul>
        </div>
        <div className='md:col-span-4 col-span-1 relative'>
          <FullMap />
        </div>
      </div>
    </div>
  );
}
