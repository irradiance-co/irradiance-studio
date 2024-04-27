'use client';

import React from 'react';
import Script from 'next/script';

export const KlaviyoTracking = () => {
  return (
    <>
      <Script
        id='klaviyo-script'
        strategy='afterInteractive'
        src='//static.klaviyo.com/onsite/js/klaviyo.js?company_id=TUuLHH'
        onLoad={() => {
          console.log('Klaviyo.js loaded');
        }}
      />
    </>
  );
};
