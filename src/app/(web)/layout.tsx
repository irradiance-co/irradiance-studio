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
        <main className='flex min-h-screen flex-col items-center justify-between overflow-hidden'>
          {children}
        </main>
      </body>
    </html>
  );
}
