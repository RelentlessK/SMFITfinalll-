import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  // Get current language from browser (fallback to English)
  const currentLang = typeof window !== 'undefined' 
    ? (localStorage.getItem('i18nextLng') || 'en')
    : 'en';
  
  const isRomanian = currentLang === 'ro';
  
  return {
    title: isRomanian ? 'Politica de Cookie-uri — SMfit' : 'Cookie Policy — SMfit',
    description: isRomanian
      ? 'Informații despre cookie-urile utilizate pe site-ul SMfit, modul lor de funcționare și cum le puteți controla.'
      : 'Information about cookies used on the SMfit site, how they work and how to control them.',
    alternates: {
      canonical: 'https://smfit.ro/cookie-policy',
      languages: {
        'en': 'https://smfit.ro/cookie-policy',
        'ro': 'https://smfit.ro/cookie-policy',
      },
    },
    openGraph: {
      title: isRomanian ? 'Politica de Cookie-uri — SMfit' : 'Cookie Policy — SMfit',
      description: isRomanian
        ? 'Informații despre cookie-urile utilizate pe site-ul SMfit, modul lor de funcționare și cum le puteți controla.'
        : 'Information about cookies used on the SMfit site, how they work and how to control them.',
      url: 'https://smfit.ro/cookie-policy',
    },
  };
}

export default function CookieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}