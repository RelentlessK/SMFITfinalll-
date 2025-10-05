import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termeni Condiții — SMfit',
  description: 'Citește termenii și condițiile care guvernează utilizarea site-ului și serviciilor SMfit. Informații esențiale despre reguli, drepturi și limitări de răspundere.',
  alternates: {
    canonical: 'https://smfit.ro/ro/termeni-si-conditii',
    languages: {
      'en': 'https://smfit.ro/terms-and-conditions',
      'ro': 'https://smfit.ro/ro/termeni-si-conditii',
      'x-default': 'https://smfit.ro/ro/termeni-si-conditii', // Default to Romanian
    },
  },
  openGraph: {
    title: 'Termeni Condiții — SMfit',
    description: 'Citește termenii și condițiile care guvernează utilizarea site-ului și serviciilor SMfit. Informații esențiale despre reguli, drepturi și limitări de răspundere.',
    url: 'https://smfit.ro/ro/termeni-si-conditii',
    images: [
      {
        url: 'https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder image
        alt: 'SMfit Termeni Condiții',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Termeni Condiții — SMfit',
    description: 'Citește termenii și condițiile care guvernează utilizarea site-ului și serviciilor SMfit. Informații esențiale despre reguli, drepturi și limitări de răspundere.',
    images: ['https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], // Placeholder image
  },
};

export default function TermeniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}