'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  FormPrimitive, // Import the newly defined FormPrimitive
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from './form'; // Adjust the import paths based on your project structure
import { InputField } from '../input/input';

// Zod schema for just the email field
const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
});

type FormData = z.infer<typeof formSchema>;

export function EmailForm() {
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit((data) => {
    console.log('Email submitted:', data.email);
  });

  return (
    <FormProvider {...methods}>
      <FormPrimitive onSubmit={onSubmit}>
        <FormItem>
          {/* <FormLabel htmlFor='email'>Email:</FormLabel> */}
          <FormField
            name='email'
            render={({ field }) => (
              <FormControl {...field}>
                <InputField
                  {...register('email')}
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
