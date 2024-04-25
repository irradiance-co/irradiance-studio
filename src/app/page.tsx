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
    <div className='flex flex-row gap-2 text-center text-4xl font-semibold text-carbon-600'>
      <HoverCard>
        <HoverCardTrigger>
          <span className='underline hover:cursor-wait'>Hormesis</span>
        </HoverCardTrigger>
        <HoverCardContent>
          <p className='text-left text-sm font-medium'>
            <strong>Hormesis:</strong> an adaptive response of cells to a
            moderate, intermittent stressor.
          </p>
        </HoverCardContent>
      </HoverCard>

      <h3 className=''>in motion</h3>
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
