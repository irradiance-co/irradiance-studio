import { cn } from '@/lib/utils';
import React from 'react';

const selectClasslist = [
  'bg-white text-carbon-500 border border-carbon-100',
  'rounded-xl shadow-md ',
  'focus:ring-2 focus:ring-elite-800/60 focus:border-elite-800',
  'hover:bg-carbon-50',
];

function TextInputWithButton() {
  return (
    <div className='relative flex items-center'>
      <input
        id='10'
        type='text'
        className={cn(
          'peer relative h-10 w-full',
          'bg-carbon-50 pl-4 pr-20 outline-none drop-shadow-sm',
          'transition-all duration-200 ease-in-out focus:bg-white',
          'focus:drop-shadow-md',
          ...selectClasslist,
        )}
      />
      <button className='absolute right-2 h-7 w-16 rounded-md bg-blue-200 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600'>
        Send
      </button>
    </div>
  );
}

export default TextInputWithButton;
