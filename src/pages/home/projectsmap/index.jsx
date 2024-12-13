import React from 'react';
import { SectionTitle } from '../../../Components';

import "./style.css";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProjectsMap = () => {
    const { t } = useTranslation();
    return (
        <div className='container'>
            <div className='projects-map-wrapper'>
                <div className='projects__map__header'>
                    <SectionTitle>{t("map-section-title")}</SectionTitle>
                    <Link to={"/projects"} className='content'>
                        <span>{t("view-all")}</span>
                        <i className='fa-solid fa-right-long'></i>
                    </Link>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d712.5321013664361!2d69.25531085174657!3d41.27641174981323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bc4d61216c5%3A0x813840a7ce89e856!2sHilmar%20Development!5e1!3m2!1sru!2s!4v1730293402707!5m2!1sru!2s"
                    loading="lazy"
                    className='projects-map'
                >
                </iframe>
            </div>
        </div>
    )
}

export default ProjectsMap;