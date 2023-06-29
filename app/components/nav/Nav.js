// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle, faUserShield } from "@fortawesome/free-solid-svg-icons";
// import anglia from '../../assets/flaga_w_brytanii.jpeg';
// import polska from '../../assets/flaga_polska.jpg';
// import HamburgerMenu from "./HamburgerMenu";
// import './_nav.scss';
import Link from "next-intl/link";

function Nav() {
    // const { t, i18n } = useTranslation();

    // function handleClick(lang) {
    //     i18n.changeLanguage(lang);
    //     localStorage.setItem('lang', lang);
    //     window.location.reload();
    // }

    // const langPrefix =  'pl-PL' ? '' : "";

    return (
        <nav className="nav">
            <div className="nav_menu">
                <div className="nav_menu_first_column">
                    <div className="first_container">
                        <div className="first_container_text">
                            {/*<FontAwesomeIcon icon={faCheckCircle} className="first_container_icon" />*/}
                            {/*{t('nav.title1')}*/}
                            {/*<FontAwesomeIcon className="first_container_icon" icon={faUserShield} />*/}
                            {/*{t('nav.title2')}*/}
                        </div>
                    </div>
                </div>
                <div className="nav_menu_second_column">
                    {/*<HamburgerMenu />*/}
                    <a href="/" aria-label="">
                        <div className="nav_menu_second_column_logo"></div>
                    </a>
                    <div className="nav_menu_second_column_menu">
                        
                        <Link className="nav_menu_second_column_menu_link" href="/">1</Link>
                        <Link className="nav_menu_second_column_menu_link" href="/">2</Link>
                        <Link className="nav_menu_second_column_menu_link" href="/">3</Link>
                        <Link className="nav_menu_second_column_menu_link" href="/">4</Link>
                    </div>
                    <div className="language">
                        {/*<button onClick={() => handleClick('pl-PL')}>*/}
                        {/*    <img src={polska} alt="język polski" className="flag" />*/}
                        {/*</button>*/}
                        {/*<button onClick={() => handleClick('en')}>*/}
                        {/*    <img src={anglia} alt="język angielski" className="flag" />*/}
                        {/*</button>*/}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
