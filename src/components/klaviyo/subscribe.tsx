'use client';

import React from 'react';
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerDescription,
} from '@/components/ui/drawer';
import { KlaviyoForm } from './form';

export const KlaviyoSubscribe = () => {
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
        <KlaviyoForm />
        <DrawerFooter>
          <DrawerClose>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
