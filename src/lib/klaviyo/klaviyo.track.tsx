'use client';

import React from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

function KlaviyoTracking() {
  const pathname = usePathname();

  React.useEffect(() => {
    console.log('Tracking page view for Klaviyo:', pathname);
    // Assume you have a way to get the user's email, adjust accordingly
    const userEmail = '';

    console.log('Identifying user for Klaviyo:', userEmail);

    window.klaviyo = window.klaviyo || [];
    window.klaviyo.push(['identify', { email: userEmail }]);
  }, [pathname]);

  return (
    <>
      <Script
        id='klaviyo-script'
        strategy='afterInteractive'
        src={`//static.klaviyo.com/onsite/js/klaviyo.js?company_id=TUuLHH`}
      />
    </>
  );
}

export { KlaviyoTracking };
