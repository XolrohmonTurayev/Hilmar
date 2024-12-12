import React, { useEffect } from 'react';
import { Footer, Header, PenSection, SectionTitle } from '../../Components';

import "./style.css";
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const ContactPage = () => {
    const { t } = useTranslation();

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Header />
            <section className='contact-page-section'>
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-info-section">
                            <div className='information_item'>
                                <div>
                                    <SectionTitle>Contacts:</SectionTitle>
                                </div>
                                <div>
                                    <div className='contact-page-cont_item'>
                                        <i>{t("marketing_va_savdo_boshligi")}:</i>
                                        <div>
                                            <Link to={"tel: +998 97 133 76 94"}>+998 97 133 76 94</Link>
                                        </div>
                                    </div>
                                    <div className='contact-page-cont_item'>
                                        <i>{t("savdo_bolimi")}:</i>
                                        <div>
                                            <Link to={"tel: +998 99 729 00 09"}>+998 99 729 00 09</Link>
                                            <Link to={"tel: +998 99 792 00 09"}>+998 99 792 00 09</Link>
                                        </div>
                                    </div>
                                    <div className='contact-page-cont_item'>
                                        <i>{t("ta'minot_bolimi")}:</i>
                                        <div>
                                            <Link to={"tel: +998 99 446 68 89"}>+998 99 446 68 89</Link>
                                        </div>
                                    </div>
                                    <div className='contact-page-cont_item'>
                                        <i>{t("asosiy_ofis")}:</i>
                                        <div>
                                            <Link to={"tel: +998 97 708 20 22"}>+998 97 708 20 22</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='information_item2'>
                                <div>
                                    <SectionTitle>Pochta:</SectionTitle>
                                </div>
                                <div>
                                    <a href='info@hilmar.uz'>info@hilmar.uz</a>
                                </div>
                            </div>
                            <div className="information_item3">
                                <div>
                                    <SectionTitle>Ijtimoiy tarmoqlar:</SectionTitle>
                                </div>
                                <div>
                                    <Link>
                                        <i className="fa-brands fa-telegram"></i>
                                        <span>Telegram</span>
                                    </Link>
                                    <Link>
                                        <i className="fa-brands fa-facebook"></i>
                                        <span>Facebook</span>
                                    </Link>
                                    <Link>
                                        <i className="fa-brands fa-instagram"></i>
                                        <span>Instagram</span>
                                    </Link>
                                    <Link>
                                        <i className="fa-brands fa-linkedin"></i>
                                        <span>Linkedin</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='contact-page-map'>
                            <SectionTitle>Xaritadagi manzil</SectionTitle>
                            <div className='contact-map-wrapper'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4240.277408626062!2d69.25352409537105!3d41.27640098900014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bc4d61216c5%3A0x813840a7ce89e856!2sHilmar%20Development!5e0!3m2!1sru!2s!4v1732792373167!5m2!1sru!2s"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PenSection />
            <Footer />
        </>
    )
}

export default ContactPage
