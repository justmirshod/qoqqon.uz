import { useState } from 'react';
import { useSelector } from 'react-redux';
import { latinToCyrillic } from '../../../../hooks/useLatinToCrylic';
export default function FaqItem({ translations, id }) {
  const [open, setOpen] = useState(false);
  const { activeLang } = useSelector((state) => state.language);
  return (
    <div
      key={id}
      className={`px-[20px] py-[30px] bg-aqua rounded-lg cursor-pointer mt-[30px] overflow-hidden border border-gray-300 ${
        open ? 'border-blue-400' : ''
      }`}
    >
      <div className='flex items-center justify-between'>
        <h1
          className='font-semibold text-[20px] md:w-full w-[96%]'
          onClick={() => setOpen((prev) => !prev)}
        >
          {activeLang === 'ўз'
            ? latinToCyrillic(translations?.uz?.question)
            : translations[activeLang]?.question}
        </h1>
        <i
          onClick={() => setOpen((prev) => !prev)}
          class={`fa-solid text-lg fa-${open ? 'minus' : 'plus'}`}
        ></i>
      </div>
      <div className={`overflow-hidden duration-200 ${open ? '' : 'h-0'}`}>
        <p className={`text-lg text-[#717171] mt-[15px]`}>
          {activeLang === 'ўз'
            ? latinToCyrillic(translations?.uz?.answer)
            : translations[activeLang]?.answer}
        </p>
      </div>
    </div>
  );
}
