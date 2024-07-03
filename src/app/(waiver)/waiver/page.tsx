import React, { Suspense } from 'react';

import { klaviyoCompanyId } from '@/lib/env.api';
import { KlaviyoTracking } from '@/components/klaviyo/track';

export default function Waiver() {
  return (
    <Suspense fallback={null}>
      {klaviyoCompanyId ? <KlaviyoTracking /> : null}

      <section className='flex h-auto items-center justify-center'>
        <div className='z-100 flex flex-col items-center'>
          <div className='relative mx-auto w-full items-center px-2'>
            <div className='mx-auto mt-24 flex w-full flex-col pt-6'>
              <div className='klaviyo-form-SRkHVB'></div>

              {/** <div className='klaviyo-form-WCqKBA'></div> **/}
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
