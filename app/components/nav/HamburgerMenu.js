"use client";

import './hamburgerMenu.scss';
import React, { useState } from 'react';
import Link from "next-intl/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'

import anglia from '../../img/flaga_w_brytanii.jpeg';
import polska from '../../img/flaga_polska.jpg';
import HamburgerMenuLink from './HamburgerMenuLink';

function HamburgerMenu() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);


    return (
        <>
            <div className="navbar">
                <div className='navbar__menu'>
                    <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="navbar__menu--items" onClick={showSidebar}>
                    <li className="language-mobile">
                        <Link href="/" locale="pl">
                            <Image src={polska} alt="język polski" className="flag" />
                        </Link>
                          <Link href="/" locale="en">
                            <Image src={anglia} alt="język angielski" className="flag" />
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
