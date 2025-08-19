'use client';

import Container from '@/components/Container';
import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/app/i18n';
import {
  Banknote, ShoppingBag, Truck, Signal, HeartPulse, Zap,
  BarChart3, FileText, Bot
} from 'lucide-react';
import { motion } from 'framer-motion';
import UseCaseExamples from '@/components/UseCaseExamples';

type UseCaseCard = {
  title: string;
  desc: string;
  img?: string;
};

export default function UseCasesPage() {
  const { t } = useI18n();

  const sectors = [
    { key: 'FSI', icon: Banknote },
    { key: 'Retail', icon: ShoppingBag },
    { key: 'Logistics', icon: Truck },
    { key: 'Telco', icon: Signal },
    { key: 'Health', icon: HeartPulse },
    { key: 'Energy', icon: Zap },
  ];

  const iconMap: Record<string, any> = {
    Invoice: FileText,
    Chatbot: Bot,
    Reporting: BarChart3,
  };

  const raw = t('useCases.cards') as unknown;
  const cards: UseCaseCard[] = Array.isArray(raw) ? (raw as UseCaseCard[]) : [];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
  };

  const cardInitial = { opacity: 0, y: 20, rotateX: -2 };
  const cardWhileInView = { opacity: 1, y: 0, rotateX: 0 };
  const cardWhileHover = { y: -6, scale: 1.03 };
  const cardTransition = { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as any }; // easing compatible

  return (
    <main className="pt-24 text-[#0E1B2C]">
      {/* HERO */}
      <section
        className="relative overflow-hidden py-16"
        style={{
          background:
            'linear-gradient(180deg, rgba(247,251,255,1) 0%, rgba(232,242,255,1) 55%, rgba(255,255,255,1) 100%)',
        }}
      >
        <Container>
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <p className="tracking-[0.3em] text-sm font-semibold text-[#7A90A9] uppercase">
              {t('useCases.heroKicker')}
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {t('useCases.heroTitle')}{' '}
              <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
                {t('useCases.heroTitle2')}
              </span>
            </h1>

            <div className="mb-4 flex flex-wrap justify-center gap-3 mt-6">
              {sectors.map(({ key, icon: Icon }) => (
                <motion.span
                  key={key}
                  whileHover={{ scale: 1.08 }}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10
                             bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur-md
                             transition-transform duration-200 hover:shadow-md hover:bg-white"
                >
                  <Icon className="h-4 w-4 text-[#0A8DFF]" />
                  <span className="text-[#33506A]">{t(`useCases.sector.${key}`)}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* EXEMPLES */}
      <UseCaseExamples />

      {/* USE CASES */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold">
              {t('useCases.selected')}
            </h2>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((c, i) => {
              const FallbackIcon =
                Object.entries(iconMap).find(([k]) => c.title.includes(k))?.[1] || BarChart3;

              return (
                <motion.div
                  key={i}
                  initial={cardInitial}
                  whileInView={cardWhileInView}
                  whileHover={cardWhileHover}
                  transition={cardTransition}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-black/5 bg-white/90 p-6 shadow-sm hover:shadow-xl transition-all"
                >
                  {c.img ? (
                    <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={c.img}
                        alt={c.title}
                        fill
                        loading={i > 1 ? 'lazy' : 'eager'}
                        className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                    </div>
                  ) : (
                    <div
                      className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl
                                 bg-gradient-to-br from-[#1BC0FF] via-[#0A8DFF] to-[#0057FF]
                                 text-white shadow-md"
                    >
                      <FallbackIcon className="h-6 w-6" />
                    </div>
                  )}

                  <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                  <p className="text-[#6F8096] text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block px-7 py-3 text-base font-bold rounded-xl bg-gradient-to-r
                         from-[#00B4FF] to-[#0047AB] text-white shadow-lg hover:opacity-90 transition"
            >
              {t('cta.start')} →
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
