import type {Metadata} from 'next';
import {Poppins as FontSans} from 'next/font/google';
import '@/styles/globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'SkinSage | Simple, Expert Skincare Advice for Clear, Healthy Skin',
  description:
    'Get easy-to-follow skincare tips with SkinSage. Our experts give you simple advice to help your skin look clear, healthy, and beautiful. Feel good in your skin again. Join us now for free expert advice!',
  metadataBase: new URL('https://skinsage.vercel.app'),
  authors: [
    {
      name: 'SkinSage',
      url: 'https://skinsage.vercel.app',
    },
  ],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://skinsage.vercel.app',
    languages: {
      'en-US': 'https://skinsage.vercel.app',
    },
  },
  keywords: [
    'simple skincare',
    'clear skin tips',
    'healthy skin advice',
    'easy beauty tips',
    'skin confidence',
    'acne help',
    'sensitive skin care',
    'skincare routine for beginners',
    'best skincare advice',
  ],
  openGraph: {
    title: 'SkinSage | Simple, Expert Skincare Advice for Clear, Healthy Skin',
    description:
      'Need help with your skin? SkinSage gives you simple skincare advice from experts. Get clear, healthy skin and feel confident again. Join us now for free expert advice!',
    url: 'https://skinsage.vercel.app',
    siteName: 'SkinSage',
    images: [
      {
        url: 'https://skinsage.vercel.app/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'SkinSage simple skincare advice for clear, healthy skin',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'SkinSage | Simple, Expert Skincare Advice for Clear, Healthy Skin',
    description:
      'Want clear, healthy skin? SkinSage makes it easy with expert advice that fits your needs. Feel good and confident in your skin. Join us now for free expert advice!',
    card: 'summary_large_image',
    creator: '@skinsage',
    site: 'https://skinsage.vercel.app',
    images: [
      {
        url: 'https://skinsage.vercel.app/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'SkinSage simple skincare advice for clear, healthy skin',
      },
    ],
  },
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
