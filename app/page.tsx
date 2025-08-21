'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from './i18n';
import {
  ClipboardCheck,
  Wrench,
  ShieldCheck,
  Sparkles,
  Gauge,
  Handshake,
  ChevronDown,
} from 'lucide-react';

// --- Steps (How it works)
const steps = [
  { key: 's1', Icon: ClipboardCheck }, // Define the scope
  { key: 's2', Icon: Wrench },         // Build & manage
  { key: 's3', Icon: ShieldCheck },    // Own your code
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function HomePage() {
  const { t } = useI18n();

  return (
    <main className="relative pt-0 text-[#0E1B2C]">{/* pt-18 n'existe pas en Tailwind par défaut */}
      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#00B4FF] via-[#0A8DFF] to-[#0047AB] text-white px-4 pt-24 pb-16 sm:pt-32 overflow-hidden"
        id="home"
      >
        {/* IMAGE GAUCHE - desktop only */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 hidden sm:block"
        >
          <Image
            src="/face.png"
            alt="Background face"
            fill
            className="object-cover object-left"
            style={{
              transform: 'translateX(-50%)',
              maskImage: 'linear-gradient(to right, black 55%, transparent 95%)',
              WebkitMaskImage: 'linear-gradient(to right, black 55%, transparent 95%)',
            }}
          />
        </motion.div>

        {/* IMAGE DROITE - desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-10 hidden sm:block"
        >
          <Image
            src="/robot.png"
            alt="Robot face"
            fill
            className="object-cover object-right"
            style={{
              transform: 'translateX(55%)',
              maskImage: 'linear-gradient(to left, black 55%, transparent 95%)',
              WebkitMaskImage: 'linear-gradient(to left, black 55%, transparent 95%)',
            }}
          />
        </motion.div>

        {/* TEXTE HERO */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.6, ease: 'easeOut' },
            },
          }}
          className="relative z-20 text-center max-w-xl space-y-6 sm:space-y-8"
        >
          <p className="tracking-widest text-xs sm:text-sm font-semibold text-white/70 uppercase">
            {t('home.hero.kicker')}
          </p>

          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight sm:leading-tight text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            <span>{t('home.hero.titleGradient')}</span>
            <br />
            <span className="text-[#C2DCFF] text-3xl sm:text-5xl">{t('home.hero.titleSuffix')}</span>
          </h1>

          <h2 className="text-xl sm:text-3xl font-bold text-[#C2DCFF] drop-shadow-sm">
            {t('home.hero.sub')} <span className="text-white">{t('home.hero.subAccent')}</span>
          </h2>

          <p className="text-sm sm:text-lg text-white/80">{t('home.hero.desc')}</p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-bold rounded-xl bg-gradient-to-r from-[#00B4FF] to-[#0047AB] text-white shadow-lg hover:opacity-90 transition"
            >
              {t('cta.start')} →
            </Link>
            <Link
              href="#offers"
              className="px-7 py-3 text-lg font-bold rounded-xl border border-white text-white transition duration-300 hover:bg-white hover:text-[#0047AB] hover:shadow-lg"
            >
              {t('cta.seeOffers')}
            </Link>
          </div>

          <p className="text-xs text-white/70 text-center mt-2">
            {t('cta.finisher')}
          </p>
        </motion.div>
      </section>

      {/* OFFRES */}
      <section id="offers" className="py-24 bg-[#F6FAFF]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {t('home.offersTitle')}
            </h2>
            <p className="mt-3 text-[#6F8096]">
              {t('home.hero.offerssubTitle')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: 'Website',     price: '50',  img: '/images/offers/website.jpg',    desc: t('offers.website.desc') },
              { name: 'AI Copilot',  price: '249', img: '/images/offers/ai-copilot.jpg', desc: t('offers.copilot.desc') },
              { name: 'Custom Apps', price: '999', img: '/images/offers/apps.jpg',       desc: t('offers.custom.desc') },
            ].map((o, i) => (
              <motion.article
                key={o.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
                className="group relative rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-black/5 shadow-sm hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <div className="aspect-[16/9] w-full relative">
                    <Image
                      src={o.img}
                      alt={o.name}
                      fill
                      priority={i === 0}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  {/* Price badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center rounded-full bg-white/90 text-[#0A142F] px-3 py-1 text-xs font-semibold ring-1 ring-black/5 shadow-sm">
                      €{o.price}/mo
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col min-h-[260px] relative z-10">
                  <h3 className="text-xl font-extrabold text-[#0A142F]">{o.name}</h3>
                  <p className="mt-2 text-[#6F8096] leading-relaxed">{o.desc}</p>

                  {/* CTA */}
                  <div className="mt-auto pt-5 flex gap-2">
                    <Link
                      href="/offers"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg border border-[#0047AB]/30 text-[#0047AB] hover:bg-[#0047AB] hover:text-white transition"
                      aria-label={`${o.name} - ${t('cta.details')}`}
                    >
                      {t('cta.details')}
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold rounded-lg bg-gradient-to-r from-[#00B4FF] to-[#0047AB] text-white shadow hover:opacity-90 transition"
                      aria-label={`${o.name} - ${t('cta.start')}`}
                    >
                      {t('cta.start')} →
                    </Link>
                  </div>
                </div>

                {/* Hover lift (decorative, non interactif) */}
                <div className="absolute inset-0 rounded-2xl scale-[0.985] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition will-change-transform pointer-events-none" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-24 bg-white" id="how">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">{t('home.how.title')}</h2>
            <p className="mt-2 text-[#6F8096]">{t('home.hero.desc')}</p>
          </div>

          <div className="relative">
            {/* Ligne mobile verticale */}
            <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-[2px] bg-[#E8EEF7] rounded">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="origin-top w-full h-full bg-gradient-to-b from-[#00B4FF] to-[#0047AB] rounded"
              />
            </div>

            {/* Ligne desktop horizontale */}
            <div className="hidden md:block absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-[#E8EEF7] rounded">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="origin-left h-full w-full bg-gradient-to-r from-[#00B4FF] to-[#0047AB] rounded"
              />
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8 relative">
              {steps.map(({ key, Icon }, i) => (
                <motion.article
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                  className="relative bg-[#F9FBFF] p-6 md:p-7 rounded-2xl shadow-[0_8px_24px_rgba(10,20,47,0.06)] ring-1 ring-black/5 hover:-translate-y-1 hover:shadow-xl hover:ring-[#0047AB]/15 transition-all"
                  aria-labelledby={`how-step-${i + 1}`}
                >
                  {/* Pastille numérotée */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00B4FF] to-[#0047AB] text-white text-sm font-bold shadow">
                      {i + 1}
                    </span>
                  </div>

                  <div className="mb-3 mt-4 md:mt-2 text-[#0047AB]">
                    <Icon aria-hidden className="h-6 w-6" />
                  </div>

                  <h3 id={`how-step-${i + 1}`} className="text-lg font-extrabold mb-1 text-[#0A142F]">
                    {t(`home.how.${key}.title`)}
                  </h3>
                  <p className="text-[#6F8096] leading-relaxed">
                    {t(`home.how.${key}.desc`)}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-[#00B4FF] to-[#0047AB] text-white shadow hover:opacity-90 transition"
            >
              {t('cta.start')} →
            </Link>
          </div>
        </div>
      </section>

      {/* VALEURS (premium) */}
      <section className="py-24 bg-[#EFF4FB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">{t('home.value.title')}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((n, i) => {
              const Icon = [ShieldCheck, Sparkles, Gauge, Handshake][i % 4];
              return (
                <motion.article
                  key={n}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  custom={i + 1}
                  className="rounded-2xl bg-white p-6 md:p-7 shadow-[0_10px_30px_rgba(10,20,47,0.06)] ring-1 ring-black/5 hover:-translate-y-1 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00B4FF] to-[#0047AB] text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-extrabold text-[#0A142F]">
                        {t(`home.value.v${n}.t`)}
                      </h3>
                      <p className="mt-1.5 text-[#6F8096] leading-relaxed">
                        {t(`home.value.v${n}.d`)}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ (premium) */}
      <section className="py-24 bg-white" id="contact">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">FAQ</h2>
          </div>

          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((q, i) => (
              <motion.details
                key={q}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i + 1}
                className="group rounded-2xl border border-black/5 bg-white p-0 open:bg-black/[0.02] overflow-hidden"
              >
                <summary className="flex items-center gap-3 cursor-pointer list-none px-5 py-4 font-semibold text-[#0A142F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4FF] rounded-2xl">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#00B4FF] to-[#0047AB] text-white text-sm">
                    {i + 1}
                  </span>
                  <span className="flex-1">{t(`home.faq.q${q}.q`)}</span>
                  <ChevronDown className="h-5 w-5 text-[#6F8096] transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <div className="px-5 pb-5 pt-0 -mt-1">
                  <p className="text-[#6F8096] leading-relaxed">
                    {t(`home.faq.q${q}.a`)}
                  </p>
                </div>
              </motion.details>
            ))}
          </div>

          <div className="pt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-[#00B4FF] to-[#0047AB] text-white shadow hover:opacity-90 transition"
            >
              {t('cta.start')} →
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp Button - only on mobile */}
      <a
        href="https://wa.me/33612345678" // ← remplace par ton numéro au format international sans '+'
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 block sm:hidden bg-green-500 p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
        aria-label="Contact us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="28" height="28">
          <path d="M20.52 3.48A11.83 11.83 0 0012 0a11.83 11.83 0 00-8.52 3.48A11.83 11.83 0 000 12c0 2.1.54 4.13 1.57 5.94L0 24l6.19-1.63A11.83 11.83 0 0012 24a11.83 11.83 0 008.52-3.48A11.83 11.83 0 0024 12a11.83 11.83 0 00-3.48-8.52zM12 21.46a9.49 9.49 0 01-4.87-1.31l-.35-.2-3.68.97.98-3.58-.23-.37A9.52 9.52 0 1121.46 12 9.52 9.52 0 0112 21.46zm5.27-7.54l-1.46-.71a.99.99 0 00-1.05.07l-.92.69a8.19 8.19 0 01-3.74-3.74l.69-.92a1 1 0 00.07-1.05l-.71-1.46a1 1 0 00-1.19-.52c-1.01.34-2.13 1.3-2.13 3.13 0 3.3 3.04 6.34 6.34 6.34 1.83 0 2.79-1.12 3.13-2.13a1 1 0 00-.52-1.19z" />
        </svg>
      </a>
    </main>
  );
}
