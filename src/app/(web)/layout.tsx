import "../index.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanity Next.js Portfolio Site",
  metadataBase: new URL("https://irradiance.vercel.app"),
  description: "A personal portfolio site built with Sanity and Next.js",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <main>
        {children}
       </main>
      </body>
    </html>
  );
}
