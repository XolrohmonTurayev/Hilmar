import React, { useEffect, useRef, useState } from 'react';
import { Footer, Header, SectionTitle, StatisticsComp } from '../../Components';
import { useTranslation } from 'react-i18next';
import { valuesData } from '../../constants';

import "./style.css";
import "./responsive.css";

import drotik from "../../assets/icons/drotik.svg";
import futureVisionIcon from "../../assets/icons/future_vision_icon.svg";
import sitelogoOnly from "../../assets/icons/siteLogoOnly.svg";
import trust_icon1 from "../../assets/icons/trust_icons/trust-icon1.svg"
import trust_icon2 from "../../assets/icons/trust_icons/trust-icon2.svg"
import trust_icon3 from "../../assets/icons/trust_icons/trust-icon3.svg"
import trust_icon4 from "../../assets/icons/trust_icons/trust-icon4.svg"
import trust_icon5 from "../../assets/icons/trust_icons/trust-icon5.svg"
import trust_icon6 from "../../assets/icons/trust_icons/trust-icon6.svg"
import trust_icon7 from "../../assets/icons/trust_icons/trust-icon7.svg"
import trust_icon8 from "../../assets/icons/trust_icons/trust-icon8.svg"
import { useLocation } from 'react-router-dom';

const AboutPage = () => {
    const { t } = useTranslation();

    const [active, setActive] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);

    const iconsArray = [
        { id: 0, icon: trust_icon1, title: "Kuzatuv kamera", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 1, icon: trust_icon2, title: "Title 2", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 2, icon: trust_icon3, title: "Title 3", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
        { id: 3, icon: trust_icon4, title: "Title 4", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
        { id: 4, icon: trust_icon5, title: "Title 5", text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia." },
        { id: 5, icon: trust_icon6, title: "Title 6", text: "Mollit anim id est laborum consectetur adipiscing elit." },
        { id: 6, icon: trust_icon7, title: "Title 7", text: "Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim." },
        { id: 7, icon: trust_icon8, title: "Title 8", text: "Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip." },
    ];

    const containerRef = useRef(null);
    const itemRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.getBoundingClientRect().width;
            setContainerWidth(width);
        }

        if (itemRef.current) {
            const width = itemRef.current.offsetWidth;
            setItemWidth(width);
        }

        const intervalId = setInterval(() => {
            setActive((prev) => prev >= (iconsArray.length - 1) ? 0 : prev + 1);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [iconsArray.length]);

    const radius = containerWidth / 2;
    const centerX = radius;
    const centerY = radius;

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Header />
            <div className='about__wrapper'>
                <div className="container">
                    <div className="description-cont">
                        <div className='section-titles'>
                            <SectionTitle>Hilmar Development</SectionTitle>
                            <p>{t("hero-section-title")}</p>
                        </div>
                        <div className='section-texts'>
                            <p>
                                {t("about__description1")}
                                <br />
                                {t("about__description2")}
                            </p>
                        </div>
                    </div>
                    <div className='missions-cont content'>
                        <div>
                            <h4>{t("our_mission")}</h4>
                            <span>{t("our_mission")}</span>
                            <p>{t("our_goal")}</p>
                        </div>
                        <div className='div2'>
                            <img src={drotik} alt="" />
                        </div>
                    </div>
                    <div className='future-cont-wrapper'>
                        <div className='future-cont'>
                            <div className='futurecard__info'>
                                <h4>{t("future_vision")}</h4>
                                <span>{t("future_vision")}</span>
                                <p>{t("leading_company_in_uzbekistan")}</p>
                            </div>
                            <div>
                                <img src={futureVisionIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='values-wrapper'>
                        <SectionTitle>{t("values")}</SectionTitle>
                        <div className='values-cont'>
                            {valuesData.map((el) => (
                                <div key={el.id} className='values-cont_card'>
                                    <h3>{t(`${el.title}`)}</h3>
                                    <p>{t(`${el.text}`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <section className='numbers-section'>
                    <div className='container'>
                        <SectionTitle customClass={"text-white"}>{t("company_in_numbers")}</SectionTitle>
                        <div className="number-comp">
                            <StatisticsComp />
                        </div>
                        <div className='carousel-section-title'>
                            <SectionTitle customClass={"text-white text-center"}>{t("why_choose_us")}</SectionTitle>
                        </div>
                        <div className='circle-cont content'>
                            <div className='carousel-wrapper'>
                                <div className="circle-container circle-carousel circle content" ref={containerRef} style={{ rotate: -45 * active + 'deg' }}>
                                    {iconsArray.map((data) => {
                                        const angle = (data.id / iconsArray.length) * 2 * Math.PI;
                                        const x = centerX + Math.cos(angle) * radius - itemWidth / 2;
                                        const y = centerY + Math.sin(angle) * radius - itemWidth / 2;

                                        return (
                                            <div
                                                className={`item ${data.id === active ? "active" : ""}`}
                                                key={data.id}
                                                onClick={() => setActive(data.id)}
                                                style={{ left: x, top: y, transform: `rotate(${45 * active}deg)` }}
                                                ref={itemRef} // Set ref to each item element
                                            >
                                                <img src={data.icon} alt="" />
                                            </div>
                                        );
                                    })}
                                    <div className='centered-logo content' style={{ transform: `rotate(${45 * active}deg)` }}>
                                        <img src={sitelogoOnly} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-text'>
                                <h3>{iconsArray[active]?.title}</h3>
                                <p>{iconsArray[active]?.text}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;
