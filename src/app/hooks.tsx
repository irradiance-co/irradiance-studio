'use client';

import React, { Suspense } from 'react';

import { klaviyoCompanyId } from '@/lib/env.api';
import { KlaviyoTracking } from '@/components/klaviyo/track';

export const AppHooks = () => {
  return (
    <Suspense fallback={null}>
      {klaviyoCompanyId ? <KlaviyoTracking /> : null}
    </Suspense>
  );
};