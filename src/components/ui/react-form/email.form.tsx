'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormField, FormItem, FormControl, FormMessage } from './form';
import { InputField } from '../input/input';
import subscribeAction from '@/app/actions/subscribe';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
});

export function EmailForm() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log('Email submitted:', data.email);
  });

  return (
    <FormProvider {...methods}>
      <FormPrimitive
        action={(formData: FormData) =>
          subscribeAction({ email: formData.get('email') as string })
        }
        onSubmit={onSubmit}>
        <FormItem>
          <FormField
            name='email'
            render={({ field }) => (
              <FormControl {...field}>
                <InputField
                  {...methods.register('email')}
                  placeholder='Enter your email'
                />
              </FormControl>
            )}
          />
          <FormMessage />
        </FormItem>
        <button
          className='mx-auto mt-4 flex w-full items-center justify-center'
          type='submit'>
          Submit
        </button>
      </FormPrimitive>
    </FormProvider>
  );
}

// Create a simple Form component that can handle submissions
const FormPrimitive: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = ({
  children,
  onSubmit,
  ...props
}) => {
  return (
    <form
      onSubmit={onSubmit}
      {...props}>
      {children}
    </form>
  );
};
