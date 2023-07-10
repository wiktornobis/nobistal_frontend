import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faUserShield } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import anglia from '../../img/flaga_w_brytanii.jpeg';
import polska from '../../img/flaga_polska.jpg';
import HamburgerMenu from "./HamburgerMenu";
import './nav.scss';
import Link from "next-intl/link";
import {useTranslations} from "next-intl";

function Nav() {
    const t = useTranslations("Head");

    return (
        <nav className="nav">
            <div className="nav_menu">
                <div className="nav_menu_first_column">
                    <div className="first_container">
                        <div className="first_container_text">
                            <FontAwesomeIcon icon={faCheckCircle} className="first_container_icon" height={20}/>
                            {t('title1')}
                            <FontAwesomeIcon className="first_container_icon" icon={faUserShield} height={20} />
                            {t('title2')}
                        </div>
                    </div>
                </div>
                <div className="nav_menu_second_column">
                    <HamburgerMenu />
                    <a href="/" aria-label="">
                        <div className="nav_menu_second_column_logo"></div>
                    </a>
                    <div className="nav_menu_second_column_menu">
                        <Link className="nav_menu_second_column_menu_link" href="/">{t('mainPage')}</Link>
                        <Link className="nav_menu_second_column_menu_link" href="/produkty">{t('products')}</Link>
                        <Link className="nav_menu_second_column_menu_link" href="/formularz">{t('form')}</Link>
                        <Link className="nav_menu_second_column_menu_link" href="/kontakt">{t('contact')}</Link>
                    </div>
                    <div className="language">
                        <Link href="/" locale="pl">
                            <Image src={polska} alt="język polski" className="flag" />
                        </Link>
                        <Link href="/" locale="en">
                            <Image src={anglia} alt="język angielski" className="flag" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
