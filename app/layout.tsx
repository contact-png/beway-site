import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { I18nProvider } from './i18n';

export const metadata: Metadata = {
  title: 'Beway Labs',
  description: 'Launch your website, app or AI with no upfront cost.',
  openGraph: {
    title: 'Beway Labs',
    description: 'A smarter way to build tech: get your project delivery through a subscription that adapts to your needs and budget',
    images: ['/og.png'],
    type: 'website',
    url: 'https://bewaylabs.com',
  },
  icons: {
    icon: '/images/favicon.png', // 
  },
  metadataBase: new URL('https://bewaylabs.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
