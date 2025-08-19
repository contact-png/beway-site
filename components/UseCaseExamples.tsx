'use client';

import Container from '@/components/Container';
import Image from 'next/image';
import { useI18n } from '@/app/i18n';
import { motion } from 'framer-motion';

type ExampleItem = {
  title: string;
  desc: string;
  img?: string;
};

export default function UseCaseExamples() {
  const { t } = useI18n();
  const raw = t('useCases.examples') as unknown;
  const examples: ExampleItem[] = Array.isArray(raw) ? (raw as ExampleItem[]) : [];

  return (
   <section className="pt-0 pb-20 bg-white text-[#0E1B2C]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          
          <p className="mt-0 text-[#6F8096] max-w-2xl mx-auto">
            {t('useCases.examplesSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {examples.map((e, i) => (
            <motion.div
              key={`${e.title}-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-44 mb-4 rounded-xl overflow-hidden shadow-md">
                {e.img ? (
                  <Image
                    src={e.img}
                    alt={e.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    priority={i === 0}
                  />
                ) : (
                  <div
                    className="w-full h-full bg-[#F3F7FF] flex items-center justify-center text-[#8AA0B8] text-sm"
                  >
                    {t('common.noImage')}
                  </div>
                )}
              </div>

              <h3 className="text-lg font-semibold">{e.title}</h3>
              <p className="text-[#6F8096] mt-2 text-sm leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}

          {examples.length === 0 && (
            <div className="col-span-full text-center text-[#6F8096]">
              {t('common.noData')}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
