// hooks/useScript.ts
import { useRouter } from 'next/router';
import { use, useEffect } from 'react';

const useScript = (scriptContent: string) => {
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement('script');
    script.textContent = scriptContent;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [router.asPath]); // Re-run the effect only if the path changes
};

export default useScript;

export const KlaviyoTracking = () => {
  const klaviyoScript =
    '!function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();';
  useScript(klaviyoScript);

  return null;
};
