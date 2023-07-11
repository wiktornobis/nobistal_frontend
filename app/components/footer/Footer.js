import './footer.scss';
import Link from "next-intl/link";
function Footer() {
    return (
        <div className='footer'>
            <Link href="/">
                <div className="footer_logo"></div>
            </Link>
            <div className="footer__text">
                <a href="https://github.com/wiktornobis"
                   className="footer_text_name"
                   target='blank'
                >
                    © Copyright 2023 - Wiktor Nobis
                </a>
            </div>
        </div>
    );
}

export default Footer;