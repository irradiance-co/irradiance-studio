'use client';

import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { cn } from '@/lib/utils';

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
        className={cn(
          'max-w-3/4 mx-auto w-full appearance-none',
          'items-center justify-center border-none',
          'bg-transparent px-2 py-2.5 text-sm text-gray-300',
          'focus:border-blue-500 focus:ring-blue-500',
        )}
      />
    );
  },
);

InputField.displayName = 'InputField';

export { InputField };
