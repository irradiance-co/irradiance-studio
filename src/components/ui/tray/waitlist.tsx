'use client';

import React, { useState } from 'react';
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from '../drawer/drawer';
import { InputField } from '../input/input';

export const Waitlist = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Email submitted:', email);
    // Here you would typically handle the submission, e.g., sending to an API.
  };

  return (
    <Drawer>
      <DrawerTrigger>Sign up</DrawerTrigger>
      <DrawerContent onSubmit={handleSubmit}>
        <DrawerHeader>
          <DrawerTitle>Stay Updated!</DrawerTitle>
          <DrawerDescription>
            Sign up to be notified of updates.
          </DrawerDescription>
        </DrawerHeader>

        <InputField
          value={email}
          placeholder='Enter your email'
          onChange={handleEmailChange}
        />

        <DrawerFooter>
          <button type='submit'>Submit</button>
          <DrawerClose>
            <button type='button'>Cancel</button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
