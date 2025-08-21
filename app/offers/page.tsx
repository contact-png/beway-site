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
      cta: t('cta.website') || 'Lancer mon site',
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
      cta: t('cta.copilot') || 'Activer mon copilote IA',
      popular: true,
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
      cta: t('cta.custom') || 'Construire mon app',
      popular: false,
    },
  ] as const;

  return (
    <main
      key={locale}
      className="relative bg-gradient-to-br from-[#F6FAFF] via-white to-[#F0F4FF] text-[#0E1B2C] pt-24 pb-12 px-4 md:px-8"
    >
      {/* HERO */}
      <section className="pt-8 md:pt-10 pb-6 md:pb-10">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {t('offers.title1')}{' '}
              <span className="bg-gradient-to-r from-[#1BC0FF] via-[#0A8DFF] to-[#0057FF] bg-clip-text text-transparent">
                {t('offers.title2')}
              </span>
            </h1>
            <p className="mt-3 text-[#6F8096]">{t('offers.subtitle')}</p>
          </div>

          {/* FREE CONSULTATION STRIP */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 md:mt-8"
          >
            <div className="mx-auto max-w-4xl rounded-2xl border border-sky-100 bg-white/80 backdrop-blur px-4 py-4 md:px-6 md:py-5 shadow-sm flex flex-col md:flex-row items-center gap-3 md:gap-6">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#1BC0FF] to-[#0A8DFF] px-3 py-1 text-xs font-semibold text-white shadow">
                {t('offers.freeBadge') || 'Consultation gratuite'}
              </span>
              <p className="text-sm md:text-base text-center md:text-left text-[#0E1B2C]">
                {t('offers.freeLine') ||
                  'Démarrez par un call de 20 min : cadrage, faisabilité et recommandations.'}
              </p>
              <div className="md:ml-auto">
                <Link
                  href="/contact?type=free-consultation"
                  className="h-11 inline-flex items-center justify-center rounded-xl bg-[#0A8DFF] px-5 text-white font-semibold shadow hover:brightness-110 transition"
                >
                  {t('cta.free') || 'Réserver — 0€'}
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* OUR OFFERS */}
      <section className="pb-2 md:pb-6">
        <Container>
          <div className="grid gap-6 xl:gap-8 md:grid-cols-3">
            {plans.map(({ key, Icon, title, desc, price, bullets, popular, cta }, index) => (
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
                {popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs sm:text-[13px] font-semibold bg-gradient-to-r from-[#1BC0FF] to-[#0A8DFF] text-white shadow">
                    {t('offers.popular') || 'Offre populaire'}
                  </div>
                )}

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
                    {locale === 'fr' ? '/mois' : t('offers.price') || '/month'}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="mt-6 space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 text-[#0A8DFF]" aria-hidden>
                        <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                      </svg>
                      <span className="text-[#0E1B2C]">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-7 flex flex-col items-center gap-2">
                  <Link
                    href={`/contact?plan=${key}`}
                    className="h-11 inline-flex items-center justify-center rounded-xl bg-[#0A8DFF] px-5 text-white font-semibold shadow hover:brightness-110 transition w-full sm:w-auto"
                    aria-label={`${t('cta.start') || 'Commencer'} — ${title}`}
                  >
                    {cta}
                  </Link>

                  {/* lien secondaire (remplace le bouton) */}
                  <Link
                    href={`/contact?plan=${key}&type=free-consultation`}
                    className="text-[#0A8DFF] font-medium text-sm hover:underline underline-offset-4"
                    aria-label={`Consultation gratuite — ${title}`}
                  >
                    {t('offers.free') || 'Consultation gratuite'}
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Differentiators */}
          <div className="mt-10 text-center text-sm text-[#6F8096]">
            <p>
              {t('offers.diffs') ||
                'Aucun frais de mise en place · Abonnement mensuel fixe · Résiliable à tout moment · Propriété complète du code'}
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
