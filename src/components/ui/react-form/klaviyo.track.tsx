'use client';

import React from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useUser } from './klaviyo.context'; // Import the useUser hook

function KlaviyoTracking() {
  const pathname = usePathname();
  const { email: userEmail } = useUser(); // Use the email from the context

  React.useEffect(() => {
    console.log('Tracking page view for Klaviyo:', pathname);
    console.log('Identifying user for Klaviyo:', userEmail);

    if (userEmail) {
      window.klaviyo = window.klaviyo || [];
      window.klaviyo.push(['identify', { email: userEmail }]);
    }
  }, [pathname, userEmail]); // Include userEmail in the dependency array

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
