import { useSelector } from 'react-redux';
import translit from 'latin-to-cyrillic';
import { adaptToLanguage } from '../../../../config/config';
export default function LatestNewsItem({ translations, created_at, image }) {
  const { activeLang } = useSelector((state) => state.language);
  return (
    <div className='p-4 rounded-lg bg-blue-400 col-span-1'>
      <img src={image} alt='' />
      <h1>
        {activeLang === 'ўз'
          ? translit(translations.uz?.title)
          : translations[activeLang]?.title}
      </h1>
    </div>
  );
}
