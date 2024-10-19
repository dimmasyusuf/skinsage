import type {Metadata} from 'next';
import {Poppins as FontSans} from 'next/font/google';
import '@/styles/globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'SkinSage',
  description:
    'SkinSage is a platform that helps you feel confident again with personalized skin expert advice.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
