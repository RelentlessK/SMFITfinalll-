import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions — SMfit',
  description: 'Read the terms and conditions governing the use of the SMfit website and services. Essential information about rules, rights, and limitations of liability.',
  alternates: {
    canonical: 'https://smfit.ro/terms-and-conditions',
    languages: {
      'en': 'https://smfit.ro/terms-and-conditions',
      'ro': 'https://smfit.ro/ro/termeni-si-conditii',
      'x-default': 'https://smfit.ro/ro/termeni-si-conditii', // Default to Romanian
    },
  },
  openGraph: {
    title: 'Terms and Conditions — SMfit',
    description: 'Read the terms and conditions governing the use of the SMfit website and services. Essential information about rules, rights, and limitations of liability.',
    url: 'https://smfit.ro/terms-and-conditions',
    images: [
      {
        url: 'https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder image
        alt: 'SMfit Terms and Conditions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions — SMfit',
    description: 'Read the terms and conditions governing the use of the SMfit website and services. Essential information about rules, rights, and limitations of liability.',
    images: ['https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], // Placeholder image
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}