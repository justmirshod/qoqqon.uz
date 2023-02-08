import { useEffect, memo } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector, useDispatch } from 'react-redux';
import { getMahallaInfo } from '../MapSlice';

const infoData = [
  { name: 'population', data: 'Aholi' },
  { name: 'area', data: 'Maydon' },
  { name: 'apartments', data: 'Turar joylar' },
  { name: 'streets', data: "Ko'chalar" },
];

const extraInfo = [
  { name: 'phone', logo: 'phone' },
  { name: 'location', logo: 'location' },
];

const InfoModal = () => {
  const { animation, mahallaId, mahallaInfo } = useSelector(
    (state) => state.map
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMahallaInfo(mahallaId));
  }, [mahallaId]);

  const { loading, data } = mahallaInfo;

  return (
    <div
      id='infoModal'
      className={`absolute md:mt-0 mt-28 left-1/2 duration-200 shadow-2xl md:w-[600px] w-[80%] md:h-[380px] z-10 ${
        animation ? 'top-1/2 opacity-100' : 'top-[55%] opacity-0'
      }  rounded-xl bg-gray-300/[0.7] -translate-x-1/2 -translate-y-1/2 backdrop-blur-md`}
    >
      <span className='icon icon-cross bg-red-600 absolute top-2 right-2 cursor-pointer z-10'></span>
      <div
        id='modal'
        className='md:grid md:grid-cols-5 flex flex-col p-8 gap-5'
      >
        <div id='modal' className='col-span-2'>
          {loading ? (
            <Skeleton
              baseColor='#A8AEB6'
              highlightColor='#DEE1E5'
              className='h-[240px] w-full my-1 opacity-70 border-2 rounded-xl'
              borderRadius='20px'
            />
          ) : data?.image ? (
            <img
              id='modal'
              className='rounded-md w-full max-h-[240px]'
              src={data?.image}
              alt='img'
            />
          ) : (
            <div
              id='modal'
              className='w-full h-[240px] flex justify-center flex-col items-center bg-gray-300/[0.4] border-2 border-gray-400 rounded-md'
            >
              <span
                id='modal'
                className='icon icon-not-found bg-gray-500'
              ></span>
              <h1 id='modal' className='text-red-900/[0.5] mt-5 uppercase'>
                Image not found
              </h1>
            </div>
          )}
        </div>
        <div id='modal' className='col-span-3'>
          <h1 id='modal' className='md:text-3xl text-lg mb-5 font-semibold'>
            {loading ? (
              <Skeleton
                baseColor='#A8AEB6'
                highlightColor='#DEE1E5'
                className='h-9 my-1 opacity-70'
                borderRadius='20px'
              />
            ) : (
              data?.translations?.uz.name ?? 'Not found'
            )}
          </h1>
          {infoData.map((item, index) =>
            loading ? (
              <Skeleton
                key={index}
                baseColor='#A8AEB6'
                highlightColor='#DEE1E5'
                className='h-9 my-1 opacity-70'
                borderRadius='20px'
              />
            ) : (
              <div
                id='modal'
                className='flex justify-between md:text-2xl text-md my-3 border-b-2 border-gray-400'
                key={index}
              >
                <h1 id='modal' className='text-gray-600'>
                  {item.data}
                </h1>
                <p id='modal' className='text-gray-700'>
                  {data[item.name] ?? '0'}
                </p>
              </div>
            )
          )}
          {extraInfo.map((item, index) =>
            loading ? (
              <Skeleton
                key={index}
                baseColor='#A8AEB6'
                highlightColor='#DEE1E5'
                className='h-9 my-1 opacity-70'
                borderRadius='20px'
              />
            ) : (
              <div
                id='modal'
                className='flex md:text-xl text-md my-3 mb-2 text-gray-700 items-center'
                key={index}
              >
                <span
                  id='modal'
                  className={`icon icon-${item.logo} bg-gray-600 mr-3`}
                ></span>
                <a
                  target='_blank'
                  href={
                    data[item.name]?.includes('+998')
                      ? `tel:${data[item.name]}`
                      : 'https://t.me/TemirovUlugbek'
                  }
                  id='modal'
                >
                  {data[item.name] ?? 'not found'}
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(InfoModal);
