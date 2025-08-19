'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants, Transition } from 'framer-motion';
import { useI18n } from './i18n';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    } as Transition,
  }),
};

export default function HomePage() {
  const { t } = useI18n();

  return (
    <main className="relative pt-16 text-[#0E1B2C] overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#00B4FF] via-[#0A8DFF] to-[#0047AB] text-white px-4 sm:px-6 md:px-8 overflow-hidden"
        id="home"
      >
        {/* Images de fond */}
        <Image
          src="/face.png"
          alt="Face"
          fill
          priority
          className="absolute object-cover object-left -z-10 hidden sm:block"
          style={{
            transform: 'translateX(-60%)',
            maskImage: 'linear-gradient(to right, black 55%, transparent 95%)',
            WebkitMaskImage: 'linear-gradient(to right, black 55%, transparent 95%)',
          }}
        />
        <Image
          src="/robot.png"
          alt="Robot"
          fill
          className="absolute object-cover object-right -z-20 hidden sm:block"
          style={{
            transform: 'translateX(65%)',
            maskImage: 'linear-gradient(to left, black 55%, transparent 95%)',
            WebkitMaskImage: 'linear-gradient(to left, black 55%, transparent 95%)',
          }}
        />

        {/* Texte HERO */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative text-center max-w-4xl space-y-6"
        >
          <p className="tracking-widest text-sm font-semibold text-white/70 uppercase">
            {t('home.hero.kicker')}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span>{t('home.hero.titleGradient')}</span>
            <br />
            <span className="text-[#A4D8FF]">{t('home.hero.titleSuffix')}</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#A4D8FF]">
            {t('home.hero.sub')} <span className="text-white">{t('home.hero.subAccent')}</span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 px-2 max-w-xl mx-auto">
            {t('home.hero.desc')}
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {['scope', 'fixed', 'ownership'].map((k) => (
              <span
                key={k}
                className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs sm:text-sm font-medium bg-white/90 text-[#0E1B2C] shadow"
              >
                {t(`home.badges.${k}`)}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <Link
              href="/contact"
              className="px-6 py-2 sm:px-7 sm:py-3 text-base sm:text-lg font-bold rounded-xl bg-gradient-to-r from-[#00B4FF] to-[#0047AB] text-white shadow-lg hover:opacity-90 transition"
            >
              {t('cta.start')} →
            </Link>
            <Link
              href="#offers"
              className="px-6 py-2 sm:px-7 sm:py-3 text-base sm:text-lg font-bold rounded-xl border border-white text-white hover:bg-white hover:text-[#0047AB] transition"
            >
              {t('cta.seeOffers')}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* OFFRES */}
      <section className="py-16 sm:py-24 bg-[#F6FAFF]" id="offers">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold">{t('home.offersTitle')}</h2>
          <p className="mt-2 text-[#6F8096] text-sm sm:text-base">
            Tech delivery on subscription. Fixed scope, fixed fee.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6">
          {[
            { name: 'Website', price: '50', img: '/images/offers/website.jpg', desc: t('offers.website.desc') },
            { name: 'AI Copilot', price: '249', img: '/images/offers/ai-copilot.jpg', desc: t('offers.copilot.desc') },
            { name: 'Custom Apps', price: '999', img: '/images/offers/apps.jpg', desc: t('offers.custom.desc') },
          ].map((o, i) => (
            <motion.div
              key={i}
              className="card bg-white flex flex-col p-5 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={o.img}
                  alt={o.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-bold">{o.name}</h3>
              <p className="text-sm text-[#6F8096] my-2">{o.desc}</p>
              <p className="mt-auto text-sm text-[#6F8096]">from €{o.price}/mo</p>
              <div className="mt-4 flex gap-2">
                <Link href="/offers" className="btn btn-outline">{t('cta.details')}</Link>
                <Link href="/contact" className="btn btn-primary">{t('cta.start')}</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold">{t('home.how.title')}</h2>
          <p className="mt-2 text-[#6F8096] text-sm sm:text-base">{t('home.hero.desc')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 sm:px-6">
          {['s1', 's2', 's3'].map((s, i) => (
            <motion.div
              key={s}
              className="card bg-[#F9FBFF] p-5 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-base font-semibold mb-1">{t(`home.how.${s}.title`)}</h3>
              <p className="text-sm text-[#6F8096]">{t(`home.how.${s}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-16 sm:py-24 bg-[#EFF4FB]">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold">{t('home.value.title')}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6">
          {[1, 2, 3, 4].map((n, i) => (
            <motion.div
              key={n}
              className="card bg-white p-5 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="font-semibold mb-1">{t(`home.value.v${n}.t`)}</h3>
              <p className="text-sm text-[#6F8096]">{t(`home.value.v${n}.d`)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white" id="contact">
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold">FAQ</h2>
        </div>

        <div className="mx-auto max-w-3xl px-4">
          {[1, 2, 3, 4, 5].map((q, i) => (
            <details key={i} className="mb-4 rounded-xl border border-black/5 p-4 open:bg-black/[0.02]">
              <summary className="cursor-pointer font-medium text-sm sm:text-base">
                {t(`home.faq.q${q}.q`)}
              </summary>
              <p className="mt-2 text-sm text-[#6F8096]">{t(`home.faq.q${q}.a`)}</p>
            </details>
          ))}
        </div>

        <div className="pt-8 text-center">
          <Link href="/contact" className="btn btn-primary">{t('cta.start')} →</Link>
        </div>
      </section>

    {/* Bouton WhatsApp flottant (mobile uniquement) */}
<Link
  href="https://wa.me/33643678864" // remplace par ton numéro au format international sans +
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4 z-50 sm:hidden bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1ebc59] transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.77 11.77 0 0012.01.5a11.5 11.5 0 00-10.5 16.67L.5 23.5l6.49-1.89A11.5 11.5 0 0012 23.5a11.51 11.51 0 008.16-19.99zm-8.5 17.5a9.6 9.6 0 01-4.9-1.34l-.35-.2-3.85 1.12 1.15-3.74-.24-.39a9.54 9.54 0 1117.01-5.53 9.58 9.58 0 01-9.82 10.08zM17 14.35c-.29-.14-1.71-.84-1.97-.94s-.46-.14-.65.14-.75.94-.92 1.13-.34.21-.63.07a7.86 7.86 0 01-2.31-1.43 8.58 8.58 0 01-1.6-2.02c-.17-.29 0-.45.13-.6s.29-.34.43-.51a2.06 2.06 0 00.29-.48.54.54 0 00-.03-.51c-.07-.14-.65-1.56-.89-2.14s-.46-.49-.65-.5h-.55a1.07 1.07 0 00-.78.36 3.27 3.27 0 00-1 2.44 5.69 5.69 0 001.2 2.71 13 13 0 005.03 4.63 11.7 11.7 0 001.39.52 3.31 3.31 0 001.52.1 2.55 2.55 0 001.67-1.19 2.12 2.12 0 00.15-1.2c-.06-.1-.24-.16-.53-.3z" />
  </svg>
</Link>
    </main>
  );
}
