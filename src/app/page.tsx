import { WordmarkLogo } from '@/components/assets/wordmark';
import { GradientLogo } from '@/components/gradient-logo';
import { KlaviyoSubscribe } from '@/components/klaviyo';

export default async function Home() {
  return (
    <section className='flex h-screen items-center justify-center'>
      <div className='z-50 flex flex-col items-center space-y-4'>
        <GradientLogo className='mx-auto w-full max-w-[120px]' />
        <KlaviyoSubscribe />

        <WordmarkLogo className='fixed top-0 mx-auto w-full max-w-[120px] items-center justify-center' />
      </div>
    </section>
  );
}
