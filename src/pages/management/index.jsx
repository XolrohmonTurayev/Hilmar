import React, { useEffect } from 'react';
import { Header, PenSection, Footer, SectionTitle } from "../../Components"
import { useTranslation } from 'react-i18next';

import "./style.css";

import siteLogoDark from "../../assets/icons/siteLogoDark.svg";
import { employeesData } from '../../constants';
import { useLocation } from 'react-router-dom';

const ManagementPage = () => {
    const { t } = useTranslation();

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Header />
            <section className='management-section'>
                <div className="container">
                    <SectionTitle>{t("management")}</SectionTitle>
                    <div className="management-cont">
                        <div className="management-info">
                            <p>
                                <span>{t("introduction1")}</span>
                                <br />
                                <br />
                                <span>{t("introduction2")}</span>
                                <br />
                                <br />
                                <span>{t("introduction3")}</span>
                            </p>
                        </div>
                        <div className='flex-1 content'>
                            <img src={siteLogoDark} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='employees-section'>
                <div className="container">
                    <SectionTitle>{t("company_staff")}</SectionTitle>
                    <div className='employees-flex_box'>
                        {employeesData.map(info => (
                            <div className={`${info.classList} employee-card`} key={info.id}>
                                <img src={info.img} alt="" />
                                <div className='employee-card-info'>
                                    <h3>{t(`${info.fio}`)}</h3>
                                    <p>{t(`${info.job}`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <PenSection />
            <Footer />
        </div>
    )
}

export default ManagementPage
