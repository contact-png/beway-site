'use client';

import Image from 'next/image';
import Container from '@/components/Container';
import { useI18n } from '@/app/i18n';
import { motion } from 'framer-motion';

export default function AboutClient({ locale }: { locale: string }) {
  const { t } = useI18n();

  const values = [
    {
      icon: '🤝',
      title: t('about.values.transparency.title'),
      desc: t('about.values.transparency.desc'),
    },
    {
      icon: '⚡',
      title: t('about.values.impact.title'),
      desc: t('about.values.impact.desc'),
    },
    {
      icon: '🌱',
      title: t('about.values.responsible.title'),
      desc: t('about.values.responsible.desc'),
    },
  ];

  return (
    <div key={locale} className="pt-24">
      <main className="relative">
        <section className="py-16 md:py-24 bg-white text-[#0E1B2C]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5"
              >
                <Image
                  src="/images/about/hero.jpg"
                  alt="Beway Labs — innovation in action"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </motion.div>

              {/* TEXTE */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-sm tracking-widest text-[#6F8096] uppercase mb-2">
                  {t('about.kicker')}
                </p>
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 
                               bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
                  {t('about.title')}
                </h1>
                <p className="text-[#6F8096] mb-4">
                  {t('about.intro')}
                </p>
                <div className="space-y-3 text-[#6F8096] leading-relaxed">
                  <p>{t('about.mission.p1')}</p>
                  <p>{t('about.mission.p2')}</p>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* VALUES */}
        <section className="py-20 bg-gradient-to-b from-white to-[#F9FAFB]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold">
                {t('about.values.title.part1')}{' '}
                <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
                  {t('about.values.title.part2')}
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#00B4FF] to-[#0047AB] text-white text-2xl">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                  <p className="text-[#6F8096] text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
