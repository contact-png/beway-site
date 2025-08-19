'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/app/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import type { Route } from 'next';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, lang, setLang } = useI18n();

  const isLanding = pathname === '/';
  const isTransparent = isLanding && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const navItems: { href: Route; label: string }[] = [
    { href: '/', label: t('nav.home') },
    { href: '/offers', label: t('nav.offers') },
    { href: '/use-cases', label: t('nav.useCases') },
    { href: '/about', label: t('nav.about') },
  ];

  const logoSrc = isTransparent ? '/logo-white.png' : '/logo.png';
  const headerBg = isTransparent
    ? 'bg-transparent'
    : 'bg-white shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]';

  const textColor = isTransparent ? 'text-white' : 'text-[#0E1B2C]';

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${headerBg}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto h-16 md:h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoSrc}
            alt="Beway Labs"
            width={120}
            height={24}
            priority
            className="transition duration-300"
          />
        </Link>

        {/* Desktop nav */}
        <nav className={`hidden md:flex items-center gap-6 text-base font-semibold ${textColor}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${
                pathname === item.href
                  ? isTransparent
                    ? 'text-white font-semibold'
                    : 'text-[var(--blue-2)] font-semibold'
                  : 'opacity-80 hover:opacity-100'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-block rounded-full bg-gradient-to-r from-[#00B4FF] to-[#0047AB] px-6 py-2.5 text-base font-semibold text-white shadow-md hover:opacity-90 transition"
          >
            {t('nav.cta')}
          </Link>

          {/* Lang Switch */}
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className={`ml-2 px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 text-sm font-medium ${
              isTransparent ? 'text-white' : 'text-[#0E1B2C]'
            }`}
          >
            {lang.toUpperCase()}
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`md:hidden inline-flex items-center justify-center rounded-xl px-3 py-2 border border-black/10 shadow-sm ${
            isTransparent ? 'bg-white/20' : 'bg-white/70'
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <span className="relative block w-5 h-4">
            <span
              className={`absolute left-0 right-0 h-0.5 transition ${
                menuOpen ? 'top-1/2 rotate-45' : 'top-0'
              } ${isTransparent ? 'bg-white/80' : 'bg-black/80'}`}
            />
            <span
              className={`absolute left-0 right-0 h-0.5 transition ${
                menuOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2'
              } ${isTransparent ? 'bg-white/80' : 'bg-black/80'}`}
            />
            <span
              className={`absolute left-0 right-0 h-0.5 transition ${
                menuOpen ? 'top-1/2 -rotate-45' : 'bottom-0'
              } ${isTransparent ? 'bg-white/80' : 'bg-black/80'}`}
            />
          </span>
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 px-4 rounded-lg text-[16px] font-medium text-[#0E1B2C] transition duration-200 hover:text-white hover:bg-gradient-to-r hover:from-[#00B4FF] hover:to-[#0047AB]"
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center gap-3 pt-2">
                <Link
  href="/contact"
  className="w-full text-center px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-[#00B4FF] to-[#0047AB] shadow-md hover:opacity-90 transition text-base"
>
  {t('nav.cta')}
</Link>
                <button
                  onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                  className="badge text-base"
                >
                  {lang.toUpperCase()}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom gradient class */}
      <style jsx>{`
        .bg-beway-gradient {
          background: linear-gradient(90deg, #00B4FF 0%, #0047AB 100%);
        }
      `}</style>
    </motion.header>
  );
}
