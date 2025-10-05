import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimoniale | SMfit',
  description: 'Descoperă poveștile de succes și transformările reale ale clienților SMfit. Vezi cum programele noastre personalizate de fitness și nutriție au schimbat vieți.',
  keywords: ['testimoniale SMfit', 'povești de succes fitness', 'transformări corporale', 'rezultate antrenament personal', 'clienți mulțumiți SMfit'],
  alternates: {
    canonical: 'https://smfit.ro/testimoniale',
    languages: {
      'en': 'https://smfit.ro/testimoniale',
      'ro': 'https://smfit.ro/ro/testimoniale',
      'x-default': 'https://smfit.ro/ro/testimoniale', // Default to Romanian
    },
  },
  openGraph: {
    title: 'Testimoniale | SMfit',
    description: 'Descoperă poveștile de succes și transformările reale ale clienților SMfit.',
    url: 'https://smfit.ro/testimoniale',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'SMfit',
    images: [
      {
        url: 'https://uyy0kjad2n.ufs.sh/f/qhW01JguYVfwAaKQ1SZQ0b4ElInzCtrpsq9Z18PLKhYvmfWg',
        width: 1200,
        height: 630,
        alt: 'Testimoniale SMfit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sabinameruta',
    title: 'Testimoniale | SMfit',
    description: 'Descoperă poveștile de succes și transformările reale ale clienților SMfit.',
    images: ['https://uyy0kjad2n.ufs.sh/f/qhW01JguYVfwAaKQ1SZQ0b4ElInzCtrpsq9Z18PLKhYvmfWg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TestimonialeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}