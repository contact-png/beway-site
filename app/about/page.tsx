import AboutClient from './AboutClient';

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  return <AboutClient locale={locale} />;
}
