import '../../spring-global.scss';
import arrow from '@/app/img/arrow.png';
import springWave from '@/app/img/sprezyny-faliste.png';
import Footer from "@/app/components/footer/Footer";
import Nav from "@/app/components/nav/Nav";
import Link from 'next-intl/link';
import Image from 'next/image'
import {useTranslations} from "next-intl";
import {cookies} from "next/headers";
import {MetaTags} from "@/app/components/Metatags";

function SpringWave() {
    const t = useTranslations("SubProduct");
    const h = useTranslations("HeadSeo");
    const d = useTranslations("HeadDescription");
    const k = useTranslations("HeadKeyWords");
    const cookieStore = cookies();
    let langUrl
    const canonicalUrl = 'https://www.nobistal.pl/produkty/sprezyny-faliste'
    let cookieLang = cookieStore.get('NEXT_LOCALE')
    let hrefLang = cookieLang?.value
    hrefLang !== undefined ? langUrl = cookieLang.value === 'pl' ? '' : `/${cookieLang.value}` : langUrl = ''
    return (
        <>
            <MetaTags
                title={h('springWave')}
                description={d('springWave')}
                keywords={k('springWave')}
                robots="index, follow"
                canonicalLink={canonicalUrl}
                hrefLang={hrefLang}
                href={`https://nobistal.pl${langUrl}/produkty/sprezyny-faliste`}
            />
            <Nav />
            <div className="springs-background">
                <div className="sub-product general-container">
                    <div className="spring-nav">
                        <Link href="/produkty#produkty" className="spring-nav-back">{t('title')}</Link>
                        <Image className='spring-nav-img'
                            src={arrow}
                            alt=""
                        />
                        <h3 className="spring-nav-current">{t('wave')}</h3>
                    </div>
                    <div className="spring-compression">
                        <div className="left-container">
                            <h2 className="spring-title">{t('wave')}</h2>
                            <h3 className="spring-subtitle">{t('subtitle')}</h3>
                            <p className="spring-text">
                                {t('waveText')}
                            </p>
                            <Link href="/produkty/sprezyny-faliste#faliste" className="read-more">{t('readMore')}</Link>
                        </div>
                        <div className="right-container">
                            <Image className="defer-image is-loaded image-ratio:61 applied-default right-container-img"
                                src={springWave}
                                alt={t('wave')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="springs-main-container general-container">
                <h3 id='faliste' className="springs-main-container-title">{t('wave')}</h3>
                <h4 className="springs-main-container-subtitle">{t('category')}</h4>
                <p className="content">
                    {t('waveContent')}
                </p>
                    <li>{t('waveList1')}</li>
                    <li>{t('waveList2')}</li>
                    <li>{t('waveList3')}</li>
                    <li>{t('waveList4')}</li>
            </div>
            <Footer />
        </>
    );
}

export default SpringWave;
