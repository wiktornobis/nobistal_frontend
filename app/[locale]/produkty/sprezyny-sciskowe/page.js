import '../../spring-global.scss';
import arrow from '@/app/img/arrow.png';
import springCompression from '@/app/img/sprezyny-sciskowe.png';
import Link from 'next-intl/link';
import Image from 'next/image'
import Footer from "@/app/components/footer/Footer";
import Nav from "@/app/components/nav/Nav";
import {useTranslations} from "next-intl";
import {cookies} from "next/headers";
import {MetaTags} from "@/app/components/Metatags";
function SpringCompression() {
    const t = useTranslations("SubProduct");
    const h = useTranslations("HeadSeo");
    const d = useTranslations("HeadDescription");
    const k = useTranslations("HeadKeyWords");
    const cookieStore = cookies();
    let langUrl
    const canonicalUrl = 'https://www.nobistal.pl/produkty/sprezyny-sciskowe'
    let cookieLang = cookieStore.get('NEXT_LOCALE')
    let hrefLang = cookieLang?.value
    hrefLang !== undefined ? langUrl = cookieLang.value === 'pl' ? '' : `/${cookieLang.value}` : langUrl = ''
    return (
        <>
             <MetaTags
                title={h('springCompression')}
                description={d('springCompression')}
                keywords={k('springCompression')}
                robots="index, follow"
                canonicalLink={canonicalUrl}
                hrefLang={hrefLang}
                href={`https://nobistal.pl${langUrl}/produkty/sprezyny-sciskowe`}
            />
            <Nav />
            <div className="springs-background">
                <div className="sub-product general-container">
                    <div className="spring-nav ">
                        <Link href="/produkty#produkty" className="spring-nav-back">{t('title')}</Link>
                        <Image className='spring-nav-img'
                            src={arrow}
                            alt=""
                        />
                        <h3 className="spring-nav-current">{t('compression')}</h3>
                    </div>
                    <div className="spring-compression">
                        <div className="left-container">
                            <h2 className="spring-title">{t('compression')}</h2>
                            <h3 className="spring-subtitle">{t('subtitle')}</h3>
                            <p className="spring-text">
                                {t('compressionText')}
                            </p>
                            <Link href="produkty/sprezyny-sciskowe/#sciskowe" className="read-more">{t('readMore')}</Link>
                        </div>
                        <div className="right-container">
                            <Image className="defer-image is-loaded image-ratio:61 applied-default right-container-img"
                                src={springCompression}
                                alt={t('compression')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="springs-main-container general-container">
                <h3 id='sciskowe' className="springs-main-container-title">{t('compression')}</h3>
                <h4 className="springs-main-container-subtitle">{t('category')}</h4>
                <p className="content">
                    {t('compressionContent')}
                </p>
                <li>{t('compressionList1')}</li>
                <li>{t('compressionList2')}</li>
                <li>{t('compressionList3')}</li>
                <li>{t('compressionList4')}</li>
                <li>{t('compressionList5')}</li>
            </div>
            <Footer />
        </>
    );
}
export default SpringCompression;
