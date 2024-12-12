import React from 'react';
import { SectionTitle, StatisticsComp } from '../../../Components';
import { useTranslation } from 'react-i18next';

import "./style.css"

import centeredLogo from "../../../assets/icons/justLogo.svg";
import circle from "../../../assets/icons/justCircle.svg";


const AboutUs = () => {
    const { t } = useTranslation()
    return (
        <section>
            <div className="hghg overflow-hidden">
                <img src={centeredLogo} className='center-logo' />
                <img src={circle} className='circle' />
                <div className="container">
                    <div className="about-cont">
                        <div className='about-info'>
                            <SectionTitle customClass={"text-white"}>{t("about_us")}</SectionTitle>
                            <p className='about-cont__text'>
                                {t("hilmar-info1")}
                            </p>
                            <p className='about-cont__text'>
                                {t("hilmar-info2")}
                            </p>
                        </div>
                        <div className="flex-1">
                            <div className='about-since'>
                                <h2 className='content'>2016 <span>{t("year")}</span></h2>
                                <h6>Qurilish sohasidagi faoliyat boshlanishi</h6>
                            </div>
                        </div>
                    </div>
                    <StatisticsComp />
                </div>
            </div>
        </section>
    )
}

export default AboutUs;