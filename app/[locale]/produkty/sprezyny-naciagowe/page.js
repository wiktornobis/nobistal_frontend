import '../../spring-global.scss';
import arrow from '../../../img/arrow.png';
import Link from 'next-intl/link';
import Image from 'next/image'
import springStretching from '../../../img/sprezyny-naciagowe.png';
import Footer from "../../../components/footer/Footer";
import Nav from "../../../components/nav/Nav";
import {useTranslations} from "next-intl";

function SpringStretching() {
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
                            alt=""
                        />
                        <h3 className="spring-nav-current">{t('stretching')}</h3>
                    </div>
                    <div className="spring-compression">
                        <div className="left-container">
                            <h2 className="spring-title">{t('stretching')}</h2>
                            <h3 className="spring-subtitle">{t('subtitle')}</h3>
                            <p className="spring-text">
                                {t('stretchingText')}
                            </p>
                            <Link href="produkty/sprezyny-naciagowe#naciagowe" className="read-more">{t('readMore')}</Link>
                        </div>
                        <div className="right-container">
                            <Image className="defer-image is-loaded image-ratio:61 applied-default right-container-img"
                                src={springStretching}
                                alt={t('stretching')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="springs-main-container general-container">
                <h3 id='naciagowe' className="springs-main-container-title">{t('stretching')}</h3>
                <h4 className="springs-main-container-subtitle">{t('stretching')}</h4>
                <p className="content">
                    {t('stretchingContent')}
                </p>
                <li>{t('stretchingList1')}</li>
                <li>{t('stretchingList2')}</li>
                <li>{t('stretchingList3')}</li>
                <li>{t('stretchingList4')}</li>
                <li>{t('stretchingList5')}</li>
            </div>
            <Footer />
        </>
    );
}

export default SpringStretching;
