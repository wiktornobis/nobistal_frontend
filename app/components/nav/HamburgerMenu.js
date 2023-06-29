"use client";

import './hamburgerMenu.scss';
import React, { useState } from 'react';
import Link from "next-intl/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import { useTranslation } from 'react-i18next';

import anglia from '../../img/flaga_w_brytanii.jpeg';
import polska from '../../img/flaga_polska.jpg';
import HamburgerMenuLink from './HamburgerMenuLink';

function HamburgerMenu() {
    // const { i18n } = useTranslation();

    // function handleClick(lang) {
    //     i18n.changeLanguage(lang);
    //     localStorage.setItem('lang', lang);
    //     window.location.reload();
    // }

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    // const langPrefix = i18n.language === 'pl-PL' ? '' : `/${i18n.language}`;

    return (
        <>
            <div className="navbar">
                <Link href='#' className='navbar__menu'>
                    <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="navbar__menu--items" onClick={showSidebar}>
                    <li className="language-mobile">
                        <Link href="/" locale="pl">
                            <img src={polska} alt="język polski" className="flag" />
                        </Link>
                          <Link href="/" locale="em">
                            <img src={anglia} alt="język angielski" className="flag" />
                        </Link>
                    </li>
                    <li className="navbar__toggle">
                        <Link href='#' className='navbar__toggle--icon'>
                            <FontAwesomeIcon icon={faXmark} />
                        </Link>
                    </li>
                    <HamburgerMenuLink  />
                </ul>
            </nav>
        </>
    );
}

export default HamburgerMenu;
