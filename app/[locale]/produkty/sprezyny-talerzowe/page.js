import '../../spring-global.scss';
import arrow from '@/app/img/arrow.png';
import springDiscs from '@/app/img/sprezyny-talerzowe.png';
import Footer from "@/app/components/footer/Footer";
import Nav from "@/app/components/nav/Nav";
import Link from 'next-intl/link';
import Image from 'next/image'
import {useTranslations} from "next-intl";
import {cookies} from "next/headers";
import {MetaTags} from "@/app/components/Metatags";
function SpringDiscs() {
    const t = useTranslations("SubProduct");
    const h = useTranslations("HeadSeo");
    const d = useTranslations("HeadDescription");
    const k = useTranslations("HeadKeyWords");
    const cookieStore = cookies();
    let langUrl
    const canonicalUrl = 'https://www.nobistal.pl/produkty/sprezyny-talerzowe'
    let cookieLang = cookieStore.get('NEXT_LOCALE')
    let hrefLang = cookieLang?.value
    hrefLang !== undefined ? langUrl = cookieLang.value === 'pl' ? '' : `/${cookieLang.value}` : langUrl = ''
    return (
        <>
            <MetaTags
                title={h('springDiscs')}
                description={d('springDiscs')}
                keywords={k('springDiscs')}
                robots="index, follow"
                canonicalLink={canonicalUrl}
                hrefLang={hrefLang}
                href={`https://nobistal.pl${langUrl}/produkty/sprezyny-talerzowe`}
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
