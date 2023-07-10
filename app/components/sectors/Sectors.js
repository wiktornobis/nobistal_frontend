'use client'

import './sectors.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Image1 from '../../img/maszynybudowlane.jpg'
import Image2 from '../../img/maszynyrolnicze.jpg'
import Image3 from '../../img/gornictwo.jpg'
import { useEffect } from 'react';
import {useTranslations} from "next-intl";

function Sectors() {
    const t = useTranslations("Sectors");

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <section className="sectors" data-aos="fade-up">
            <div className="sectors_article">
                <Image className="defer-image" src={Image1} alt="" />
                <h3 className="sectors_article_title">{t('industry1')}</h3>
            </div>
            <div className="sectors_article">
                <Image className="defer-image" src={Image2} alt="" />
                <h3 className="sectors_article_title">{t('industry2')}</h3>
            </div>
            <div className="sectors_article">
                <Image className="defer-image" src={Image3} alt="" />
                <h3 className="sectors_article_title">{t('industry3')}</h3>
            </div>
        </section>
    );
}

export default Sectors;