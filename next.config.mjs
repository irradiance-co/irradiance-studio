const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.klaviyo.com *.sanity.io klaviyo.com;
    style-src 'self' 'unsafe-inline' *.klaviyo.com *.sanity.io;
    img-src 'self' blob: data: *.klaviyo.com *.sanity.io;
    font-src 'self';
    object-src 'none' klaviyo.com *.klaviyo.com;
    base-uri 'self';
    form-action 'self' klaviyo.com *.klaviyo.com;
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

/** @type {import('next').NextConfig} */
const config = {
  images: { remotePatterns: [{ hostname: 'cdn.sanity.io' }] },

  experimental: {
    serverActions: {
      allowedOrigins: ['*.sanity.io', 'klaviyo.com', '*.klaviyo.com'],
    },
  },

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
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
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
