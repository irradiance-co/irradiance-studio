'use client';

import { useEffect } from 'react';
import { Toaster, toast } from 'sonner';

export const ToastComp = () => {
  useEffect(() => {
    toast.success('My success toast');
  }, []);

  return (
    <section className='flex h-screen items-center justify-center'>
      <Toaster position={'top-center'} />
    </section>
  );
};
