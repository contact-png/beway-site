'use client';

import Link from 'next/link';
import Container from '@/components/Container';
import { Globe, Smartphone, Laptop2 } from 'lucide-react';
import { useI18n } from '@/app/i18n';
import { useParams } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';

export default function OffersPage() {
  const { t } = useI18n();
  const { locale } = useParams() as { locale: string };
  const prefersReducedMotion = useReducedMotion();

  // Cards + merged "what we build" bullets per plan
  const plans = [
    {
      key: 'website',
      Icon: Globe,
      title: t('offers.website.title'),
      desc: t('offers.website.desc'),
      price: '49€',
      bullets: [
        t('offers.capabilities.website.b1'),
        t('offers.capabilities.website.b2'),
        t('offers.capabilities.website.b3'),
        t('offers.capabilities.website.b4'),
      ],
      popular: false,
    },
    {
      key: 'copilot',
      Icon: Smartphone,
      title: t('offers.copilot.title'),
      desc: t('offers.copilot.desc'),
      price: '249€',
      bullets: [
        t('offers.capabilities.ai.b1'),
        t('offers.capabilities.ai.b2'),
        t('offers.capabilities.ai.b3'),
        t('offers.capabilities.ai.b4'),
      ],
      popular: true, // Highlight this one
    },
    {
      key: 'custom',
      Icon: Laptop2,
      title: t('offers.custom.title'),
      desc: t('offers.custom.desc'),
      price: '999€',
      bullets: [
        t('offers.capabilities.apps.b1'),
        t('offers.capabilities.apps.b2'),
        t('offers.capabilities.apps.b3'),
        t('offers.capabilities.apps.b4'),
      ],
      popular: false,
    },
  ] as const;

  return (
    <main
      key={locale}
      className="relative bg-gradient-to-br from-[#F6FAFF] via-white to-[#F0F4FF] text-[#0E1B2C] pt-24 pb-10 px-4 md:px-8"
    >
      {/* HERO */}
      <section className="pt-8 md:pt-10 pb-8 md:pb-12">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            {/* Single H1 on this page */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {t('offers.title1')}{' '}
              <span className="bg-gradient-to-r from-[#1BC0FF] via-[#0A8DFF] to-[#0057FF] bg-clip-text text-transparent">
                {t('offers.title2')}
              </span>
            </h1>
            <p className="mt-3 text-[#6F8096]">{t('offers.subtitle')}</p>
          </div>
        </Container>
      </section>

      {/* OUR OFFERS (merged with “what we build” bullets) */}
      <section className="pb-2 md:pb-6">
        <Container>
          <div className="grid gap-6 xl:gap-8 md:grid-cols-3">
            {plans.map(({ key, Icon, title, desc, price, bullets, popular }, index) => (
              <motion.article
                key={key}
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.3 }}
                className={[
                  'relative rounded-3xl bg-white/95 p-8 ring-1 ring-black/5 shadow-lg transition',
                  'hover:-translate-y-1 hover:shadow-2xl',
                  popular ? 'outline outline-2 outline-sky-200/60' : '',
                ].join(' ')}
                aria-labelledby={`${key}-title`}
              >
                {/* Popular badge */}
                {popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs sm:text-[13px] font-semibold bg-gradient-to-r from-[#1BC0FF] to-[#0A8DFF] text-white shadow">
                    {t('offers.popular') || 'Popular Offer'}
                  </div>
                )}

                {/* Icon with soft glow */}
                <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1BC0FF] via-[#0A8DFF] to-[#0057FF] shadow-[0_12px_30px_rgba(10,141,255,.25)] relative before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:blur-2xl before:bg-sky-400/10">
                  <Icon className="h-7 w-7 text-white" aria-hidden />
                </div>

                <h2 id={`${key}-title`} className="text-2xl font-extrabold mb-2 text-[#0A142F] text-center">
                  {title}
                </h2>

                <p className="text-[#6F8096] leading-relaxed mb-4 text-center">{desc}</p>

                {/* Price */}
                <div className="mt-6 flex items-baseline justify-center gap-2">
                  <span className="text-3xl font-extrabold leading-none bg-gradient-to-r from-[#0A8DFF] to-[#00B4FF] bg-clip-text text-transparent">
                    {price}
                  </span>
                  <span className="text-[#6F8096] font-semibold">
                    {t('offers.price') /* e.g., "/month" */}
                  </span>
                </div>

                {/* Bullets (merged “what we build”) */}
                <ul className="mt-6 space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 text-[#0A8DFF]" aria-hidden>
                        <path
                          fill="currentColor"
                          d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                        />
                      </svg>
                      <span className="text-[#0E1B2C]">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-7 flex justify-center">
                  <Link
                    href="/contact"
                    className={[
                      'btn btn-primary h-11 px-5 text-sm w-full sm:w-auto',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60',
                    ].join(' ')}
                    aria-label={`${t('cta.start')} — ${title}`}
                  >
                    {t('cta.start')}
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

      
        </Container>
      </section>
    </main>
  );
}
