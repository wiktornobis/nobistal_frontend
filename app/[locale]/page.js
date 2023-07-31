import { useTranslations } from "next-intl";
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
import {cookies} from "next/headers";
import {MetaTags} from "@/app/components/Metatags";
export default function Home() {
  const h = useTranslations("HeadSeo");
  const cookieStore = cookies()
  let langUrl
  const canonicalUrl = 'https://www.nobistal.pl'
  let cookieLang = cookieStore.get('NEXT_LOCALE')
  let hrefLang = cookieLang?.value
  hrefLang !== undefined ? langUrl = cookieLang.value === 'pl' ? '' : `/${cookieLang.value}` : langUrl = ''

  return (
      <>
       <MetaTags
              title={h('mainPage')}
              description={h('mainPageDescription')}
              keywords={h('mainPageKeywords')}
              robots="index, follow"
              canonicalLink={canonicalUrl}
              hrefLang={hrefLang}
              href={`https://nobistal.pl${langUrl}`}
       />
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
