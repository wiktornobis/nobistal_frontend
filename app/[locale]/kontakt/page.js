
import './contact.scss';
import Footer from "@/app/components/footer/Footer";
import Nav from "@/app/components/nav/Nav";
import {useTranslations} from "next-intl";

function Page() {
    const t = useTranslations("Contact");
    return (
        <>
            <Nav />
            <div className='contact'>
                <div className="contact-left-container">
                    <h2 className='main-contact general-container'>{t('title')}</h2>
                    <div className='contact_container general-container'>
                        <div className="contact_container_left">
                            <h3 className='second-contact'>{t('title2')}</h3>
                            <div className="contact_container_left_text">
                                <p className='email_title'>E-MAIL:</p>
                                <p>kontakt@nobistal.pl</p>
                                <p className='name_title'>{t('name')}</p>
                                <a href="https://www.google.com/maps?cid=4876558935646437353" target="_blank" rel="noopener noreferrer">
                                    <p>P.P.U.H NOBI-STAL Iwona Nobis</p>
                                </a>
                                <p className='address_title'>{t('address')}</p>
                                <p>Białka 17 27-100 Iłża (POLSKA)</p>
                            </div>
                        </div>
                        <div className="contact_container_right">
                            <h3 className='second-contact'>{t('data')}</h3>
                            <div className="contact_container_right_text">
                                <div className='information_flex'>
                                    <p className='nip_title'>NIP:</p>
                                    <p>796-221-85-62</p>
                                </div>
                                <div className="information_flex">
                                    <p className='regon_title'>REGON:</p>
                                    <p>142448704</p>
                                </div>
                                <div className="information_flex">
                                    <p className='mobile_title'>TEL:</p>
                                    <p>+48 698 700 270</p>
                                </div>

                                <p className='bank_title'>{t('numberAccount')}</p>
                                <p>04 1050 1432 1000 0090 7443 8079</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-right-container"></div>
            </div>
            <Footer />
        </>
    );
}

export default Page;