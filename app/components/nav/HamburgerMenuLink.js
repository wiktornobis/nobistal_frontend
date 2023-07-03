
import Link from "next-intl/link";
import {useTranslations} from "next-intl";
function HamburgerMenuLink() {
    // const t = useTranslations("nav");

    return (
        <li className="container-menu">
            {/*<Link href='/'>*/}
            {/*    <div className="items_container">*/}
            {/*         <div className='nav-text'>{t('1')}</div>*/}
            {/*    </div>*/}
            {/*</Link>*/}
            {/*<Link href="/produkty">*/}
            {/*    <div className="items_container">*/}
            {/*         <div className='nav-text'>{t('2')}</div>*/}
            {/*    </div>*/}
            {/*</Link>*/}
            {/*<Link href="/formularz">*/}
            {/*    <div className="items_container">*/}
            {/*         <div className='nav-text'>{t('3')}</div>*/}
            {/*    </div>*/}
            {/*</Link>*/}
            {/* <Link href="/kontakt">*/}
            {/*    <div className="items_container">*/}
            {/*        <div className='nav-text'>{t('4')}</div>*/}
            {/*    </div>*/}
            {/*</Link>*/}
        </li>
    );
}

export default HamburgerMenuLink;
