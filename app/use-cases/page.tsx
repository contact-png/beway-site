'use client';

// NOTE: For subtitle truncation, enable the Tailwind plugin @tailwindcss/line-clamp
// and ensure you have `line-clamp: ["2", ...]` available.

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BarChart3,
  Bot,
  FileText,
  ShieldCheck,
  Stethoscope,
  Building2,
  Truck,
  Cpu,
  Activity,
} from 'lucide-react';
import Container from '@/components/Container';
import { useI18n } from '@/app/i18n';

// ---------------------------- Types & Data ----------------------------

type Sector = 'All' | 'Finance' | 'Retail' | 'Logistics' | 'Telecom' | 'Health' | 'Energy';

type CaseItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  sectors: Exclude<Sector, 'All'>[];
  kind: 'AI' | 'Web' | 'App';
  icon: React.ElementType;
  metric?: { label: string; value: string };
};

const ALL_SECTORS: readonly Sector[] = [
  'All',
  'Finance',
  'Retail',
  'Logistics',
  'Telecom',
  'Health',
  'Energy',
] as const;

const CASES: CaseItem[] = [
  {
    id: 'retail-web',
    title: 'Retail website',
    subtitle: 'High-conversion storefront with SEO and secure checkout.',
    image: '/images/usecases/retail.png',
    alt: 'Retail storefront UI',
    sectors: ['Retail'],
    kind: 'Web',
    icon: Building2,
    metric: { label: 'Go-live', value: '3–4 weeks' },
  },
  {
    id: 'edu-chatbot',
    title: 'Education chatbot',
    subtitle: 'AI assistant that answers common queries and automates tasks.',
    image: '/images/usecases/education.png',
    alt: 'Education chatbot UI',
    sectors: ['Finance', 'Telecom', 'Energy'],
    kind: 'AI',
    icon: Bot,
    metric: { label: 'Ticket deflection', value: '30–50%' },
  },
  {
    id: 'health-app',
    title: 'Healthcare app',
    subtitle: 'Patient records, billing and dashboards built for compliance.',
    image: '/images/usecases/healthcare.png',
    alt: 'Healthcare app dashboard',
    sectors: ['Health'],
    kind: 'App',
    icon: Stethoscope,
    metric: { label: 'Time to first release', value: '6 weeks' },
  },
  {
    id: 'ai-reporting',
    title: 'AI Client Reporting Copilot',
    subtitle: 'Automated insights and reports that save hours weekly.',
    image: '/images/usecases/healthcare.png', // replace with a dedicated visual if available
    alt: 'AI reporting copilot',
    sectors: ['Finance', 'Energy'],
    kind: 'AI',
    icon: BarChart3,
    metric: { label: 'Time saved', value: '-40%' },
  },
  {
    id: 'supplier-invoice',
    title: 'Supplier Invoice Automation',
    subtitle: 'Smart invoice processing with approvals and analytics.',
    image: '/images/usecases/retail.png',
    alt: 'Supplier invoice automation',
    sectors: ['Logistics', 'Retail'],
    kind: 'App',
    icon: FileText,
    metric: { label: 'Manual work', value: '-60%' },
  },
  {
    id: 'internal-agent',
    title: 'Internal Agent Chatbot',
    subtitle: 'Answers routine queries and triggers workflows.',
    image: '/images/usecases/education.png',
    alt: 'Internal agent chatbot',
    sectors: ['Telecom', 'Finance'],
    kind: 'AI',
    icon: Cpu,
    metric: { label: 'Response time', value: '-70%' },
  },
];

// ---------------------------- Component ----------------------------

