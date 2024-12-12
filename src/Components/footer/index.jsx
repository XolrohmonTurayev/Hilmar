import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import "./style.css";
import "./responsive.css";

import footerDarkLogo from "../../assets/icons/siteLogoDark.svg";
import limonLogo from "../../assets/icons/limon-logo.png";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className='footer-section'>
            <div className="container footer-container">
                <div className="footer-cont1">
                    <Link>
                        <div className='footer-logo'>
                            <img src={footerDarkLogo} alt="" />
                        </div>
                    </Link>
                    <nav className='footer-nav'>
                        <ul className='footer-nav_list'>
                            <Link className='footer-nav_list__link'><li>{t("about_us")}</li></Link>
                            <Link className='footer-nav_list__link'><li>{t("projects")}</li></Link>
                            <Link className='footer-nav_list__link'><li>{t("history")}</li></Link>
                            <Link className='footer-nav_list__link'><li>{t("management")}</li></Link>
                            <Link className='footer-nav_list__link'><li>{t("contact_us")}</li></Link>
                        </ul>
                    </nav>
                    <div className='footer__information'>
                        <div className='content footer-info'>
                            <i className="fa-regular fa-map"></i>
                            <strong>{t("address")}:</strong>
                            <p>{t("manzil")}</p>
                        </div>
                        <div className='content footer-info'>
                            <i className="fa-regular fa-envelope"></i>
                            <strong>{t("pochta")}:</strong>
                            <p>info@hilmar.uz</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='footer-cont2'>
                    <div className='footer-cont2_item'>
                        <p>{t("marketing_va_savdo_boshligi")}:</p>
                        <Link to={"tel: +998 97 133 76 94"}>+998 97 133 76 94</Link>
                    </div>
                    <div className='footer-cont2_item'>
                        <p>{t("savdo_bolimi")}:</p>
                        <Link to={"tel: +998 99 729 00 09"}>+998 99 729 00 09</Link>
                        <Link to={"tel: +998 99 792 00 09"}>+998 99 792 00 09</Link>
                    </div>
                    <div className='footer-cont2_item'>
                        <p>{t("ta'minot_bolimi")}:</p>
                        <Link to={"tel: +998 99 446 68 89"}>+998 99 446 68 89</Link>
                    </div>
                    <div className='footer-cont2_item'>
                        <p>{t("asosiy_ofis")}:</p>
                        <Link to={"tel: +998 97 708 20 22"}>+998 97 708 20 22</Link>
                    </div>
                </div>
                <hr />
                <div className='footer-cont3'>
                    <div className='footer-links content'>
                        <Link>
                            <i className='fa-brands fa-telegram'></i>
                        </Link>
                        <Link>
                            <i className='fa-brands fa-facebook'></i>
                        </Link>
                        <Link>
                            <i className='fa-brands fa-instagram'></i>
                        </Link>
                        <Link>
                            <i className='fa-brands fa-linkedin'></i>
                        </Link>
                    </div>
                    <Link to={"limon.uz"}>
                        <div className='footer-ad content'>
                            <h2>{t("sozlovchi")}:</h2>
                            <img src={limonLogo} alt='Logo of the Limon Digital Agency' />
                        </div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;