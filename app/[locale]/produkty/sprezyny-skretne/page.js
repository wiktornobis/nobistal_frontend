import '../../spring-global.scss';
import arrow from '@/app/img/arrow.png';
import springtorsion from '@/app/img/sprezyny-skretne.png';
import Footer from "@/app/components/footer/Footer";
import Nav from "@/app/components/nav/Nav";
import {useTranslations} from "next-intl";
import Link from 'next-intl/link';
import Image from 'next/image'

function SpringTorsion() {
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
                        <h3 className="spring-nav-current">{t('torsion')}</h3>
                    </div>
                    <div className="spring-compression">
                        <div className="left-container">
                            <h2 className="spring-title">{t('torsion')}</h2>
                            <h3 className="spring-subtitle">{t('subtitle')}</h3>
                            <p className="spring-text">
                                {t('torsionText')}
                            </p>
                            <Link href="/produkty/sprezyny-skretne#skretne" className="read-more">{t('readMore')}</Link>
                        </div>
                        <div className="right-container">
                            <Image className="defer-image is-loaded image-ratio:61 applied-default right-container-img"
                                src={springtorsion}
                                alt={t('torsion')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="springs-main-container general-container">
                <h3 id='skretne' className="springs-main-container-title">{t('torsion')}</h3>
                <h4 className="springs-main-container-subtitle">{t('torsion')}</h4>
                <p className="content">
                    {t('torsionContent')}
                </p>
                <li>{t('torsionList1')}</li>
                <li>{t('torsionList2')}</li>
                <li>{t('torsionList3')}</li>
                <li>{t('torsionList4')}</li>
                <li>{t('torsionList5')}</li>
            </div>
            <Footer />
        </>
    );
}

export default SpringTorsion;
