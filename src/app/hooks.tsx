'use client';

import React, { Suspense } from 'react';

import { klaviyoCompanyId } from '@/lib/env.api';
import { KlaviyoTracking } from '@/components/klaviyo/track';
import { Analytics } from '@vercel/analytics/react';

export const AppHooks = () => {
  return (
    <Suspense fallback={null}>
      {klaviyoCompanyId ? <KlaviyoTracking /> : null}
      <Analytics />
    </Suspense>
  );
};
