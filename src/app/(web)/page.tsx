import { GradientLogo } from '@/components/gradient-logo';
import { Subscribe } from '@/components/ui/subscribe';

import clsx from 'clsx';

export default async function Home() {
  return (
    <section
      className={clsx(
        'relative flex h-screen items-center justify-center before:absolute before:h-[300px]',
        'before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial sm:before:w-[480px]',
        "before:from-radiance-700 before:to-transparent before:blur-2xl before:content-[''] after:absolute",
        'after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-radiance-400 sm:after:w-[240px]',
        "after:via-radiance-600 after:blur-2xl after:content-[''] before:lg:h-[360px]",
      )}>
      <div className='z-50 flex flex-col items-center space-y-4'>
        <GradientLogo className='mx-auto w-full max-w-[120px]' />
        <Subscribe />
      </div>
    </section>
  );
}
