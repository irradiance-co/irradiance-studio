import { WordmarkLogo } from '@/components/assets/wordmark';
import { GradientLogo } from '@/components/gradient-logo';
import { KlaviyoSubscribe } from '@/components/klaviyo';

export default function Home() {
  return (
    <section className='flex h-screen items-center justify-center'>
      <div className='z-50 flex flex-col items-center space-y-4'>
        <GradientLogo className='mx-auto h-auto w-full max-w-[120px]' />
        <h3 className='text-center text-4xl font-semibold text-gray-600'>
          Hormesis in motion
        </h3>

        <KlaviyoSubscribe />
        <WordmarkLogo className='fixed top-0 mx-auto w-full max-w-[120px] items-center justify-center' />
      </div>
    </section>
  );
}
