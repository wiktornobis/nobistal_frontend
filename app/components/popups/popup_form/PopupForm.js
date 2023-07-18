"use client";

import { useState, useEffect } from 'react';
import { TrackGoogleAnalyticsEvent } from '@/GA4';
import { useSpring, animated } from '@react-spring/web';
import logo from '@/app/img/nobistal.png';
import './popupForm.scss';
import {useTranslations} from "next-intl";
import { useRouter } from 'next/navigation';
import Image from 'next/image'

function PopupForm() {
  const t = useTranslations("PopupForm");
  const router = useRouter();
  const [isClose, setIsClose] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [show, setShow] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const cookieExists = document.cookie.indexOf("popup_form=true") !== -1;
    setIsClose(cookieExists);
  }, []);

  function setPopupFormCookie() {
    const date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = "popup_form=true;" + expires + ";path=/";
  }

  const closePopup = () => {
    setIsClose(true);
    setPopupFormCookie();
    const prefix = isMobile ? '_mobile' : '_desktop';
    TrackGoogleAnalyticsEvent('PopupForm', 'PopupFormClose' + prefix, 'PopupFormClose');
  };

  const openForm = () => {
    setIsClose(true);
    router.push('/formularz');
    setPopupFormCookie();
    const prefix = isMobile ? '_mobile' : '_desktop';
    TrackGoogleAnalyticsEvent('PopupForm' + prefix, 'PopupFormOpen' + prefix, 'PopupFormOpen');
  };

  const [popupAnimation, setPopupAnimation] = useSpring(() => ({
    opacity: 0,
    config: {
      tension: 750,
      friction: 80,
    },
  }));

  useEffect(() => {
    if (shouldAnimate) {
      setPopupAnimation({ opacity: 1 });
    } else {
      setPopupAnimation({ opacity: 0 });
    }
  }, [shouldAnimate, setPopupAnimation]);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      setShouldAnimate(true);
    }, 8000);
  }, []);

  return (
    <>
      {show && (
        <div>
          {!isClose && (
            <div className="popup_form_popup">
              <animated.div style={popupAnimation} className="popup_form_popup_container">
                <div className="popup_form_popup_apla popup_form_close"></div>
                <div className="popup_form_popup_pane">
                  <Image className="popup_logo" src={logo} alt="Nobistal-logo" />
                  <div>
                     <h1>{t('title')}</h1>
                     <h2><b>{t('subtitle')}</b></h2>
                  </div>
                  <div className="btn btn-primary btn-sm" onClick={openForm}>{t('send')}</div>
                  <div className="popup_form_popup_close popup_form_close" onClick={closePopup}>✕</div>
                </div>
              </animated.div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default PopupForm;
