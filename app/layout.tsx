import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import VortexEffect from '@/components/shared/VortexEffect';
import FitnessIconSystem from '@/components/shared/FitnessIconSystem';
import InstagramIcon from '@/components/ui/InstagramIcon';
import I18nProvider from '@/components/providers/I18nProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'SMfit - Antrenamente Personalizate & Nutriție',
    template: '%s | SMfit',
  },
  description: 'Transformă-ți corpul cu SMfit: antrenamente personalizate online sau live și planuri nutriționale adaptate nevoilor tale.',
  metadataBase: new URL('https://smfit.ro'),
  keywords: ['SMfit', 'antrenament personal', 'nutriție personalizată', 'fitness Târgu Mureș', 'transformare corporală', 'Sabina Meruță', 'personal trainer România'],
  authors: [{ name: 'Sabina Meruța', url: 'https://smfit.ro/despre-mine' }],
  creator: 'Sabina Meruța',
  publisher: 'SMfit',
  alternates: {
    canonical: 'https://smfit.ro',
    languages: {
      'en': 'https://smfit.ro',
      'ro': 'https://smfit.ro/ro',
      'x-default': 'https://smfit.ro/ro', // Default to Romanian
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://smfit.ro',
    title: 'SMfit - Antrenamente Personalizate & Nutriție',
    description: 'Transformă-ți corpul cu SMfit: antrenamente personalizate online sau live și planuri nutriționale adaptate nevoilor tale.',
    siteName: 'SMfit',
    images: [
      {
        url: 'https://zbm5woa3iy.ufs.sh/f/1fxqa6mYldrzwIy7OUjKkTclfebZu6hvgBj5IdXUmYW2yzH8',
        width: 1200,
        height: 630,
        alt: 'SMfit - Antrenamente Personalizate & Nutriție',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sabinameruta',
    creator: '@sabinameruta',
    title: 'SMfit - Antrenamente Personalizate & Nutriție',
    description: 'Transformă-ți corpul cu SMfit: antrenamente personalizate online sau live și planuri nutriționale adaptate nevoilor tale.',
    images: ['https://zbm5woa3iy.ufs.sh/f/1fxqa6mYldrzwIy7OUjKkTclfebZu6hvgBj5IdXUmYW2yzH8'],
  },
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  verification: {
    google: '', // Add your Google Search Console verification code here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Suspense fallback={<div>Loading...</div>}>
          <I18nProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
              <Header />
              <main className="flex-grow relative">
                {children}
              </main>
              <Footer />
              <Toaster />
              <Analytics />
              <VortexEffect excludeHomepageHero={true} />
              <FitnessIconSystem />
              <InstagramIcon />
            </ThemeProvider>
          </I18nProvider>
        </Suspense>
      </body>
    </html>
  );
}