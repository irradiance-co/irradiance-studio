import { WordmarkLogo } from '@/components/assets/wordmark';
import { GradientLogo } from '@/components/gradient-logo';
import { KlaviyoSubscribe } from '@/components/klaviyo';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card';

const HormesisHover = () => {
  return (
    <div className='flex flex-row gap-2 text-center text-2xl font-semibold text-carbon-600 md:text-3xl'>
      <HoverCard>
        <HoverCardTrigger>
          <span className='tracking-tight underline hover:cursor-progress'>
            Hormesis
          </span>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='flex flex-col gap-2'>
            <h3 className='text-left text-sm font-semibold'>Hormesis</h3>
            <p className='text-left text-sm font-medium'>
              an adaptive response of cells to a moderate, intermittent
              stressor.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <h3 className='tracking-tight'>in motion.</h3>
    </div>
  );
};

export default function Home() {
  return (
    <section className='flex h-screen items-center justify-center'>
      <div className='z-50 flex flex-col items-center space-y-4'>
        <GradientLogo className='mx-auto h-auto w-full max-w-[120px]' />

        <HormesisHover />

        <KlaviyoSubscribe />
        <WordmarkLogo className='fixed top-0 mx-auto w-full max-w-[120px] items-center justify-center' />
      </div>
    </section>
  );
}
