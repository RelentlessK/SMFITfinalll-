import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy — SMfit',
  description: 'Learn how SMfit uses cookies on our website, including functionality, privacy, and control options. Detailed information for secure browsing.',
  alternates: {
    canonical: 'https://smfit.ro/cookie-policy',
    languages: {
      'en': 'https://smfit.ro/cookie-policy',
      'ro': 'https://smfit.ro/ro/politica-cookie',
      'x-default': 'https://smfit.ro/ro/politica-cookie', // Default to Romanian
    },
  },
  openGraph: {
    title: 'Cookie Policy — SMfit',
    description: 'Learn how SMfit uses cookies on our website, including functionality, privacy, and control options. Detailed information for secure browsing.',
    url: 'https://smfit.ro/cookie-policy',
    images: [
      {
        url: 'https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder image
        alt: 'SMfit Cookie Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy — SMfit',
    description: 'Learn how SMfit uses cookies on our website, including functionality, privacy, and control options. Detailed information for secure browsing.',
    images: ['https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], // Placeholder image
  },
};

export default function CookieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}