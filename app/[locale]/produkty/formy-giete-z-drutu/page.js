import '../../spring-global.scss';
import arrow from 'app/img/arrow.png';
import wireBentMolds from '@/app/img/formy-giete-z-drutu.png';
import Footer from "@/app/components/footer/Footer";
import Nav from "@/app/components/nav/Nav";
import Link from 'next-intl/link';
import Image from 'next/image'
import {useTranslations} from "next-intl";

function WireBentMolds() {
    const t = useTranslations("SubProduct");
    return (
        <>
            <Nav />
            <div className="springs-background">
                <div className="sub-product general-container">
                    <div className="spring-nav ">
                        <Link href="/produkty#produkty" className="spring-nav-back">{t('title')}</Link>
                       <Image className='spring-nav-img'
                            src={arrow}
                            alt={t('WireBentTitle')}
                        />
                        <h3 className="spring-nav-current">{t('WireBentTitle')}</h3>
                    </div>
                    <div className="spring-compression">
                        <div className="left-container">
                            <h2 className="spring-title">{t('WireBentTitle')}</h2>
                            <h3 className="spring-subtitle">{t('subtitle')}</h3>
                            <p className="spring-text">
                                {t('WireBentText')}
                            </p>
                            <Link href="/produkty/formy-giete-z-drutu#formy-giete-z-drutu" className="read-more">{t('readMore')}</Link>
                        </div>
                        <div className="right-container">
                           <Image className="defer-image is-loaded image-ratio:61 applied-default right-container-img"
                                src={wireBentMolds}
                                alt={t('WireBentTitle')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="springs-main-container general-container">
                <h3 id='formy-giete-z-drutu' className="springs-main-container-title">{t('WireBentTitle')}</h3>
                <h4 className="springs-main-container-subtitle">{t('WireBentCategory')}</h4>
                <p className="content">
                    {t('WireBentContent')}
                </p>
                <li>{t('WireBentList1')}</li>
                <li>{t('WireBentList2')}</li>
                <li>{t('WireBentList3')}</li>
                <li>{t('WireBentList4')}</li>
                <li>{t('WireBentList5')}</li>
            </div>
            <Footer />
        </>
    );
}

export default WireBentMolds;
