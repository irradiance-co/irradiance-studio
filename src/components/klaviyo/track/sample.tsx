'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useUserStore } from '@/lib/use-store';

import { klaviyoCompanyId } from '@/lib/env.api';

export const KlaviyoTracking = () => {
  const pathname = usePathname();
  const userEmail = useUserStore((state) => state.email);

  useEffect(() => {
    if (!window.klaviyo) {
      window._klOnsite = window._klOnsite || [];
      window.klaviyo = new Proxy(
        {},
        {
          get: function (target, property) {
            return property === 'push'
              ? function () {
                  var args = arguments;
                  window._klOnsite.push(args);
                }
              : function () {
                  var args = Array.prototype.slice.call(arguments);
                  var callback =
                    typeof args[args.length - 1] === 'function'
                      ? args.pop()
                      : undefined;
                  const operation = [property, ...args]; // Prepare the operation without the callback
                  return new Promise(function (resolve) {
                    operation.push(function (response) {
                      if (callback) callback(response);
                      resolve(response);
                    });
                    window._klOnsite.push(operation); // Push the complete operation including the callback
                  });
                };
          },
        },
      );
    }
  }, []);

  const handleScriptLoad = () => {
    console.log('Klaviyo script loaded');
    if (userEmail) {
      console.log('Identifying user for Klaviyo:', userEmail);
      window.klaviyo.identify({ email: userEmail }).then(() => {
        console.log('Tracking page view for Klaviyo:', pathname);
        window.klaviyo.track('Page View', {
          'Page URL': pathname,
        });
      });
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
