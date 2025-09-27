'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Mail, Info, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

export default function TermsAndConditionsPage() {
  const { t } = useTranslation(['common', 'pages']);

  const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const sections = [
    {
      id: 'acceptance-of-terms',
      title: 'Acceptance of Terms',
      label: 'Introduction',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </>
      ),
    },
    {
      id: 'use-of-the-website',
      title: 'Use of the Website',
      label: 'Guidelines',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            This website is intended for use for informational and legitimate business purposes. You may not use the website for illegal or unauthorized activities.
          </p>
          <p className="text-muted-foreground mb-4">
            All information presented on this website is provided in good faith and for general informational purposes only. We make no warranties about the accuracy, reliability, or completeness of this information.
          </p>
        </>
      ),
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      label: 'Rights',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            The content of this website, including texts, images, logos, and design, is protected by copyright and other intellectual property rights. You may not reproduce, distribute, or use this content without our express permission.
          </p>
        </>
      ),
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of Liability',
      label: 'Important',
      content: (
        <>
          <div className="bg-primary-100/20 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700/30 rounded-lg p-4 mb-6 flex items-start space-x-3">
            <Info className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">Important Legal Notice</h3>
              <p className="text-muted-foreground text-sm">
                SMfit shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website. This includes, but is not limited to, loss of profits, data, or other intangible assets.
              </p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            Your use of the services and information on this site is at your own risk. We recommend consulting a specialist before making decisions based on the information presented here.
          </p>
        </>
      ),
    },
    {
      id: 'contact',
      title: 'Contact',
      label: 'Inquiries',
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            For questions regarding these terms and conditions, you can contact us at:
          </p>
          <div className="flex items-center space-x-3 mb-4">
            <Mail className="h-5 w-5 text-primary-600 shrink-0" />
            <a href="mailto:sabinaantrenor@gmail.com" className="text-muted-foreground hover:text-primary-600 transition">
              sabinaantrenor@gmail.com
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            We will respond to your inquiry as soon as possible.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="mt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-accent-100/50 dark:bg-accent-900/20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms and <span className="text-primary-600">Conditions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              {t('pages:terms.hero.subtitle')}
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdatedDate}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-lg p-6 mb-12 shadow-sm"
            >
              <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
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
          </div>
        </div>
      </section>
    </div>
  );
}