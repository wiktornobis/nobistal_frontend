// "use client"
import './products.scss';
import 'aos/dist/aos.css';
// import { useEffect, useState } from 'react';
import DataProducts from './DataProducts';
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import {useTranslations} from "next-intl";
import {MetaTags} from "@/app/components/Metatags";
import { cookies } from 'next/headers'

function Page() {
    const cookieStore = cookies()
    const canonicalUrl = 'https://www.nobistal.pl/produkty'
    let langUrl
    let cookieLang = cookieStore.get('NEXT_LOCALE')
    let hrefLang = cookieLang?.value
    hrefLang !== undefined ? langUrl = cookieLang.value === 'pl' ? '' : `/${cookieLang.value}` : langUrl = ''

    const t = useTranslations("SubpageProductsInformation");
    const h = useTranslations("HeadSeo");
    const d = useTranslations("HeadDescription");
    const k = useTranslations("HeadKeyWords");

    return (
        <>
            <MetaTags
              title={h('products')}
              description={d('products')}
              keywords={k('products')}
              robots="index, follow"
              canonicalLink={canonicalUrl}
              hrefLang={hrefLang}
              href={`https://nobistal.pl${langUrl}/produkty`}
            />
            <Nav />
            <div className="products_main">
                <div className="products_main_container general-container">
                    <h2 className="products_main_container_title">{t('mainTitle')}</h2>
                    <h3 className="products_main_container_text">{t('mainText')}</h3>
                </div>
            </div>

            <div className="products_main_products general-container">
                <h3 id='produkty' className="products_main_products_title" >{t('product')}</h3>
                <div className="items" >
                   <DataProducts />
                </div>
                <div className="information">
                    <h2 className="information_title" >{t('title')} </h2>
                    <h3 className="information_text" >{t('text1')}</h3>
                    <h3 className="information_text" >{t('text2')}</h3>
                    <ul className="information_list" >
                        <li>{t('list1')}</li>
                        <li>{t('list2')}</li>
                        <li>{t('list3')}</li>
                        <li>{t('list4')}</li>
                        <li>{t('list5')}</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Page;