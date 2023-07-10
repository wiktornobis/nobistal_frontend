import img1 from '../../img/sprezyny-sciskowe.png';
import img2 from '../../img/sprezyny-naciagowe.png';
import img3 from '../../img/sprezyny-skretne.png';
import img4 from '../../img/sprezyny-talerzowe.png';
import img5 from '../../img/sprezyny-faliste.png';
import img6 from '../../img/formy-giete-z-drutu.png';
import Image from 'next/image'

import './products.scss';
import {useTranslations} from "next-intl";
import Link from "next-intl/link";

function DataProducts() {
    const t = useTranslations("SubpageProductsInformation");
     
    return (
        <>
            <Link href='/produkty/sprezyny-sciskowe'>
                <div className="items_container">
                    <Image
                        className='items_container_img'
                        src={img1}
                        alt={t('productOneTitle')}
                    />
                    <h3 className='items_container_text'>{t('productOneTitle')}</h3>
                    <p className='items_container_title'>{t('productSubtitle')}</p>
                </div>
            </Link>
            <Link href='/produkty/sprezyny-naciagowe'>
                <div className="items_container">
                    <Image
                        className='items_container_img'
                        src={img2}
                        alt={t('productTwoTitle')}
                    />
                    <h3 className='items_container_text'>{t('productTwoTitle')}</h3>
                    <p className='items_container_title'>{t('productSubtitle')}</p>
                </div>
            </Link>
            <Link href='/produkty/sprezyny-skretne'>
                <div className="items_container">
                    <Image
                        className='items_container_img'
                        src={img3}
                        alt={t('productThreeTitle')}
                    />
                    <h3 className='items_container_text'>{t('productThreeTitle')}</h3>
                    <p className='items_container_title'>{t('productSubtitle')}</p>
                </div>
            </Link>
             <Link href='/produkty/sprezyny-talerzowe'>
                <div className="items_container">
                    <Image
                        className='items_container_img'
                        src={img4}
                        alt={t('productFourTitle')}
                    />
                    <h3 className='items_container_text'>{t('productFourTitle')}</h3>
                    <p className='items_container_title'>{t('productSubtitle')}</p>
                </div>
            </Link>
             <Link href='/produkty/sprezyny-faliste'>
                <div className="items_container">
                    <Image
                        className='items_container_img'
                        src={img5}
                        alt={t('productFiveTitle')}
                    />
                    <h3 className='items_container_text'>{t('productFiveTitle')}</h3>
                    <p className='items_container_title'>{t('productSubtitle')}</p>
                </div>
            </Link>
            <Link href='/produkty/formy-giete-z-drutu'>
                <div className="items_container">
                    <Image
                        className='items_container_img'
                        src={img6}
                        alt={t('productSixTitle')}
                    />
                    <h3 className='items_container_text'>{t('productSixTitle')}</h3>
                    <p className='items_container_title'>{t('productSubtitleTwo')}</p>
                </div>
            </Link>
        </>
    );
}

export default DataProducts;
