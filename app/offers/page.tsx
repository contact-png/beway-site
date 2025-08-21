'use client';

import Link from 'next/link';
import Container from '@/components/Container';
import { Globe, Smartphone, Laptop2 } from 'lucide-react';
import { useI18n } from '@/app/i18n';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function OffersPage() {
  const { t } = useI18n();
  const { locale } = useParams() as { locale: string };

  const plans = [
    {
      key: 'website',
      Icon: Globe,
      title: t('offers.website.title'),
      desc: t('offers.website.desc'),
      price: '49€',
    },
    {
      key: 'copilot',
      Icon: Smartphone,
      title: t('offers.copilot.title'),
      desc: t('offers.copilot.desc'),
      price: '249€',
    },
    {
      key: 'custom',
      Icon: Laptop2,
      title: t('offers.custom.title'),
      desc: t('offers.custom.desc'),
      price: '999€',
    },
  ];

  const capabilities = [
    {
      bullets: [
        t('offers.capabilities.website.b1'),
        t('offers.capabilities.website.b2'),
        t('offers.capabilities.website.b3'),
        t('offers.capabilities.website.b4'),
      ],
    },
    {
      bullets: [
        t('offers.capabilities.ai.b1'),
        t('offers.capabilities.ai.b2'),
        t('offers.capabilities.ai.b3'),
        t('offers.capabilities.ai.b4'),
      ],
    },
    {
      bullets: [
        t('offers.capabilities.apps.b1'),
        t('offers.capabilities.apps.b2'),
        t('offers.capabilities.apps.b3'),
        t('offers.capabilities.apps.b4'),
      ],
    },
  ];

  return (
    <main
      key={locale}
      className="relative bg-gradient-to-br from-[#F6FAFF] via-white to-[#F0F4FF] text-[#0E1B2C] pt-24 pb-12 px-4 md:px-8"
    >
      {/* HERO */}
      <section className="pt-8 md:pt-10 pb-12 md:pb-16">
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
        </Container>
      </section>

      {/* MERGED OFFERS + CAPABILITIES */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map(({ key, Icon, title, desc, price }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative rounded-3xl bg-white/95 p-8 text-center ring-1 ring-black/5 shadow-lg"
              >
                {/* Badge for most popular plan */}
                {key === 'copilot' && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-[#1BC0FF] to-[#0057FF] text-white text-xs font-semibold px-3 py-1 shadow">
                      {t('offers.popular')}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1BC0FF] via-[#0A8DFF] to-[#0057FF] shadow-[0_12px_30px_rgba(10,141,255,.25)]">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Title & Desc */}
                <h3 className="text-2xl font-extrabold mb-2">{title}</h3>
                <p className="text-[#6F8096] leading-relaxed mb-4">{desc}</p>

                {/* Price */}
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-3xl font-extrabold bg-gradient-to-r from-[#0A8DFF] to-[#00B4FF] bg-clip-text text-transparent">
                    {price}
                  </span>
                  <span className="ml-1 text-lg font-bold text-[#6F8096]">
                    {t('offers.price')}
                  </span>
                </div>

                {/* Capabilities */}
                <ul className="mt-6 space-y-2 text-left">
                  {capabilities[index].bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 mt-0.5 text-[#0A8DFF]"
                      >
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
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block rounded-xl bg-gradient-to-r from-[#0A8DFF] to-[#00B4FF] px-6 py-3 font-semibold text-white shadow hover:opacity-90"
                  >
                    {t('cta.start')}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
