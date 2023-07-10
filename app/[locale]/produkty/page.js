"use client"

import './products.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import DataProducts from './DataProducts';
// import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import {useTranslations} from "next-intl";

function Page({products}) {
    const t = useTranslations("SubpageProductsInformation");
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <>
            <Nav />
            <div className="products_main">
                <div className="products_main_container general-container">
                    <h2 className="products_main_container_title">{t('mainTitle')}</h2>
                    <h3 className="products_main_container_text">{t('mainText')}</h3>
                </div>
            </div>
            <div className="products_main_products general-container">
                <h3 id='produkty' className="products_main_products_title" data-aos="fade-up">{t('product')}</h3>
                <div className="items" data-aos="fade-up">
                   <DataProducts />
                </div>
                <div className="information">
                    <h2 className="information_title" data-aos="fade-up">{t('title')} </h2>
                    <h3 className="information_text" data-aos="fade-up">{t('text1')}</h3>
                    <h3 className="information_text" data-aos="fade-up">{t('text2')}</h3>
                    <ul className="information_list" data-aos="fade-up">
                        <li>{t('list1')}</li>
                        <li>{t('list2')}</li>
                        <li>{t('list3')}</li>
                        <li>{t('list4')}</li>
                        <li>{t('list5')}</li>
                    </ul>
                </div>
            </div>
            {/*<Footer />*/}
        </>
    );
}

export default Page;