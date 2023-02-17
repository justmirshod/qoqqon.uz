//hooks
import { useSelector } from 'react-redux';

//config
import { onlineUrl } from '../../config/config';
import { latinToCyrillic } from '../../hooks/useLatinToCrylic';

//translations
import generalTranslations from '../../translations/general.json';

export default function ManagerAsistantItem({
  id,
  translations,
  image,
  phone_number,
}) {
  //state data
  const { activeLang } = useSelector((state) => state.language);

  return (
    <div className='col-span-1 bg-[#fff] rounded-lg shadow-lg hover:shadow-xl duration-150 py-6 px-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 h-full'>
        <div className='col-span-1'>
          <img src={image} className='rounded-lg' alt='' />
        </div>
        <div className='col-span-1 md:col-span-2 flex flex-col justify-between'>
          <div>
            <h1 className='text-xl mb-2'>
              {activeLang === 'ўз'
                ? latinToCyrillic(translations?.uz?.full_name)
                : translations[activeLang]?.full_name}
            </h1>
            <p className='text-[#717171]'>
              {activeLang === 'ўз'
                ? latinToCyrillic(translations?.uz?.about)
                : translations[activeLang]?.about}
            </p>
          </div>
          <div className='flex items-center justify-between mt-auto'>
            <p className='text-blue-700'>{phone_number}</p>
            <a href={onlineUrl} className=''>
              {generalTranslations.connection[activeLang]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
