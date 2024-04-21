'use client';

import React from 'react';
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
import { EmailForm } from '../react-form/email.form';

export const Waitlist = () => {
  return (
    <Drawer>
      <DrawerTrigger>Sign up</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className='text-center'>Stay Updated!</DrawerTitle>
          <DrawerDescription className='text-center'>
            Sign up to be notified of updates.
          </DrawerDescription>
        </DrawerHeader>

        {/* EmailForm now handles its own submission */}
        <EmailForm />

        <DrawerFooter>
          {/* Submit button inside EmailForm should handle form submission */}
          <DrawerClose>
            <button type='button'>Cancel</button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
