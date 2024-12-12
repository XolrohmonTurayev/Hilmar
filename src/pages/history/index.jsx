import React, { useEffect } from 'react';
import { Footer, Header, PenSection, SectionTitle } from '../../Components';
import { t } from 'i18next';

import "./style.css";
import { historyData } from '../../constants';
import { useLocation } from 'react-router-dom';

const HistoryPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <Header />
            <section className='history-section'>
                <div className="container">
                    <div className='history-cont-wrapper'>
                        <SectionTitle>{t("history")}</SectionTitle>
                        <div className='history-flex-list'>
                            {historyData.map((el) => (
                                <div key={el.id} className='history-list-item' >
                                    <i className="fa-solid fa-circle"></i>
                                    <span>{el.year}</span>
                                    <p>{t(`${el.description}`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <PenSection />
            <Footer />
        </div>
    )
}

export default HistoryPage;