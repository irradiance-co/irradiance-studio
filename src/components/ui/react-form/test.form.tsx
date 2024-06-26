'use client';

import React from 'react';
import { useForm, FormProvider, UseFormRegisterReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { subscribeAction } from '@/app/actions';
import { cn } from '@/lib/utils';
import { useUser } from '@/components/ui/react-form/klaviyo.context';
import { Button } from '@/components/ui/button';
import { FormField, FormItem, FormControl, FormMessage } from './form';

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

const KlaviyoSubscribe = () => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  });
  const { setEmail } = useUser();

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      const response = await subscribeAction({ email: data.email });
      if (response.success) {
        setEmail(data.email); // Update global email state on successful subscription
        console.log('Subscription successful:', response);
      }
    } catch (error) {
      console.error('Subscription failed:', error);
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
          <Button
            className='mx-0 flex h-full w-1/4 items-center justify-end py-2 text-sm font-medium'
            variant='signUpNow'
            size='sm'
            type='submit'>
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export { KlaviyoSubscribe };
