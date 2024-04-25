'use client';

import React from 'react';
import { useForm, FormProvider, UseFormRegisterReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { subscribeAction } from '@/app/actions';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/react-form/form';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
});

interface TextInputProps extends UseFormRegisterReturn {
  placeholder?: string;
}

const InputField = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ onBlur, onChange, name, placeholder, ...rest }, ref) => {
    return (
      <input
        autoCorrect='off'
        autoComplete='email'
        type='email'
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        {...rest}
        className={cn(
          'max-w-3/4 mx-auto w-full appearance-none',
          'items-center justify-center border-none',
          'bg-transparent px-2 py-2.5 text-sm text-gray-300',
          'transition-colors duration-300',
          'focus:outline-none',
        )}
      />
    );
  },
);

InputField.displayName = 'InputField';

export const KlaviyoForm = () => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    console.log('Form submitted with data:', data);
    try {
      const response = await subscribeAction({ email: data.email });
      console.log('API response:', response);
      if (response.success) {
        console.log('Subscription successful:', response);
      } else {
        throw new Error('Subscription failed due to server-side issues');
      }
    } catch (error) {
      console.error('Subscription failed:', error);
      methods.setError('email', {
        type: 'manual',
        message: error.message || 'Failed to subscribe',
      });
    }
  });

  return (
    <FormProvider {...methods}>
      <form
        className='w-full px-4 md:px-0'
        onSubmit={onSubmit}>
        <div
          className={cn(
            'mx-auto mb-6 flex w-full max-w-sm items-center justify-between gap-2 border-b-[2px] border-radiance-400 py-2',
          )}>
          <FormField
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl {...field}>
                  <InputField
                    {...methods.register('email')}
                    placeholder='Enter your email'
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormMessage />
          <Button
            className='mx-auto flex h-full w-1/4 items-center justify-end py-2 text-sm font-medium'
            variant='signUpNow'
            size='sm'
            type='submit'
            disabled={methods.formState.isSubmitting}>
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
