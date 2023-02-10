import { useState } from 'react';
export default function FaqItem({ question }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      key={question.id}
      className={`px-[20px] py-[30px] bg-aqua rounded-lg cursor-pointer mt-[30px] overflow-hidden border border-gray-300 ${
        open ? 'border-blue-400' : ''
      }`}
    >
      <div className='flex items-center justify-between'>
        <h1
          className='font-semibold text-[20px] md:w-full w-[200px]'
          onClick={() => setOpen((prev) => !prev)}
        >
          {question.header}
        </h1>
        <i
          onClick={() => setOpen((prev) => !prev)}
          class={`fa-solid text-lg fa-${open ? 'minus' : 'plus'}`}
        ></i>
      </div>
      <div
        className={`overflow-hidden duration-200 ${open ? 'h-[150px]' : 'h-0'}`}
      >
        <p className={`text-lg max-w-[780px] text-[#717171] mt-[15px]`}>
          {question.content}
        </p>
      </div>
    </div>
  );
}
