import React from 'react';
import "./style.css";


import pencilImg from "../../assets/images/ProjectsImg/pencil.png";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const PenSection = () => {
    const { t } = useTranslation();
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
        <section className='pen-section'>
            <div className="container">
                <div className="pen-content">
                    <div className='pen-info'>
                        <h2>{t("have_questions_or_suggestions")}</h2>
                        <a href='#contact' onClick={handleContactClick}>{t("write_to_us")}</a>
                    </div>
                    <div className='pen-image'>
                        <img src={pencilImg} alt="pen" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PenSection
