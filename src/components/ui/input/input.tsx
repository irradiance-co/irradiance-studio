'use client';

import React, { FC, ChangeEvent } from 'react';

interface TextInputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const InputField: FC<TextInputProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className='mx-auto block w-full max-w-sm items-center justify-center border-b border-radiance-400 bg-transparent p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
    />
  );
};
