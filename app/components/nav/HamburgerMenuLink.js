import Link from "next-intl/link";
function HamburgerMenuLink() {
    // const { t, i18n } = useTranslation();
    // const langPrefix = i18n.language === 'pl-PL' ? '' : `/${i18n.language}`;

    return (
        <li className="container-menu">
            <Link href='/'>
                <div className="items_container">
                    <div className='nav-text'>SG</div>
                </div>
            </Link>
            <Link href="/produkty">
                <div className="items_container">
                    <div className='nav-text'>PRod</div>
                </div>
            </Link>
            <Link href="/formularz">
                <div className="items_container">
                    <div className='nav-text'>Form</div>
                </div>
            </Link>
             <Link href="/kontakt">
                <div className="items_container">
                    {/*<div className='nav-text'>{t('nav.4')}</div>*/}
                </div>
            </Link>
        </li>
    );
}

export default HamburgerMenuLink;
