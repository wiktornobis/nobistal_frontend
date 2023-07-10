'use client'

import './aboutUs.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {useTranslations} from "next-intl";
import { useEffect } from 'react';

function AboutUs() {
    const t = useTranslations("About");

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <section className="about general-container">
            <h2 className="about_title">{t('title')}</h2>
            <h3 className="about_text">{t('text')}</h3>
            <h1 className="about_sectors" data-aos="fade-up">{t('sectors')}</h1>
        </section>
    );
}

export default AboutUs;