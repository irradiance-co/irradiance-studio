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

export const Subscribe = () => {
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
        <KlaviyoSubscribe />
        <DrawerFooter>
          <DrawerClose>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
