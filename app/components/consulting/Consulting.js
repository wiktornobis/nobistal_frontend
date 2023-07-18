'use client'

import Link from "next-intl/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import img from '../../img/sprezyny-naciskowe.jpeg';
import Image from 'next/image'

import './consulting.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import {useTranslations} from "next-intl";

function Consulting() {
    const t = useTranslations("Consulting");
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);


    return (
        <section data-aos="fade-up" className="information general-container">
            <div className="information_first_container">
                <FontAwesomeIcon className="information_first_container_icon" icon={faMessage} />
                <h3 className="information_first_container_title">{t('title')}</h3>
                <Link href='/formularz' rel="preload">
                    <h4 className="information_first_container_text">
                        {t('text')}
                    </h4>
                </Link>
            </div>
            <div className="information_second_container">
                <h2 data-aos="fade-up" className="information_second_container_title">{t('secondTitle')}</h2>
                <p data-aos="fade-up" className="information_second_container_text">
                    {t('secondText')}
                </p>
                <Image data-aos="fade-up" className="defer-image is-loaded image-ratio:61 applied-default img" src={img} alt="" />
            </div>
        </section>
    );
}

export default Consulting;
