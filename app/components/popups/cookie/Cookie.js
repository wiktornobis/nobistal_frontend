"use client";

import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import logo from '@/app/img/nobistal.png';
import '../../../[locale]/global.scss';
import {useTranslations} from "next-intl";
import Image from 'next/image'
function Cookie() {
    const t = useTranslations("Cookie");
    let testCookieName = getCookieConsentValue()
    Cookies.remove(testCookieName)
    Cookies.set(testCookieName, 500);

    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText={t('ok')}
                cookieName="CookieUser"
                declineButtonStyle={{fontSize: "15px", padding:"8px 12px"}}
                style={{ background: "#ddd", textAlign: "left"}}
                buttonStyle={{ color: "#fff", fontSize: "15px", padding:"8px 12px", margin: "0" }}
                expires={150}
            >   <Image className="logo" src={logo} alt="" />
                <span style={{ fontSize: "14px", color: "#000"}}>{t('text')}</span>
            </CookieConsent>
        </div>

    );
}

export default Cookie;