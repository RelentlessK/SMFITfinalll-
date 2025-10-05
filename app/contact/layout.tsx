import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | SMfit',
  description: 'Contactează SMfit pentru a începe călătoria ta de transformare. Completează formularul de contact sau sună direct pentru consultații personalizate de fitness și nutriție.',
  alternates: {
    canonical: 'https://smfit.ro/contact',
    languages: {
      'en': 'https://smfit.ro/contact',
      'ro': 'https://smfit.ro/ro/contact',
      'x-default': 'https://smfit.ro/ro/contact', // Default to Romanian
    },
  },
  openGraph: {
    title: 'Contact | SMfit',
    description: 'Contactează SMfit pentru a începe călătoria ta de transformare. Consultații personalizate de fitness și nutriție în Târgu Mureș.',
    url: 'https://smfit.ro/contact',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'SMfit',
    images: [
      {
        url: 'https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        width: 1200,
        height: 630,
        alt: 'Contact SMfit - Antrenamente Personalizate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | SMfit',
    description: 'Contactează SMfit pentru a începe călătoria ta de transformare. Consultații personalizate de fitness și nutriție în Târgu Mureș.',
    images: ['https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
  },
  keywords: ['contact SMfit', 'consultații fitness', 'antrenor personal Târgu Mureș', 'programare antrenament', 'nutriție personalizată contact'],
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}