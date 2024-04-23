// KlaviyoSubscribe.tsx
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useUser } from './klaviyo.context'; // Import the useUser hook

import { subscribeToKlaviyo } from '@/app/actions/subscribe';
import { FormField, FormItem, FormControl, FormMessage } from './form';
import { InputField } from '../input';
import { Button } from '../button';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
});

const KlaviyoSubscribe = () => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  });
  const { setEmail } = useUser();

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      const response = await subscribeToKlaviyo({ email: data.email });
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
