'use client';

import React from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useUser } from '../provider';

export const KlaviyoTracking = () => {
  const pathname = usePathname();

  /**
   *
   * Get the email from the context
   */
  const { email: userEmail } = useUser();

  React.useEffect(() => {
    console.log('Tracking page view for Klaviyo:', pathname);
    console.log('Identifying user for Klaviyo:', userEmail);

    if (userEmail) {
      window.klaviyo = window.klaviyo || [];
      window.klaviyo.push(['identify', { email: userEmail }]);
    }
  }, [pathname, userEmail]);

  return (
    <>
      <Script
        id='klaviyo-script'
        strategy='afterInteractive'
        src={`//static.klaviyo.com/onsite/js/klaviyo.js?company_id=TUuLHH`}
      />
    </>
  );
};
