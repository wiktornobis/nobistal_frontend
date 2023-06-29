import "./global.scss";
import { Inter } from "next/font/google";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://nobistal.pl"),
  title: {
    default: "P.P.U.H Nobi-Stal",
    template: `%s | Explorer`,
  },
  description: "Explore the latest posts from my travel blog.",
  verification: {
    google: "google-site-verification=123123123",
  },
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
