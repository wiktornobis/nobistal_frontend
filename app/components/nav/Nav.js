"use client"
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUserShield } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import anglia from '../../img/flaga_w_brytanii.jpeg';
import polska from '../../img/flaga_polska.jpg';
import HamburgerMenu from './HamburgerMenu';
import './nav.scss';

function Nav() {
  const t = useTranslations('Head');
  const [activeLink, setActiveLink] = useState('');

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     setActiveLink(window.location.pathname);
  //   };
  //
  //   window.addEventListener('popstate', handleRouteChange);
  //   setActiveLink(window.location.pathname);
  //
  //   return () => {
  //     window.removeEventListener('popstate', handleRouteChange);
  //   };
  // }, []);

  return (
    <nav className="nav">
      <div className="nav_menu">
        <div className="nav_menu_first_column">
          <div className="first_container">
            <div className="first_container_text">
              <FontAwesomeIcon icon={faCheckCircle} className="first_container_icon" height={20} />
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
            <Link
              className={activeLink === '/' ? 'nav_menu_second_column_menu_link active' : 'nav_menu_second_column_menu_link'}
              href="/"
            >
              {t('mainPage')}
            </Link>
            <Link
              className={activeLink === '/produkty' ? 'nav_menu_second_column_menu_link active' : 'nav_menu_second_column_menu_link'}
              href="/produkty"
            >
              {t('products')}
            </Link>
            <Link
              className={activeLink === '/formularz' ? 'nav_menu_second_column_menu_link active' : 'nav_menu_second_column_menu_link'}
              href="/formularz"
            >
              {t('form')}
            </Link>
            <Link
              className={activeLink === '/kontakt' ? 'nav_menu_second_column_menu_link active' : 'nav_menu_second_column_menu_link'}
              href="/kontakt"
            >
              {t('contact')}
            </Link>
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
