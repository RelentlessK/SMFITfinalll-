import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicii | SMfit',
  description: 'Descoperă serviciile personalizate de fitness și nutriție oferite de SMfit. Antrenamente personale, nutriție personalizată, antrenament online și programe de transformare.',
  alternates: {
    canonical: 'https://smfit.ro/servicii',
    languages: {
      'en': 'https://smfit.ro/servicii',
      'ro': 'https://smfit.ro/ro/servicii',
      'x-default': 'https://smfit.ro/ro/servicii', // Default to Romanian
    },
  },
  openGraph: {
    title: 'Servicii | SMfit',
    description: 'Descoperă serviciile personalizate de fitness și nutriție oferite de SMfit pentru a-ți atinge obiectivele de sănătate și formă fizică.',
    url: 'https://smfit.ro/servicii',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'SMfit',
    images: [
      {
        url: 'https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        width: 1200,
        height: 630,
        alt: 'Servicii SMfit - Antrenamente Personalizate și Nutriție',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicii | SMfit',
    description: 'Descoperă serviciile personalizate de fitness și nutriție oferite de SMfit pentru a-ți atinge obiectivele de sănătate și formă fizică.',
    images: ['https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
  keywords: ['antrenament personal', 'nutriție personalizată', 'antrenament online', 'fitness', 'transformare corporală', 'Târgu Mureș', 'personal trainer'],
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServiciiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}