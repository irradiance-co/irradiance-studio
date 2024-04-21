'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from './form'; // Adjust path as necessary
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  firstName: z.string().min(1, { message: 'First name is required.' }),
  lastName: z.string().min(1, { message: 'Last name is required.' }),
  phoneNumber: z
    .string()
    .regex(/^(\+\d{1,3}[- ]?)?\d{10}$/, {
      message: 'Invalid phone number. Include country code if applicable.',
    })
    .optional(), // Apply regex first, then make it optional
  externalId: z.string().optional(),
  organization: z.string().optional(),
  title: z.string().optional(),
});

export function ProfileForm() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      externalId: '',
      organization: '',
      title: '',
    },
  });

  const { handleSubmit } = methods;

  function onSubmit(values) {
    console.log(values);
    // Here, you would handle form submission, e.g., sending data to your server or directly to Klaviyo.
  }

  return (
    <Form {...methods}>
      <FormItem>
        <FormLabel htmlFor='email'>Email:</FormLabel>
        <FormField
          name='email'
          render={({ field }) => (
            <FormControl
              {...field}
              id='email'
            />
          )}
        />
        <FormMessage />
      </FormItem>

      <FormItem>
        <FormLabel htmlFor='firstName'>First Name:</FormLabel>
        <FormField
          name='firstName'
          render={({ field }) => (
            <FormControl
              {...field}
              id='firstName'
            />
          )}
        />
        <FormMessage />
      </FormItem>

      <FormItem>
        <FormLabel htmlFor='lastName'>Last Name:</FormLabel>
        <FormField
          name='lastName'
          render={({ field }) => (
            <FormControl
              {...field}
              id='lastName'
            />
          )}
        />
        <FormMessage />
      </FormItem>

      {/* Continue similarly for other fields */}

      <button
        type='submit'
        onClick={handleSubmit(onSubmit)}>
        Submit
      </button>
    </Form>
  );
}
