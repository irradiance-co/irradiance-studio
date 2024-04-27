'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

export const KlaviyoTracking = ({ email }) => {
  // Define safeKlaviyoCall outside the useEffect to make it accessible everywhere within the component.
  const safeKlaviyoCall = (method, ...args) => {
    if (window.klaviyo) {
      try {
        window.klaviyo[method](...args);
      } catch (error) {
        console.error(`Klaviyo ${method} call failed:`, error);
      }
    }
  };

  useEffect(() => {
    if (email) {
      safeKlaviyoCall('identify', { email: email });
      safeKlaviyoCall('track', 'Elected President', {
        Country: 'United States',
      });
    }
  }, [email]);

  return (
    <>
      <Script
        id='klaviyo-script'
        strategy='afterInteractive'
        src='//static.klaviyo.com/onsite/js/klaviyo.js?company_id=TUuLHH'
        onLoad={() => {
          console.log('Klaviyo script loaded');
          if (email) {
            safeKlaviyoCall('identify', { email: email });
          }
        }}
      />
    </>
  );
};
