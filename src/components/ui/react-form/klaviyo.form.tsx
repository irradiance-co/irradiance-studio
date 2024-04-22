'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { subscribeToKlaviyo } from '@/app/actions/subscribe';

import { FormField, FormItem, FormControl, FormMessage } from './form';
import { InputField } from '../input';

import { cn } from '@/lib/utils';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
});

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

const KlaviyoSubscribe = () => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    console.log('Email submitted:', data.email);
    try {
      const response = await subscribeToKlaviyo({ email: data.email });
      console.log('Subscription successful:', response);
    } catch (error) {
      console.error('Subscription failed:', error);
    }
  });

  return (
    <FormProvider {...methods}>
      <FormPrimitive
        onSubmit={onSubmit}
        action={(formData: FormData) =>
          subscribeToKlaviyo({ email: formData.get('email') as string })
        }>
        <div
          className={cn(
            'mx-auto flex w-full max-w-sm items-center justify-between',
            'mb-6 gap-2 border-b border-radiance-400 py-2',
          )}>
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
            className='mx-0 flex h-auto w-1/4 items-center justify-end px-2 text-right text-sm font-medium text-gray-800'
            type='submit'>
            Submit
          </button>
        </div>
      </FormPrimitive>
    </FormProvider>
  );
};

export { KlaviyoSubscribe };