export default function UseCasesPage() {
  const { t } = useI18n();
  const { locale } = useParams() as { locale: string };
  const prefersReducedMotion = useReducedMotion();

  const router = useRouter();
  const search = useSearchParams();

  const fromUrl = (search.get('sector') as Sector | null) || 'All';
  const [active, setActive] = useState<Sector>(ALL_SECTORS.includes(fromUrl) ? fromUrl : 'All');

  // Keep state in sync with URL (back/forward etc.)
  useEffect(() => {
    const urlSector = (search.get('sector') as Sector | null) || 'All';
    if (ALL_SECTORS.includes(urlSector) && urlSector !== active) {
      setActive(urlSector);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const filtered = useMemo(() => {
    if (active === 'All') return CASES;
    return CASES.filter((c) => c.sectors.includes(active));
  }, [active]);

  const onPick = (s: Sector) => {
    setActive(s);
    const q = s === 'All' ? '' : `?sector=${encodeURIComponent(s)}`;
    router.replace(q, { scroll: false });
  };

  const L = {
    kicker: t('usecases.kicker') || 'WE BUILD SOLUTIONS THAT ADDRESS REAL BUSINESS NEEDS',
    title1: t('usecases.title1') || 'Selected',
    title2: t('usecases.title2') || 'Use Cases',
    subtitle:
      t('usecases.subtitle') ||
      'Real-world examples of how we create modern apps, websites, and AI copilots.',
    all: t('usecases.all') || 'All',
    start: t('cta.start') || (locale === 'fr' ? 'Lancez votre Lab' : 'Start your Lab'),
    free: t('cta.free') || (locale === 'fr' ? 'Consultation gratuite' : 'Free consultation'),
  };

  const SectorLabel = (s: Sector) => (s === 'All' ? L.all : s);

  return (
    <main className="bg-gradient-to-b from-[#F6FAFF] via-white to-white text-[#0E1B2C] [--header-h:72px] md:[--header-h:80px]">
      {/* HERO */}
      <section className="pt-[calc(var(--header-h)+12px)] md:pt-[calc(var(--header-h)+16px)] pb-4 md:pb-6">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <p className="tracking-[0.18em] text-xs md:text-sm font-semibold text-[#8A93A2] uppercase">
              {L.kicker}
            </p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
              {L.title1}{' '}
              <span className="bg-gradient-to-r from-[#1BC0FF] via-[#0A8DFF] to-[#0057FF] bg-clip-text text-transparent">
                {L.title2}
              </span>
            </h1>
            <p className="mt-4 text-[#6F8096]">{L.subtitle}</p>

            {/* FILTERS (sticky) */}
            <div className="mt-6 md:mt-8 sticky top-[calc(var(--header-h)+4px)] z-10 bg-gradient-to-b from-white/80 to-transparent supports-[backdrop-filter]:backdrop-blur">
              <div
                className="flex flex-wrap justify-center gap-2.5 pt-2"
                role="tablist"
                aria-label={t('usecases.filters') || 'Sectors filter'}
              >
                {ALL_SECTORS.map((s) => (
                  <motion.button
                    key={s}
                    onClick={() => onPick(s)}
                    role="tab"
                    aria-selected={s === active}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                    whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={[
                      'inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm ring-1 ring-sky-100 bg-white shadow-sm',
                      s === active
                        ? 'text-[#0A8DFF] ring-[#0A8DFF]/30 bg-[#EAF4FF]'
                        : 'text-[#0E1B2C]/80 hover:bg-sky-50',
                    ].join(' ')}
                  >
                    {s === 'Finance' && <Activity className="w-4 h-4" aria-hidden />}
                    {s === 'Retail' && <Building2 className="w-4 h-4" aria-hidden />}
                    {s === 'Logistics' && <Truck className="w-4 h-4" aria-hidden />}
                    {s === 'Telecom' && <ShieldCheck className="w-4 h-4" aria-hidden />}
                    {s === 'Health' && <Stethoscope className="w-4 h-4" aria-hidden />}
                    {s === 'Energy' && <Cpu className="w-4 h-4" aria-hidden />}
                    {SectorLabel(s)}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* GRID */}
      <section className="pb-12 md:pb-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {filtered.map((c, i) => (
              <motion.article
                key={c.id}
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="h-full flex flex-col rounded-2xl bg-white p-4 md:p-5 ring-1 ring-black/5 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition"
              >
                {/* Thumb (fixed ratio) */}
                <div className="relative rounded-xl overflow-hidden ring-1 ring-black/5 aspect-video">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 33vw, 100vw"
                    priority={i < 3}
                  />
                </div>

                {/* Content */}
                <div className="mt-4 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-lg bg-gradient-to-br from-[#1BC0FF] to-[#0A8DFF] p-2 text-white shadow">
                      <c.icon className="w-4 h-4" aria-hidden />
                    </span>
                    <span className="text-xs font-semibold text-[#8A93A2] uppercase tracking-wide">{c.kind}</span>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-[#0A142F]">{c.title}</h3>
                  <p className="mt-1.5 text-[#6F8096] line-clamp-2">{c.subtitle}</p>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {c.metric && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#F2F8FF] px-2.5 py-1 text-xs font-medium text-[#0A8DFF] ring-1 ring-[#0A8DFF]/15">
                        {c.metric.label}: {c.metric.value}
                      </span>
                    )}
                    {c.sectors.map((sec) => (
                      <span
                        key={sec}
                        className="inline-flex rounded-full bg-slate-50 px-2 py-0.5 text-xs text-[#0E1B2C]/70 ring-1 ring-slate-200"
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs pinned to bottom */}
                <div className="mt-4 flex items-center gap-3">
                  <Link
                    href={`/contact?usecase=${c.id}`}
                    aria-label={`${L.start} — ${c.title}`}
                    className="inline-flex h-10 items-center justify-center rounded-lg bg-[#0A8DFF] px-4 text-white font-semibold hover:brightness-110 shadow"
                  >
                    {L.start}
                  </Link>
                  <Link
                    href={`/contact?type=free-consultation&usecase=${c.id}`}
                    aria-label={`${L.free} — ${c.title}`}
                    className="text-[#0A8DFF] text-sm font-medium hover:underline underline-offset-4"
                  >
                    {L.free}
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Global CTA */}
          <div className="mt-10 md:mt-12 flex justify-center">
            <Link
              href="/contact?type=free-consultation"
              aria-label={L.start}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#1BC0FF] to-[#0A8DFF] px-6 text-white font-semibold shadow hover:brightness-110"
            >
              {L.start} →
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
