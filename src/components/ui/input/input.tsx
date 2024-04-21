'use client';

import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextInputProps extends UseFormRegisterReturn {
  placeholder?: string;
}

const InputField = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ onBlur, onChange, name, ref, placeholder, ...rest }, forwardedRef) => {
    return (
      <input
        type='email'
        name={name}
        ref={(instance) => {
          if (forwardedRef) {
            if (typeof forwardedRef === 'function') {
              forwardedRef(instance);
            } else {
              forwardedRef.current = instance;
            }
          }
          if (typeof ref === 'function') {
            ref(instance);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLInputElement | null>).current =
              instance;
          }
        }}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        {...rest}
        className='mx-auto block w-full max-w-sm items-center justify-center border-b border-radiance-400 bg-transparent p-2.5 text-sm text-white focus:border-blue-500 focus:ring-blue-500'
      />
    );
  },
);

InputField.displayName = 'InputField';

export { InputField };
