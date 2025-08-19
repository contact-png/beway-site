'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import fr from '../messages/fr.json';
import en from '../messages/en.json';

type Lang = 'en' | 'fr';
type Dict = typeof en;

const dictionaries: Record<Lang, Dict> = { en, fr };

type I18nContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
});

const detectLang = (): Lang => {
  if (typeof window === 'undefined') return 'en'; // SSR fallback

  const stored = localStorage.getItem('lang');
  const browserLang = navigator.language || navigator.languages?.[0] || 'en';

  if (stored === 'fr' || stored === 'en') return stored as Lang;
  if (browserLang.startsWith('fr')) return 'fr';
  return 'en';
};

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const detected = detectLang();
    setLang(detected);
    localStorage.setItem('lang', detected);
    setIsReady(true);
  }, []);

  const dict = dictionaries[lang] || dictionaries.en;

  const t = (key: string): string => {
    return key.split('.').reduce((acc: any, part: string) => {
      return acc?.[part];
    }, dict) ?? key;
  };

  if (!isReady) return null;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
