import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Roman Ohirok',
  description: 'Presentation page of Roman Ohirok',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} min-h-dvh flex flex-col`}>
        <Header />

        <main className="flex-1 p-4 container m-auto">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
