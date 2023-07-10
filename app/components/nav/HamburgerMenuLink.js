'use client'
import Link from "next-intl/link";
import {useTranslations} from "next-intl";
function HamburgerMenuLink() {
    const t = useTranslations("Head");

    return (
        <li className="container-menu">
            <Link href='/'>
                <div className="items_container">
                     <div className='nav-text'>{t('mainPage')}</div>
                </div>
            </Link>
            <Link href="/produkty">
                <div className="items_container">
                     <div className='nav-text'>{t('products')}</div>
                </div>
            </Link>
            <Link href="/formularz">
                <div className="items_container">
                     <div className='nav-text'>{t('form')}</div>
                </div>
            </Link>
             <Link href="/kontakt">
                <div className="items_container">
                    <div className='nav-text'>{t('contact')}</div>
                </div>
            </Link>
        </li>
    );
}

export default HamburgerMenuLink;
