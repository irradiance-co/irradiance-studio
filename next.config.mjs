const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.klaviyo.com *.sanity.io klaviyo.com a.klaviyo.com *.a.klaviyo.com vercel.com va.vercel-scripts.com *.vercel-scripts.com fast.a.klaviyo.com static-forms.klaviyo.com;
    connect-src 'self' *.klaviyo.com *.sanity.io fast.a.klaviyo.com static-forms.klaviyo.com a.klaviyo.com *.a.klaviyo.com api-js.datadome.co;
    style-src 'self' 'unsafe-inline' static.klaviyo.com *.klaviyo.com;
    img-src 'self' blob: data: *.klaviyo.com *.sanity.io;
    font-src 'self' *.klaviyo.com;
`;

/** @type {import('next').NextConfig} */
const config = {
  images: { remotePatterns: [{ hostname: 'cdn.sanity.io' }] },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default config;
