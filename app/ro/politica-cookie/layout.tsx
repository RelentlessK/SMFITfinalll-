```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politica de Cookie-uri — SMfit',
  description: 'Informații despre cookie-urile utilizate pe site-ul SMfit, modul lor de funcționare și cum le puteți controla.',
  alternates: {
    canonical: 'https://smfit.ro/ro/politica-cookie',
    languages: {
      'en': 'https://smfit.ro/cookie-policy',
      'ro': 'https://smfit.ro/ro/politica-cookie',
    },
  },
  openGraph: {
    title: 'Politica de Cookie-uri — SMfit',
    description: 'Informații despre cookie-urile utilizate pe site-ul SMfit, modul lor de funcționare și cum le puteți controla.',
    url: 'https://smfit.ro/ro/politica-cookie',
  },
};

export default function PoliticaCookieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```