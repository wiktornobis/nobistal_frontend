'use client'

import './productsCarousel.scss';
import Link from "next-intl/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import Image from 'next/image'
import 'aos/dist/aos.css';

import naciagowe from '../../img/sprezyny-naciagowe.png';
import faliste from '../../img/sprezyny-faliste.png';
import sciskowe from '../../img/sprezyny-sciskowe.png';
import formy from '../../img/formy-giete-z-drutu.png';
import talerzowe from '../../img/sprezyny-talerzowe.png';

import {useTranslations} from "next-intl";
import { useEffect } from 'react';

function ProductsCarousel() {
     const t = useTranslations("CarouselProducts");
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    let settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        adaptiveHeight: false,
        mobileFirst: true,
        autoplaySpeed: 2500,
        centerMode: true,
        infinite: true,
        centerPadding: "200px",

        responsive: [
            {
                breakpoint: 1920,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  centerPadding: "160px",
                }
            },
            {
                breakpoint: 1580,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  centerPadding: "115px",
                }
            },
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  centerPadding: "120px",
                }
            },

            {
                breakpoint: 989,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: "100px",
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                },
        }]
      };
    return (
        <>
            <div className="products_box general-container">
                <h2 className="products_box_title" data-aos="fade-up">{t('title')}</h2>
                <h3 className="products_box_text" data-aos="fade-up">
                    {t('text')}
                </h3>
            </div>
            <Slider {...settings} className="general-container products">

                <div className="product" data-aos="fade-up">
                    <Link href='produkty/sprezyny-naciagowe'>
                        <Image className="defer-image is-loaded image-ratio:61 applied-default" src={naciagowe} alt={t('item1')} aria-hidden="true" />
                    </Link>
                    <h3 className='items_text'>{t('item1')}</h3>
                    <p className='items_title'>{t('title1')}</p>
                </div>


                <div className="product" data-aos="fade-up">
                    <Link href='produkty/formy-giete-z-drutu'>
                        <Image className="defer-image is-loaded image-ratio:61 applied-default" src={formy} alt={t('item2')} aria-hidden="true" />
                    </Link>
                    <h3 className='items_text'>{t('item2')}</h3>
                    <p className='items_title'>{t('title1')}</p>
                </div>


                <div className="product" data-aos="fade-up">
                    <Link href='produkty/sprezyny-sciskowe'>
                        <Image className="defer-image is-loaded image-ratio:61 applied-default" src={sciskowe} alt={t('item3')} aria-hidden="true" />
                    </Link>
                    <h3 className='items_text'>{t('item3')}</h3>
                    <p className='items_title'>{t('title1')}</p>
                </div>


                <div className="product" data-aos="fade-up">
                    <Link href='produkty/sprezyny-faliste'>
                        <Image className="defer-image is-loaded image-ratio:61 applied-default" src={faliste} alt={t('item4')} aria-hidden="true" />
                    </Link>
                    <h3 className='items_text'>{t('item4')}</h3>
                    <p className='items_title'>{t('title1')}</p>
                </div>


                <div className="product" data-aos="fade-up">
                    <Link href='produkty/sprezyny-talerzowe'>
                        <Image className="defer-image is-loaded image-ratio:61 applied-default" src={talerzowe} alt={t('item5')} />
                    </Link>
                    <h3 className='items_text'>{t('item5')}</h3>
                    <p className='items_title'>{t('title1')}</p>
                </div>
            </Slider>
        </>

    );
}

export default ProductsCarousel;