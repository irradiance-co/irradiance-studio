'use client';

import React from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

function KlaviyoScript() {
  const pathname = usePathname();

  React.useEffect(() => {
    console.log('Tracking page view for Klaviyo:', pathname);
  }, [pathname]);

  return (
    <>
      <Script
        id='klaviyo-script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `!function(){var e="TUuLHH",n=window.klaviyoModulesObject;if(n){var a=n,o=a.companyId,r=a.serverSideRendered;if(o!=e||!r)return void console.warn("Already loaded for account ".concat(o,". Skipping account ").concat(e,"."))}window._learnq=window._learnq||[],window.__klKey=window.__klKey||e,n||(window._learnq.push(["account",e]),n={companyId:e,loadTime:new Date,loadedModules:{},loadedCss:{},serverSideRendered:!0,assetSource:""},Object.defineProperty(window,"klaviyoModulesObject",{value:n,enumerable:!1}));var t={},s=document,d=s.head;function c(e){if(!t[e]){var n=s.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.crossOrigin="anonymous",d.appendChild(n),t[e]=!0}}var i,l,u,p=JSON.parse("noModule"in s.createElement("script")||function(){try{return new Function('import("")'),!0}catch(e){return!1}}()?"{\u0022static\u0022: {\u0022js\u0022: [\u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/fender_analytics.f692ee00c71150d7db91.js?cb\u003D1\u0022, \u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/static.500134348b1f0969ffe3.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/runtime.0085c4f9b9f19ee7edb6.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/sharedUtils.616df14b2a706a7b4c44.js?cb\u003D1\u0022]}}":"{\u0022static\u0022: {\u0022js\u0022: [\u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/fender_analytics.113876fdc67592e7cbfd.js?cb\u003D1\u0022, \u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/static.047f24ade89e4aff54a9.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/runtime.d8e7db6528118105a8f8.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/sharedUtils.55dc1f53fcccf114c4b8.js?cb\u003D1\u0022]}}"),w=n,v=w.loadedCss,y=w.loadedModules;for(i in p)if(p.hasOwnProperty(i)){var f=p[i];f.js.forEach((function(e){y[e]||(c(e),y[e]=(new Date).toISOString())}));var m=f.css;m&&!v[m]&&(l=m,u=void 0,(u=s.createElement("link")).rel="stylesheet",u.href=l,d.appendChild(u),v[m]=(new Date).toISOString())}}();`,
        }}
      />
    </>
  );
}

export { KlaviyoScript };
