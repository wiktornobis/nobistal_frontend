'use client'

import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { TrackGoogleAnalyticsEvent } from '@/Ga4';
import * as React from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './catalog.scss';
import { useEffect, useState } from 'react';
import {useTranslations} from "next-intl";


function Catalog() {
    const t = useTranslations("Catalog");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const downloadSpring = () => {
        const prefix = isMobile ? '_mobile' : '_desktop';
        TrackGoogleAnalyticsEvent('DownloadSpringCatalog', 'DownloadCatalog' + prefix, 'BannerSpringDownload');
    };
    const downloadSieve = () => {
        const prefix = isMobile ? '_mobile' : '_desktop';
        TrackGoogleAnalyticsEvent('DownloadSieveCatalog', 'DownloadCatalog' + prefix, 'BannerSieveDownload');
    };
    const downloadWashers = () => {
        const prefix = isMobile ? '_mobile' : '_desktop';
        TrackGoogleAnalyticsEvent('DownloadWashersCatalog', 'DownloadCatalog' + prefix, 'BannerWashersDownload');
    };

    const springCatalog = 'https://nobistal.pl/nobistal_katalog_sprezyn.pdf';
    const sieveCatalog = 'https://nobistal.pl/nobistal_katalog_sit.pdf';
    const washersCatalog = 'https://nobistal.pl/nobistal_katalog_podkladek.pdf';

    return (
        <section className="catalog general-container" data-aos="fade-up">
            <div className="container">
                <h2 className="catalog_title">{t('title')}</h2>
                <h3 className="catalog_text">{t('text1')}</h3>
                <div className="catalog_buttons">
                    <Button className='catalog_btn' variant="outlined" size="small" endIcon={<DownloadIcon />}>
                        <a className='catalog_btn_text' href={springCatalog} rel="noopener noreferrer" target="_blank" download="nobistal_katalog_sprezyn.pdf" onClick={downloadSpring}>
                            {t('text2')}
                        </a>
                    </Button>
                    <Button className='catalog_btn' variant="outlined" size="small" endIcon={<DownloadIcon />}>
                        <a className='catalog_btn_text' href={sieveCatalog} rel="noopener noreferrer" target="_blank" download="nobistal_katalog_sit.pdf" onClick={downloadSieve}>
                            {t('text3')}
                        </a>
                    </Button>
                    <Button className='catalog_btn' variant="outlined" size="small" endIcon={<DownloadIcon />}>
                        <a className='catalog_btn_text' href={washersCatalog} rel="noopener noreferrer" target="_blank" download="nobistal_katalog_sit.pdf" onClick={downloadWashers}>
                            {t('text4')}
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Catalog;
