/** @type {import('next').NextConfig} */
const config = {
  images: { remotePatterns: [{ hostname: 'cdn.sanity.io' }] },

  experimental: {
    serverActions: {
      allowedOrigins: ['*.sanity.io', 'klaviyo.com', '*.klaviyo.com'],
    },
  },
};

export default config;
