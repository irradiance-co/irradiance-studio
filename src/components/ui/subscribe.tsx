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
} from './drawer';
import { KlaviyoSubscribe } from './react-form';
import { Button } from './button';

export const Subscribe = () => {
  return (
    <Drawer>
      <DrawerTrigger className='fixed bottom-0 py-12 font-medium text-gray-800'>
        <span className='font-semibold underline'>Sign up</span> to be notified
        of updates.
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerDescription className='mb-4 text-center font-medium text-gray-600'>
            Sign up to be notified of updates.
          </DrawerDescription>
        </DrawerHeader>
        <KlaviyoSubscribe />
        <DrawerFooter>
          <DrawerClose>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
