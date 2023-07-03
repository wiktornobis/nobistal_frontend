import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import AlertMessage from "./AlertMessage";
import Nav from "../components/nav/Nav";
import Head from "next/head";
import AboutUs from '../components/AboutUs/AboutUs';

export default function Home() {
  // const t = useTranslations("Index");

  return (
      <>

      {/*<title>Nowa strona</title>*/}
      {/*<meta name="description" content="Sodemann Sprężyny | Sprzedaż zarówno prywatna jak i firmowa. Jeden z największych dostawców sprężyn w Europie. Syzbka dostawa 24h"/>*/}
      {/*<meta name="keywords" content="sodemann, sodemann Sprężyny, sodemann Sprężyna, Sodemann pl"/>*/}
      {/*<meta name="robots" content="INDEX,FOLLOW"/>*/}
      {/*<meta name="description" data-react-helmet="true" content={t("title")} />*/}
        <Nav />
        <AboutUs />


      </>
  );
}
