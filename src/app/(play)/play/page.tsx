import { ToastComp } from '@/components/ui/toast/success';

export default function Play() {
  return (
    <section className='flex h-screen items-center justify-center'>
      <div className='z-50 flex flex-col items-center'>
        <div className='relative mx-auto w-full items-center'>
          <div className='mx-auto mt-24 flex w-full flex-col'>
            <ToastComp />
          </div>
        </div>
      </div>
    </section>
  );
}
