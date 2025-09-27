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

export default function CookiePolicyPage() {
  const { t } = useTranslation(['common', 'pages']);

  const sections = [
    {
      id: 'what-is-a-cookie',
      title: 'What is a Cookie?',
      label: 'Definition',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            A cookie is a small text file, consisting of letters and numbers, that will be stored on a user's computer, mobile device, or other equipment from which the internet is accessed. A cookie is "passive" (it does not contain software, viruses, or spyware and cannot access information on your hard drive).
          </p>
        </>
      ),
    },
    {
      id: 'cookie-functionality',
      title: 'Cookie Functionality',
      label: 'Benefits',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            Enabling cookies is not strictly necessary for the website to function, but it can significantly enhance your browsing experience. You can delete or block cookies, but if you do, some features of the website may not work properly.
          </p>
          <p className="text-muted-foreground mb-4">
            The information associated with cookies is not used to personally identify you. Additionally, we control the data regarding your browsing preferences. Cookies are not used for purposes other than those described here.
          </p>
        </>
      ),
    },
    {
      id: 'additional-cookies-notice',
      title: 'Additional Cookies Notice',
      label: 'Note',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            Some of our pages or sub-websites may use additional or different cookies than those described above. In such cases, you will find details about these cookies on the specific pages. You might also be asked for your consent regarding their storage.
          </p>
        </>
      ),
    },
    {
      id: 'how-do-cookies-work',
      title: 'How Do Cookies Work?',
      label: 'Mechanism',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            These files enable the recognition of the user's device and present content in a relevant way, adapted to the user's preferences. Cookies provide convenient services to users, such as:
          </p>
          <ul className="list-none space-y-2 mb-4">
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 shrink-0 mt-0.5" />
              <span>Online privacy preferences</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 shrink-0 mt-0.5" />
              <span>Shopping cart and related functionalities</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 shrink-0 mt-0.5" />
              <span>Relevant advertising and personalized experience</span>
            </li>
          </ul>
          <p className="text-muted-foreground mb-4">
            They are also used in the preparation of anonymous aggregated statistics, which help us understand how users interact with our web pages, allowing us to improve their structure and content, without personally identifying you.
          </p>
        </>
      ),
    },
    {
      id: 'personal-data-security',
      title: 'Personal Data & Security',
      label: 'Privacy',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            Cookies themselves do not require personal information to be used and, in most cases, do not personally identify internet users. Personal data collected through the use of cookies may only be collected to facilitate certain functionalities for the user. Such data is encrypted in a way that makes it impossible for unauthorized persons to access it.
          </p>
        </>
      ),
    },
    {
      id: 'cookie-control',
      title: 'Cookie Control',
      label: 'Management',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            You can control and/or delete cookies as you wish – for details, see the{' '}
            <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
              aboutcookies.org
            </a>{' '}
            website. You can delete all cookies from your computer and set most browsers to block their placement. If you do this, you may need to manually set some preferences each time you visit the website. Also, some services or options may not work.
          </p>
        </>
      ),
    },
  ];

  const faqItems = [
    {
      question: t('pages:cookie.faq.whatIsCookie'),
      answer: 'A cookie is a small text file stored on your device that helps the website function better and remember your preferences. It does not contain personal information. For more details, see the "What is a Cookie?" section.',
      link: '#what-is-a-cookie',
    },
    {
      question: t('pages:cookie.faq.disableCookies'),
      answer: 'Yes, you can disable cookies through your browser settings. However, please note that this may affect the website\'s functionality. For instructions, refer to the "Cookie Control" section.',
      link: '#cookie-control',
    },
    {
      question: t('pages:cookie.faq.privacyImpact'),
      answer: 'Cookies themselves do not personally identify you. They help personalize your online experience and collect anonymous statistics. Personal data collected via cookies is encrypted. Find more information in the "Personal Data & Security" section.',
      link: '#personal-data-security',
    },
  ];

  return (
    <div className="mt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-accent-100/50 dark:bg-accent-900/20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cookie <span className="text-primary-600">Policy</span>
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
                <h2 className="text-xl font-bold text-primary-600 mb-2">Cookie Control</h2>
                <p className="text-muted-foreground mb-3">
                  You can manage your cookie preferences directly through your browser settings. For detailed information on how to delete or block cookies, visit{' '}
                  <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">
                    aboutcookies.org
                  </a>
                  .
                </p>
                <p className="text-sm text-muted-foreground">
                  Please note that restricting cookies may affect the functionality of certain parts of the website.
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
              <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
              <ul className="list-none space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <Link
                      href={\`#${section.id}`}
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
                <h2 className="text-3xl font-bold">Frequently Asked Questions about Cookies</h2>
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
                        Read more <ChevronRight className="h-4 w-4 ml-1" />
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
                  Resources
                </span>
                <h2 className="text-3xl font-bold">Useful Resources</h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 bg-accent-100/50 dark:bg-accent-900/20 p-6 rounded-lg">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a
                    href="https://www.cookiebot.com/en/tracking-cookies/?utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=cb_dm_ww_eng_dsa_search&utm_ad_group=ww-en-blog-en&gad_source=1&gad_campaignid=20754896841&gbraid=0AAAAABYXPmXIv0THTFiLfiR8TtiJHs6TG&gclid=CjwKCAjwlt7GBhAvEiwAKal0ci22tLLjA2QJdKDfKie8VevdTVsI4Ze4ffpsIvC3ZVfJFenUG3UuPhoC63sQAvD_BwE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    All About Cookies <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <a
                    href="https://www.youronlinechoices.com/uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Your Online Choices <ExternalLink className="ml-2 h-4 w-4" />
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