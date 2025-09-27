```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termeni și Condiții — SMfit',
  description: 'Termenii și condițiile de utilizare a site-ului SMfit. Citiți regulile noastre privind utilizarea site-ului, proprietatea intelectuală și limitarea răspunderii.',
  alternates: {
    canonical: 'https://smfit.ro/ro/termeni-si-conditii',
    languages: {
      'en': 'https://smfit.ro/terms-and-conditions',
      'ro': 'https://smfit.ro/ro/termeni-si-conditii',
    },
  },
  openGraph: {
    title: 'Termeni și Condiții — SMfit',
    description: 'Termenii și condițiile de utilizare a site-ului SMfit. Citiți regulile noastre privind utilizarea site-ului, proprietatea intelectuală și limitarea răspunderii.',
    url: 'https://smfit.ro/ro/termeni-si-conditii',
  },
};

export default function TermeniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```