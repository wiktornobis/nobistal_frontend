import '../../spring-global.scss';
import arrow from '../../../img/arrow.png';
import springDiscs from '../../../img/sprezyny-talerzowe.png';
import Footer from "../../../components/footer/Footer";
import Nav from "../../../components/nav/Nav";
import Link from 'next-intl/link';
import Image from 'next/image'
import {useTranslations} from "next-intl";


function SpringDiscs() {
    const t = useTranslations("SubProduct");
    return (
        <>
            <Nav />
            <div className="springs-background">
                <div className="sub-product general-container">
                    <div className="spring-nav">
                        <Link href="/produkty#produkty" className="spring-nav-back">{t('title')}</Link>
                        <Image className='spring-nav-img'
                            src={arrow}
                            alt=""
                        />
                        <h3 className="spring-nav-current">{t('discs')}</h3>
                    </div>
                    <div className="spring-compression">
                        <div className="left-container">
                            <h2 className="spring-title">{t('discs')}</h2>
                            <h3 className="spring-subtitle">{t('subtitle')}</h3>
                            <p className="spring-text">
                                {t('discsText')}
                            </p>
                            <Link href="/produkty/sprezyny-talerzowe#talerzowe" className="read-more">{t('readMore')}</Link>
                        </div>
                        <div className="right-container">
                            <Image className="defer-image is-loaded image-ratio:61 applied-default right-container-img"
                                src={springDiscs}
                                alt={t('discs')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="springs-main-container general-container">
                <h3 id='talerzowe' className="springs-main-container-title">{t('discs')}</h3>
                <h4 className="springs-main-container-subtitle">{t('category')}</h4>
                <p className="content">
                    {t('discsContent')}
                </p>
                <li>{t('discsList1')}</li>
                <li>{t('discsList2')}</li>
                <li>{t('discsList3')}</li>
                <li>{t('discsList4')}</li>
                <li>{t('discsList5')}</li>
                <li>{t('discsList6')}</li>
            </div>
            <Footer />
        </>
    );
}

export default SpringDiscs;
