import {
  YMaps,
  Map,
  Placemark,
  Polyline,
  GeolocationControl,
} from '@pbe/react-yandex-maps';
import { Container } from '../../layouts';
export default function Contact() {
  const defaultState = {
    center: [41.3560069, 69.2044714],
    zoom: 18,
    controls: ['zoomControl', 'fullscreenControl'],
  };
  return (
    <div className='bg-[#fff]'>
      <div className='grid md:grid-cols-7 grid-cols-1'>
        <div className='md:col-span-3 col-span-1 pb-10 md:pt-32 pt-10 md:px-[70px] px-10'>
          <h1 className='text-3xl mb-10'>Bog'lanish</h1>
          <ul className='flex flex-col'>
            <li className='flex items-center text-xl text-gray-800  mb-8'>
              <i class='fa-solid fa-location-dot mr-3'></i>
              Farg'ona viloyati Qo'qon shahri 12-uy
            </li>
            <li className='flex items-center text-xl text-gray-800  mb-8'>
              <i class='fa-regular fa-envelope mr-3'></i>
              qoqon@umail.uz
            </li>
            <li className='flex items-center text-xl text-gray-800  mb-8'>
              <i class='fa-solid fa-phone mr-3'></i>
              +998 71 233 29 86
            </li>
            <li className='flex items-center text-xl text-gray-800 mb-8'>
              <i class='fa-regular fa-clock mr-3'></i>
              Dushanba-Juma 09:00 -18:00
            </li>
          </ul>
        </div>
        <div className='md:col-span-4 col-span-1'>
          <YMaps>
            <Map
              defaultState={defaultState}
              modules={['control.ZoomControl', 'control.FullscreenControl']}
              width='100%'
              height='600px'
            >
              <Placemark
                geometry={[41.3560069, 69.2044714]}
                options={{
                  iconImageHref: '../../assets/icons/512x512bb.jpg',
                }}
              />
              <Polyline />
              <GeolocationControl options={{ float: 'left' }} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
}
