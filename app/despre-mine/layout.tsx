import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Despre Mine | SMfit',
  description: 'Află mai multe despre Sabina Meruță, fondatoarea SMfit și antrenoare personală certificată internațional cu peste 2 ani de experiență în fitness și nutriție.',
  alternates: {
    canonical: 'https://smfit.ro/despre-mine',
    languages: {
      'en': 'https://smfit.ro/despre-mine',
      'ro': 'https://smfit.ro/ro/despre-mine',
      'x-default': 'https://smfit.ro/ro/despre-mine', // Default to Romanian
    },
  },
  openGraph: {
    title: 'Despre Mine | SMfit',
    description: 'Află mai multe despre Sabina Meruță, fondatoarea SMfit și antrenoare personală certificată internațional cu experiență în fitness și nutriție personalizată.',
    url: 'https://smfit.ro/despre-mine',
    type: 'profile',
    locale: 'ro_RO',
    siteName: 'SMfit',
    images: [
      {
        url: 'https://zbm5woa3iy.ufs.sh/f/1fxqa6mYldrzIHtMnqPdT6jBgrS4sYH1pVnizlaZhcePyuNW',
        width: 1200,
        height: 630,
        alt: 'Sabina Meruță - Antrenor Personal SMfit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Despre Mine | SMfit',
    description: 'Află mai multe despre Sabina Meruță, fondatoarea SMfit și antrenoare personală certificată internațional cu experiență în fitness și nutriție personalizată.',
    images: ['https://zbm5woa3iy.ufs.sh/f/1fxqa6mYldrzIHtMnqPdT6jBgrS4sYH1pVnizlaZhcePyuNW'],
  },
  keywords: ['Sabina Meruță', 'antrenor personal', 'SMfit', 'fitness trainer', 'nutriționist', 'certificări fitness', 'Târgu Mureș'],
  robots: {
    index: true,
    follow: true,
  },
};

export default function DespreMineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}