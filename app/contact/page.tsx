'use client';

import React, { useState } from 'react';
import Container from '@/components/Container';
import { useI18n } from '@/app/i18n';
import { z } from 'zod';
import { motion } from 'framer-motion';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  country: z.string().optional(),
  offer: z.string().optional(),
  message: z.string().min(10),
});

export default function ContactPage() {
  const { t } = useI18n();
  const [state, setState] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');
  const [error, setError] = useState<string>('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      setError(t('contact.error') || 'Please fill all required fields correctly.');
      return;
    }

    setState('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(parsed.data),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
      setState('ok');
      (e.target as HTMLFormElement).reset();
    } catch {
      setState('err');
      setError(t('contact.failed') || 'Submission failed. Try again later.');
    }
  };

  return (
    <section
      className="py-16 md:py-24 text-[#0E1B2C]"
      style={{
        background:
          'linear-gradient(180deg, rgba(247,251,255,1) 0%, rgba(232,242,255,1) 55%, rgba(255,255,255,1) 100%)',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-center">
            <span className="bg-gradient-to-r from-[#1BC0FF] via-[#0A8DFF] to-[#0057FF] bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h1>
          <p className="text-center text-[#6F8096] mb-10">{t('contact.subtitle')}</p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="card grid md:grid-cols-2 gap-6"
        >
          <div>
            <label className="subtle text-sm">{t('contact.name')}</label>
            <input name="name" required className="w-full" />
          </div>
          <div>
            <label className="subtle text-sm">{t('contact.email')}</label>
            <input type="email" name="email" required className="w-full" />
          </div>
          <div>
            <label className="subtle text-sm">{t('contact.company')}</label>
            <input name="company" className="w-full" />
          </div>
          <div>
            <label className="subtle text-sm">{t('contact.country')}</label>
            <input name="country" className="w-full" />
          </div>
          <div className="md:col-span-2">
            <label className="subtle text-sm">{t('contact.offer')}</label>
            <select name="offer" className="w-full">
              <option value="">—</option>
              <option>Website</option>
              <option>AI Copilot</option>
              <option>Custom Apps</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="subtle text-sm">{t('contact.message')}</label>
            <textarea name="message" rows={6} required className="w-full" />
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={state === 'loading'}
            >
              {state === 'loading'
                ? t('contact.sending') || 'Sending...'
                : t('contact.submit') || 'Send'}
            </button>
            {state === 'ok' && (
              <span className="text-green-500">{t('contact.ok') || 'Thank you!'}</span>
            )}
            {state === 'err' && (
              <span className="text-red-500">{error}</span>
            )}
          </div>
        </motion.form>
      </Container>
    </section>
  );
}
