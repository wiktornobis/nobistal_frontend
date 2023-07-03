import "./global.scss";
import { Inter } from "next/font/google";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import {NextIntlClientProvider} from 'next-intl';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // metadataBase: new URL("https://nobistal.pl"),
  // title: {
  //   default: "P.P.U.H Nobi-Stal",
  //   template: `%s | Explorer`,
  // },
  // description: "Explore the latest posts from my travel blog.",
  verification: {
    google: "google-site-verification=123123123",
  },
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
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
