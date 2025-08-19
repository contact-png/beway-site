'use client';

import Image from 'next/image';
import Container from '@/components/Container';
import { useI18n } from '@/app/i18n';
import { Handshake, Zap, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutClient({ locale }: { locale: string }) {
  const { t } = useI18n();

  const values = [
    {
      icon: <Handshake className="w-6 h-6 text-white" />,
      title: t('about.values.cards.transparency.title'),
      desc: t('about.values.cards.transparency.desc'),
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: t('about.values.cards.impact.title'),
      desc: t('about.values.cards.impact.desc'),
    },
    {
      icon: <Leaf className="w-6 h-6 text-white" />,
      title: t('about.values.cards.responsible.title'),
      desc: t('about.values.cards.responsible.desc'),
    },
  ];

  return (
    <div key={locale} className="pt-24 text-[#0E1B2C]">

      {/* HERO */}
      <section
        className="py-12 md:py-20"
        style={{
          background: 'linear-gradient(180deg, #F7FBFF 0%, #E8F2FF 55%, #FFFFFF 100%)',
        }}
      >
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5"
            >
              <Image
                src="/images/about/hero.jpg"
                alt={t('about.title')}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 48vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* TEXTE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-sm tracking-widest text-[#6F8096] uppercase mb-2">
                {t('about.kicker')}
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
                {t('about.title')}
              </h1>
              <p className="text-[#6F8096] mb-4">{t('about.intro')}</p>
              <div className="space-y-3 text-[#6F8096] leading-relaxed">
                <p>{t('about.mission.p1')}</p>
                <p>{t('about.mission.p2')}</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F9FAFB]">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-14"
          >
            {t('about.values.title1')}{' '}
            <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
              {t('about.values.title2')}
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 * i }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl shadow-md bg-white ring-1 ring-gray-100"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#00B4FF] to-[#0047AB] text-white">
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-[#6F8096]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
