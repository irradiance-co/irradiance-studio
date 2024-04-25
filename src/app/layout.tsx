import { GradientXV } from '@/components/gradients';
import './index.scss';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { AppHooks } from './hooks';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <AppHooks />
        <main className='z-10 flex flex-col items-center justify-center overflow-hidden'>
          {children}
        </main>
        <GradientXV gradient='radial-gradient(125% 125% at 50% 10%, #FFF 0%, #EAEBEB 100%)' />
      </body>
    </html>
  );
}

const siteTitle = 'Irradiance';
const siteURL = 'https://irradiancesauna.com';
const siteDescription = 'Hormesis in motion.';

export const metadata: Metadata = {
  title: siteTitle,
  metadataBase: new URL('https://irradiancesauna.com'),
  description: siteDescription,
  manifest: '/site.webmanifest',
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteURL,
    siteName: siteTitle,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 627,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon/apple-touch-icon.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: '',
    images: ['/og.png'],
  },
  category: '',
  verification: {},
  other: {
    custom: 'none',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',

  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#FFFFFF' },
  ],
};
