import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import "./style.css";
import "./responsive.css";

import siteLogo from "../../assets/icons/siteLogo.svg";
import siteLogoDark from "../../assets/icons/siteLogoDark.svg";
import uzflag from "../../assets/icons/flags/uz.png"
import ruflag from "../../assets/icons/flags/ru.png"
import enflag from "../../assets/icons/flags/en.png"


const Header = () => {
    const { i18n, t } = useTranslation();

    const currentLanguage = i18n.language;

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('i18nextLng', lang);
        window.location.reload();
    };

    const [logo, setLogo] = useState(siteLogo);
    const [langDrop, setLangDrop] = useState(false);
    const [burger, setBurger] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    let htmlTag = document.querySelector("body");
    if (burger == true) { htmlTag.style.overflow = "hidden"; }
    else { htmlTag.style.overflow = "auto"; }

    function burgerMenuToggle() {
        setBurger(!burger)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)
            ) {
                setLangDrop(false);
            }
        };
        if (langDrop) {
            window.addEventListener('click', handleClickOutside);
        }
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [langDrop]);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            window.addEventListener("scroll", isSticky);
            return () => window.removeEventListener("scroll", isSticky);
        } else {
            const header = document.querySelector('.header-section');
            const navLinks = document.querySelectorAll('.header-nav_link');
            const headerContactNumber = document.querySelector('.header-contact-num');
            const dropdownBtn = document.querySelector('.dropdown-btn');
            const headerBtn = document.querySelectorAll('.header-btn');

            header.classList.add("is-sticky");
            headerContactNumber.classList.add("text-black");
            dropdownBtn.classList.add("text-black");
            headerBtn.forEach(link => link.classList.add("text-black"));
            navLinks.forEach(link => link.classList.add("text-black"));
            setLogo(siteLogoDark);
        }
    }, [location.pathname]);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const header = document.querySelector('.header-section');
        const headerBtn = document.querySelectorAll('.header-btn');
        const dropdownBtn = document.querySelectorAll('.dropdown-btn');
        const headerBtnIcon = document.querySelectorAll('.header-btn_icon');
        const navLinks = document.querySelectorAll('.header-nav_link');
        const headerContactNumber = document.querySelectorAll('.header-contact-num');

        if (scrollTop >= 200) {
            header.classList.add('is-sticky');
            navLinks.forEach(link => link.classList.add('text-black'));
            headerBtn.forEach(link => link.classList.add('fixed-header-btn'));
            dropdownBtn.forEach(link => link.classList.add('text-black'));
            headerBtnIcon.forEach(link => link.classList.add('fixed-header-btn-icon'));
            headerContactNumber.forEach(link => link.classList.add('text-black'));
            setLogo(siteLogoDark);
        } else {
            header.classList.remove('is-sticky');
            navLinks.forEach(link => link.classList.remove('text-black'));
            headerBtn.forEach(link => link.classList.remove('fixed-header-btn'));
            dropdownBtn.forEach(link => link.classList.remove('text-black'));
            headerBtnIcon.forEach(link => link.classList.remove('fixed-header-btn-icon'));
            headerContactNumber.forEach(link => link.classList.remove('text-black'));
            setLogo(siteLogo);
        }
    }

    const getFlag = () => {
        switch (currentLanguage) {
            case 'uz':
                return <img src={uzflag} style={{ width: '20px', marginRight: '5px' }} />;
            case 'ru':
                return <img src={ruflag} style={{ width: '20px', marginRight: '5px' }} />;
            case 'en':
                return <img src={enflag} style={{ width: '20px', marginRight: '5px' }} />;
            default:
                return null;
        }
    };

    const navigate = useNavigate();

    const handleContactClick = () => {
        if (location.pathname !== '/') {
            navigate('/');
        }
        setTimeout(() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <header className='header-section'>
            <div className="container">
                <div className="header-content">
                    <Link to="/">
                        <img className='site_logo' src={logo} alt="Site Logo" />
                    </Link>
                    <nav className='content header-nav'>
                        <ul className='content header-nav-list'>
                            <li><Link to={"/about"} className={`header-nav_link`}>{t('about_us')}</Link></li>
                            <li><Link to={"/projects"} className={`header-nav_link`}>{t('projects')}</Link></li>
                            <li><Link to={"/history"} className={`header-nav_link`}>{t('history')}</Link></li>
                            <li><Link to={"/management"} className={`header-nav_link`}>{t('management')}</Link></li>
                            <li><Link to={"/contact"} className={`header-nav_link`}>{t('contact_us')}</Link></li>
                        </ul>
                    </nav>
                    <div className='content header-actions'>
                        <Link to={"tel: +998977082022"} className="header-contact-num">+998 97 708 20 22</Link>
                        <div className='lang-dropdown-wrapper'>
                            <button ref={buttonRef} onClick={() => { setLangDrop(!langDrop) }} className='dropdown-btn content'>
                                {getFlag()}
                                {currentLanguage === 'uz' ? "O'zbekcha" : currentLanguage === 'ru' ? "Русский" : "English"}
                                <i className={`fa-solid fa-chevron-down ${langDrop ? "lang_icon" : ""}`}></i>
                            </button>
                            <div ref={dropdownRef} className={`${langDrop ? "" : "dropdown-inactive"} dropdown`}>
                                <button className='content' onClick={() => changeLanguage("uz")}>
                                    <img src={uzflag} />
                                    <span>{t("uz")}</span>
                                </button>
                                <button className='content' onClick={() => changeLanguage("ru")}>
                                    <img src={ruflag} />
                                    <span>{t("ru")}</span>
                                </button>
                                <button className='content' onClick={() => changeLanguage("en")}>
                                    <img src={enflag} />
                                    <span>{t("en")}</span>
                                </button>
                            </div>
                        </div>
                        <a onClick={handleContactClick} href='#contact' className='header-btn content'>
                            {t("contact_us")}
                            <i className="fa-solid fa-right-long header-btn_icon"></i>
                        </a>
                        <button className='burger-menu-btn burger-btn content' onClick={burgerMenuToggle}>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`burger-bg ${burger ? "burgerbg-active" : ""}`} onClick={burgerMenuToggle}>
                <button className='burgermenu-close-btn'>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className={`burger-menu ${burger ? "burgermenu-active" : ""}`}>
                <ul className='burger-menu-list'>
                    <li className='burger-menu-logo-wrapper'>
                        <Link className='burger-menu-logo'>
                            <img src={siteLogoDark} alt="" />
                        </Link>
                    </li>
                    <li><Link to={"/about"} className="burger-menu-list-item">{t('about_us')}</Link></li>
                    <li><Link to={"/projects"} className="burger-menu-list-item">{t('projects')}</Link></li>
                    <li><Link to={"/history"} className="burger-menu-list-item">{t('history')}</Link></li>
                    <li><Link to={"/management"} className="burger-menu-list-item">{t('management')}</Link></li>
                    <li><Link to={"/contact"} className="burger-menu-list-item">{t('contact_us')}</Link></li>
                </ul>
                <div>
                    <div className='burgermenu-lang-btns'>
                        <button className="content" onClick={() => changeLanguage('uz')}>
                            <img src={uzflag} />
                            <span>UZ</span>
                        </button>
                        <button className="content" onClick={() => changeLanguage('ru')}>
                            <img src={ruflag} />
                            <span>RU</span>
                        </button>
                        <button className="content" onClick={() => changeLanguage('en')}>
                            <img src={enflag} />
                            <span>EN</span>
                        </button>
                    </div>
                    <a onClick={handleContactClick} className='burgermenu-contact-btn content'>
                        {t("contact_us")}
                        <i className="fa-solid fa-right-long header-btn_icon"></i>
                    </a>
                    <Link to={"tel: +998977082022"} className='burgermenu-tel'>
                        <i className='fa-solid fa-phone'></i>
                        +998 97 708 20 22
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;