import { WordmarkLogo } from '@/components/assets/wordmark';
import { GradientLogo } from '@/components/gradient-logo';
import { KlaviyoSubscribe } from '@/components/klaviyo';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const HormesisDesktop = () => {
  return (
    <div className='hidden flex-row gap-2 text-center text-2xl font-semibold text-carbon-600 md:flex md:text-3xl'>
      <HoverCard openDelay={100}>
        <HoverCardTrigger>
          <span className='rounded-md bg-carbon-100 px-1 font-semibold tracking-tight hover:cursor-pointer'>
            Hormesis
          </span>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='flex flex-col gap-1'>
            <h3 className='text-left text-sm font-semibold'>Hormesis:</h3>
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

const HormesisMobile = () => {
  return (
    <div className='mx-auto text-carbon-600 md:hidden'>
      <Popover>
        <div className='flex flex-row gap-2 text-2xl text-carbon-600'>
          <PopoverTrigger>
            <span className='rounded-md bg-carbon-100 px-1 font-semibold tracking-tight'>
              Hormesis
            </span>
          </PopoverTrigger>
          <h3 className='font-medium tracking-tight'>in motion.</h3>
        </div>
        <PopoverContent>
          <div className='flex flex-col gap-1'>
            <h3 className='text-left text-sm font-semibold'>Hormesis:</h3>
            <p className='text-left text-xs font-medium'>
              an adaptive response of cells to a moderate, intermittent
              stressor.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default function Home() {
  return (
    <section className='flex h-screen items-center justify-center'>
      <div className='z-50 flex flex-col items-center space-y-4'>
        <GradientLogo className='mx-auto h-auto w-full max-w-[120px]' />

        <HormesisDesktop />
        <HormesisMobile />

        <KlaviyoSubscribe />
        <WordmarkLogo className='fixed top-0 mx-auto w-full max-w-[120px] items-center justify-center' />
      </div>
    </section>
  );
}
