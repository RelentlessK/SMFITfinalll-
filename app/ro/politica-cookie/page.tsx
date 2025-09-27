```tsx
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Cookie, Info, HelpCircle, ChevronRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

export default function PoliticaCookiePage() {
  const { t } = useTranslation(['common', 'pages']);

  const sections = [
    {
      id: 'ce-este-un-cookie',
      title: 'Ce este un Cookie?',
      label: 'Definiție',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            Un fișier cookie este un fișier text de mici dimensiuni, format din litere și numere, care va fi stocat pe computerul, terminalul mobil sau alte echipamente ale unui utilizator de pe care se accesează internetul. Cookie-ul este „pasiv" (nu conține programe software, viruși sau spyware și nu poate accesa informațiile de pe hard disk-ul utilizatorului).
          </p>
        </>
      ),
    },
    {
      id: 'functionalitatea-cookie-urilor',
      title: 'Funcționalitatea Cookie-urilor',
      label: 'Beneficii',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            Activarea cookie-urilor nu este strict necesară pentru funcționarea site-ului web, dar poate îmbunătăți semnificativ experiența dumneavoastră de navigare. Puteți șterge sau bloca cookie-urile, însă, dacă faceți acest lucru, este posibil ca unele funcționalități ale site-ului să nu funcționeze corect.
          </p>
          <p className="text-muted-foreground mb-4">
            Informațiile asociate cookie-urilor nu sunt utilizate pentru a vă identifica personal. În plus, noi controlăm datele referitoare la preferințele dumneavoastră de navigare. Cookie-urile nu sunt utilizate în alte scopuri decât cele descrise aici.
          </p>
        </>
      ),
    },
    {
      id: 'notificare-cookie-uri-suplimentare',
      title: 'Notificare Cookie-uri Suplimentare',
      label: 'Atenție',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            Unele dintre paginile sau sub-site-urile noastre pot utiliza cookie-uri suplimentare sau diferite față de cele descrise mai sus. În acest caz, veți găsi detalii despre cookie-uri pe paginile specifice. De asemenea, vi se poate cere consimțământul pentru stocarea acestora.
          </p>
        </>
      ),
    },
    {
      id: 'cum-functioneaza-cookie-urile',
      title: 'Cum funcționează Cookie-urile?',
      label: 'Mecanism',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            Aceste fișiere fac posibilă recunoașterea terminalului utilizatorului și prezentarea conținutului într-un mod relevant, adaptat preferințelor acestuia. Cookie-urile oferă servicii confortabile utilizatorilor, cum ar fi:
          </p>
          <ul className="list-none space-y-2 mb-4">
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 shrink-0 mt-0.5" />
              <span>Preferințe de confidențialitate online</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 shrink-0 mt-0.5" />
              <span>Coș de cumpărături și funcționalități conexe</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 shrink-0 mt-0.5" />
              <span>Publicitate relevantă și experiență personalizată</span>
            </li>
          </ul>
          <p className="text-muted-foreground mb-4">
            De asemenea, sunt utilizate în pregătirea statisticilor agregate anonime, care ne ajută să înțelegem modul în care un utilizator beneficiază de paginile noastre web, permițându-ne să îmbunătățim structura și conținutul acestora, excluzând identificarea dumneavoastră personală.
          </p>
        </>
      ),
    },
    {
      id: 'date-personale-si-securitate',
      title: 'Date Personale și Securitate',
      label: 'Confidențialitate',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            Cookie-urile în sine nu necesită informații personale pentru a fi utilizate și, în majoritatea cazurilor, nu identifică personal utilizatorii de internet. Datele personale colectate prin utilizarea cookie-urilor pot fi colectate doar pentru a facilita anumite funcționalități pentru utilizator. Astfel de date sunt criptate într-un mod care face imposibilă accesarea lor de către persoane neautorizate.
          </p>
        </>
      ),
    },
    {
      id: 'controlul-cookie-urilor',
      title: 'Controlul Cookie-urilor',
      label: 'Gestionare',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            Puteți controla și/sau șterge cookie-urile după cum doriți – pentru detalii, consultați site-ul{' '}
            <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
              aboutcookies.org
            </a>
            . Puteți șterge toate cookie-urile din computerul dumneavoastră și puteți seta majoritatea browserelor să blocheze plasarea acestora. Dacă faceți acest lucru, este posibil să fie necesar să setați manual unele preferințe de fiecare dată când vizitați site-ul web. De asemenea, unele servicii sau opțiuni ar putea să nu funcționeze.
          </p>
        </>
      ),
    },
  ];

  const faqItems = [
    {
      question: t('pages:cookie.faq.whatIsCookie'),
      answer: 'Un cookie este un fișier text mic stocat pe dispozitivul dumneavoastră, care ajută site-ul să funcționeze mai bine și să rețină preferințele dumneavoastră. Nu conține informații personale. Pentru mai multe detalii, consultați secțiunea "Ce este un Cookie?".',
      link: '#ce-este-un-cookie',
    },
    {
      question: t('pages:cookie.faq.disableCookies'),
      answer: 'Da, puteți dezactiva cookie-urile din setările browserului dumneavoastră. Rețineți însă că acest lucru poate afecta funcționalitatea site-ului. Pentru instrucțiuni, consultați secțiunea "Controlul Cookie-urilor".',
      link: '#controlul-cookie-urilor',
    },
    {
      question: t('pages:cookie.faq.privacyImpact'),
      answer: 'Cookie-urile în sine nu vă identifică personal. Ele ajută la personalizarea experienței dumneavoastră online și la colectarea de statistici anonime. Datele personale colectate prin cookie-uri sunt criptate. Mai multe informații găsiți în secțiunea "Date Personale și Securitate".',
      link: '#date-personale-si-securitate',
    },
  ];

  return (
    <div className="mt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-accent-100/50 dark:bg-accent-900/20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Politica de <span className="text-primary-600">Cookie-uri</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('pages:cookie.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Cookie Control Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary-100/20 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700/30 rounded-lg p-6 mb-12 flex items-start space-x-4"
            >
              <Cookie className="h-8 w-8 text-primary-600 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-primary-600 mb-2">Controlul Cookie-urilor</h2>
                <p className="text-muted-foreground mb-3">
                  Puteți gestiona preferințele cookie-urilor direct din setările browserului dumneavoastră. Pentru informații detaliate despre cum să ștergeți sau să blocați cookie-urile, vizitați{' '}
                  <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">
                    aboutcookies.org
                  </a>
                  .
                </p>
                <p className="text-sm text-muted-foreground">
                  Rețineți că restricționarea cookie-urilor poate afecta funcționalitatea anumitor părți ale site-ului.
                </p>
              </div>
            </motion.div>

            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-lg p-6 mb-12 shadow-sm"
            >
              <h2 className="text-xl font-bold mb-4">Cuprins</h2>
              <ul className="list-none space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      className="text-muted-foreground hover:text-primary-600 transition-colors text-base"
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {sections.map((section, index) => (
              <div key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                <div className="flex items-center mb-4">
                  <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase mr-3">
                    {section.label}
                  </span>
                  <h2 className="text-3xl font-bold">{section.title}</h2>
                </div>
                <div className="bg-accent-100/50 dark:bg-accent-900/20 p-6 rounded-lg">
                  {section.content}
                </div>
                {index < sections.length - 1 && <Separator className="my-12" />}
              </div>
            ))}

            {/* FAQ Section */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase mr-3">
                  FAQ
                </span>
                <h2 className="text-3xl font-bold">Întrebări Frecvente despre Cookie-uri</h2>
              </div>
              <Accordion type="single" collapsible className="w-full bg-accent-100/50 dark:bg-accent-900/20 p-6 rounded-lg">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-2">{item.answer}</p>
                      <Link href={item.link} className="text-primary-600 hover:underline flex items-center text-sm">
                        Citește mai mult <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Useful Resources */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase mr-3">
                  Resurse
                </span>
                <h2 className="text-3xl font-bold">Resurse Utile</h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 bg-accent-100/50 dark:bg-accent-900/20 p-6 rounded-lg">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a
                    href="https://www.cookiebot.com/en/tracking-cookies/?utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=cb_dm_ww_eng_dsa_search&utm_ad_group=ww-en-blog-en&gad_source=1&gad_campaignid=20754896841&gbraid=0AAAAABYXPmXIv0THTFiLfiR8TtiJHs6TG&gclid=CjwKCAjwlt7GBhAvEiwAKal0ci22tLLjA2QJdKDfKie8VevdTVsI4Ze4ffpsIvC3ZVfJFenUG3UuPhoC63sQAvD_BwE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Toate despre Cookie-uri <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <a
                    href="https://www.youronlinechoices.com/uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Alegerile Tale Online <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```