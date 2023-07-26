import "./global.scss";
import { notFound } from "next/navigation";
import {NextIntlClientProvider} from 'next-intl';

export const metadata = {
  verification: {
    google: "google-site-verification=123123123",
  }
};

export default async function LocaleLayout({children, params: {locale}}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
      <link rel="icon" href="/nobistal-favicon.png" />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
