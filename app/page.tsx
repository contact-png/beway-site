'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from './i18n';

export default function HomePage() {
  const { t } = useI18n();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <main className="relative pt-18 text-[#0E1B2C]">
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00B4FF] via-[#0A8DFF] to-[#0047AB] text-white px-4 overflow-hidden"
        id="home"
      >
        {/* IMAGE GAUCHE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-10"
        >
          <Image
            src="/face.png"
            alt="Background face"
            fill
            className="object-cover object-left"
            style={{
              transform: 'translateX(-60%)',
              maskImage: 'linear-gradient(to right, black 55%, transparent 95%)',
              WebkitMaskImage: 'linear-gradient(to right, black 55%, transparent 95%)',
            }}
          />
        </motion.div>

        {/* IMAGE DROITE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/robot.png"
            alt="Robot face"
            fill
            className="object-cover object-right"
            style={{
              transform: 'translateX(65%)',
              maskImage: 'linear-gradient(to left, black 55%, transparent 95%)',
              WebkitMaskImage: 'linear-gradient(to left, black 55%, transparent 95%)',
            }}
          />
        </motion.div>

        {/* TEXTE HERO */}
        <motion.div
  custom={0}
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  className="..."
>
          <p className="tracking-[0.25em] text-sm font-semibold text-white/70 uppercase">
            {t('home.hero.kicker')}
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight font-extrabold">
            <span>{t('home.hero.titleGradient')}</span>
            <br />
            <span className="text-[#A4D8FF]">{t('home.hero.titleSuffix')}</span>
          </h1>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#A4D8FF]">
            {t('home.hero.sub')} <span className="text-white">{t('home.hero.subAccent')}</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            {t('home.hero.desc')}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {['scope', 'fixed', 'ownership'].map((k) => (
              <span key={k} className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium bg-white/90 text-[#0E1B2C] shadow">
                {t(`home.badges.${k}`)}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <Link
              href="/contact"
              className="px-7 py-3 text-lg font-bold rounded-xl bg-gradient-to-r from-[#00B4FF] to-[#0047AB] text-white shadow-lg hover:opacity-90 transition"
            >
              {t('cta.start')} →
            </Link>
            <Link
              href="#offers"
              className="px-7 py-3 text-lg font-bold rounded-xl border border-white text-white hover:bg-white hover:text-[#0047AB] transition"
            >
              {t('cta.seeOffers')}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* OFFRES */}
      <section className="py-24 bg-[#F6FAFF]" id="offers">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">{t('home.offersTitle')}</h2>
          <p className="mt-2 text-[#6F8096]">Tech delivery on subscription. Fixed scope, fixed fee.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Website', price: '50', img: '/images/offers/website.jpg', desc: t('offers.website.desc') },
            { name: 'AI Copilot', price: '249', img: '/images/offers/ai-copilot.jpg', desc: t('offers.copilot.desc') },
            { name: 'Custom Apps', price: '999', img: '/images/offers/apps.jpg', desc: t('offers.custom.desc') },
          ].map((o, i) => (
            <motion.div
              key={i}
              className="card bg-white/90 flex flex-col p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={o.img}
                  alt={o.name}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <h3 className="text-xl font-extrabold">{o.name}</h3>
              <p className="text-[#6F8096] my-2">{o.desc}</p>
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
      <section className="py-24 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">{t('home.how.title')}</h2>
          <p className="mt-2 text-[#6F8096]">{t('home.hero.desc')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {['s1', 's2', 's3'].map((s, i) => (
            <motion.div
              key={s}
              className="card bg-[#F9FBFF] p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-1">{t(`home.how.${s}.title`)}</h3>
              <p className="text-[#6F8096]">{t(`home.how.${s}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-24 bg-[#EFF4FB]">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">{t('home.value.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((n, i) => (
            <motion.div
              key={n}
              className="card bg-white/90 p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-1">{t(`home.value.v${n}.t`)}</h3>
              <p className="text-[#6F8096]">{t(`home.value.v${n}.d`)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white" id="contact">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">FAQ</h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {[1, 2, 3, 4, 5].map((q, i) => (
            <details key={i} className="mb-3 rounded-xl border border-black/5 p-4 open:bg-black/[0.02]">
              <summary className="cursor-pointer font-medium">{t(`home.faq.q${q}.q`)}</summary>
              <p className="mt-2 text-[#6F8096]">{t(`home.faq.q${q}.a`)}</p>
            </details>
          ))}
        </div>

        <div className="pt-8 text-center">
          <Link href="/contact" className="btn btn-primary">{t('cta.start')} →</Link>
        </div>
      </section>
    </main>
  );
}
