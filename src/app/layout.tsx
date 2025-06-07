import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

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
      <body className={`${roboto.variable} h-dvh flex flex-col bg-[url('/backgroundImg.jpg')] bg-auto`}>
        <Header />

        <main className="flex-1 p-4 text-white">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
