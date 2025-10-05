import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politică Cookie-uri — SMfit',
  description: 'Află cum SMfit utilizează cookie-urile pe site-ul nostru, inclusiv funcționalitatea, confidențialitatea și opțiunile de control. Informații detaliate pentru o navigare sigură.',
  alternates: {
    canonical: 'https://smfit.ro/ro/politica-cookie',
    languages: {
      'en': 'https://smfit.ro/cookie-policy',
      'ro': 'https://smfit.ro/ro/politica-cookie',
      'x-default': 'https://smfit.ro/ro/politica-cookie', // Default to Romanian
    },
  },
  openGraph: {
    title: 'Politică Cookie-uri — SMfit',
    description: 'Află cum SMfit utilizează cookie-urile pe site-ul nostru, inclusiv funcționalitatea, confidențialitatea și opțiunile de control. Informații detaliate pentru o navigare sigură.',
    url: 'https://smfit.ro/ro/politica-cookie',
    images: [
      {
        url: 'https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder image
        alt: 'SMfit Politică Cookie-uri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Politică Cookie-uri — SMfit',
    description: 'Află cum SMfit utilizează cookie-urile pe site-ul nostru, inclusiv funcționalitatea, confidențialitatea și opțiunile de control. Informații detaliate pentru o navigare sigură.',
    images: ['https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], // Placeholder image
  },
};

export default function PoliticaCookieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}