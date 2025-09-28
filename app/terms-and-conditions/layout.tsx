import { useTranslation } from 'react-i18next';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  // Get current language from browser (fallback to English)
  const currentLang = typeof window !== 'undefined' 
    ? (localStorage.getItem('i18nextLng') || 'en')
    : 'en';
  
  const isRomanian = currentLang === 'ro';
  
  return {
    title: isRomanian ? 'Termeni și Condiții — SMfit' : 'Terms and Conditions — SMfit',
    description: isRomanian 
      ? 'Termenii și condițiile de utilizare a site-ului SMfit. Citiți regulile noastre privind utilizarea site-ului, proprietatea intelectuală și limitarea răspunderii.'
      : 'Terms and conditions of using SMfit website. Read our rules regarding site use, intellectual property and liability.',
    alternates: {
      canonical: 'https://smfit.ro/terms-and-conditions',
      languages: {
        'en': 'https://smfit.ro/terms-and-conditions',
        'ro': 'https://smfit.ro/terms-and-conditions',
      },
    },
    openGraph: {
      title: isRomanian ? 'Termeni și Condiții — SMfit' : 'Terms and Conditions — SMfit',
      description: isRomanian
        ? 'Termenii și condițiile de utilizare a site-ului SMfit. Citiți regulile noastre privind utilizarea site-ului, proprietatea intelectuală și limitarea răspunderii.'
        : 'Terms and conditions of using SMfit website. Read our rules regarding site use, intellectual property and liability.',
      url: 'https://smfit.ro/terms-and-conditions',
    },
  };
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}