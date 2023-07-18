import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import AlertMessage from "./AlertMessage";

import Head from "next/head";

import Sectors from "@/app/components/sectors/Sectors";
import ProductsCarousel from "@/app/components/products/ProductsCarousel";
import Consulting from "@/app/components/consulting/Consulting";
import Achievement from "@/app/components/achievement/Achievement";
import Catalog from "@/app/components/catalog/Catalog";
import Footer from "@/app/components/footer/Footer";
import Nav from "@/app/components/nav/Nav";
import AboutUs from "@/app/components/aboutUs/AboutUs";
import PopupForm from "@/app/components/popups/popup_form/PopupForm";
import Cookie from "@/app/components/popups/cookie/Cookie";

export default function Home() {
  // const t = useTranslations("Index");

  return (
      <>

      {/*<title>Nowa strona</title>*/}
      {/*<meta name="description" content="Sodemann Sprężyny | Sprzedaż zarówno prywatna jak i firmowa. Jeden z największych dostawców sprężyn w Europie. Syzbka dostawa 24h"/>*/}
      {/*<meta name="keywords" content="sodemann, sodemann Sprężyny, sodemann Sprężyna, Sodemann pl"/>*/}
      {/*<meta name="robots" content="INDEX,FOLLOW"/>*/}
      {/*<meta name="description" data-react-helmet="true" content={t("title")} />*/}
        <Cookie />
        <PopupForm />
        <Nav />
        <AboutUs />
        <Sectors />
        <ProductsCarousel />
        <Consulting />
        <Achievement />
        <Catalog />
        <Footer />
      </>
  );
}
