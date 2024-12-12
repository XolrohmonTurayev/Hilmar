import React from 'react';
import { StatisticsData } from '../../constants';
import { useTranslation } from 'react-i18next';

import "./style.css";

import justLogo from "../../assets/icons/justLogo.svg";

const StatisticsComp = () => {
    const { t } = useTranslation();
    return (
        <div className='about-content '>
            {StatisticsData.map((el) => (
                <div key={el.id} className='statistics-item overflow-hidden' >
                    <div className='stat-cont'>
                        <div className='stat_icon-wrapper content'>
                            <img src={el.icon} />
                        </div>
                        <h4>{t(`${el.title}`)}</h4>
                    </div>
                    <p>{t(`${el.text}`)}</p>
                    <img src={justLogo} className='right-side-logo' />
                </div>
            ))}
        </div>
    )
}

export default StatisticsComp;

// #11565f