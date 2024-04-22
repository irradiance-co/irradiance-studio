import { GradientXV } from '@/components/gradients';
import '../index.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Irradiance',
  metadataBase: new URL('https://irradiance.vercel.app'),
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <GradientXV
          gradient={
            'radial-gradient(125% 125% at 50% 10%, transparent 40%, #ED1C24 100%)'
          }>
          <main className='z-10 flex flex-col items-center justify-center overflow-hidden'>
            {children}
          </main>
        </GradientXV>
      </body>
    </html>
  );
}
