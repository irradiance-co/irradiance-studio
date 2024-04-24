'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useUser } from '../provider';

export const KlaviyoTrackEvents = () => {
  const pathname = usePathname();
  const { email: userEmail } = useUser();

  React.useEffect(() => {
    console.log('Tracking page view for Klaviyo:', pathname);
    console.log('Identifying user for Klaviyo:', userEmail);

    const identifyUser = () => {
      if (userEmail) {
        // Initialize Klaviyo object if not already initialized
        window.klaviyo = window.klaviyo || [];
        // Use the identify method with a callback
        window.klaviyo.push([
          'identify',
          { email: userEmail },
          (result: any) => {
            console.log('Identify result:', result);
            // Additional actions after successful identification
            // Example: Tracking a page view
            window.klaviyo.push([
              'track',
              'Page Viewed',
              {
                'Page URL': pathname,
              },
            ]);
          },
        ]);
      }
    };

    if (window.klaviyo) {
      identifyUser();
    } else {
      const klaviyoScript = document.createElement('script');
      klaviyoScript.src = `//static.klaviyo.com/onsite/js/klaviyo.js?company_id=TUuLHH`;
      klaviyoScript.async = true;
      klaviyoScript.onload = () => {
        identifyUser();
      };
      document.body.appendChild(klaviyoScript);
    }
  }, [pathname, userEmail]);

  return null; // No need to return JSX if only appending script
};
