import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import AlertMessage from "./AlertMessage";
import Head from "next/head";

export default function Home() {
  const t = useTranslations("Index");

  return (
      <>
      <title>Nowa strona</title>
      <meta name="description" content="Sodemann Sprężyny | Sprzedaż zarówno prywatna jak i firmowa. Jeden z największych dostawców sprężyn w Europie. Syzbka dostawa 24h"/>
      <meta name="keywords" content="sodemann, sodemann Sprężyny, sodemann Sprężyna, Sodemann pl"/>
      <meta name="robots" content="INDEX,FOLLOW"/>
      <meta name="description" data-react-helmet="true" content={t("title")} />
    <div>

      <div>
        <Link href="/" locale="pl">
          In polish
        </Link>{" "}
        |{" "}
        <Link href="/" locale="en">
          In English
        </Link>
        <br />
        <br />
      </div>
      <div>
        <p>{t("title")}</p>
        <p>{t("subtitle")}</p>
      </div>
      <div>
        <br />
        <AlertMessage message={t("alertMessage")} />
      </div>
    </div>
      </>
  );
}
