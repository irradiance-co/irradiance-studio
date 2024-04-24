'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useUserStore } from '@/lib/use-store';

export const KlaviyoTracking = () => {
  const pathname = usePathname();
  const userEmail = useUserStore((state) => state.email);

  useEffect(() => {
    window.klaviyo = window.klaviyo || [];
  }, []);

  const handleScriptLoad = () => {
    console.log('Klaviyo script loaded');

    if (userEmail) {
      console.log('Identifying user for Klaviyo:', userEmail);
      window.klaviyo.push(['identify', { email: userEmail }]);
      console.log('Tracking page view for Klaviyo:', pathname);
      window.klaviyo.push(['track', 'Page Viewed', { 'Page URL': pathname }]);
    }
  };

  return (
    <>
      <Script
        id='klaviyo-script'
        strategy='afterInteractive'
        src='//static.klaviyo.com/onsite/js/klaviyo.js?company_id=TUuLHH'
        onLoad={handleScriptLoad}
      />
    </>
  );
};
