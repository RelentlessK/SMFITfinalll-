import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimoniale | SMfit',
  description: 'Descoperă poveștile de succes și transformările reale ale clienților SMfit. Vezi cum programele noastre personalizate de fitness și nutriție au schimbat vieți.',
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
    images: [
      {
        url: 'https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder image
        alt: 'Testimoniale SMfit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimoniale | SMfit',
    description: 'Descoperă poveștile de succes și transformările reale ale clienților SMfit.',
    images: ['https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], // Placeholder image
  },
};

export default function TestimonialeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}