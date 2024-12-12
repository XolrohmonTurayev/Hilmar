import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from "../../../Components/sectionTitle";

import "./style.css"
import "./responsive.css"

import contactSectionImg from "../../../assets/images/HomePageImg/contact-section-img.svg"

const ContactComp = () => {
    const { t } = useTranslation();

    const [phone, setPhone] = useState('');

    const formatUzbekPhone = (input) => {
        let cleaned = input.replace(/\D/g, '').substring(0, 9);
        let formattedNumber = '';

        if (cleaned.length > 2) {
            formattedNumber += '(' + cleaned.substring(0, 2) + ') ' + cleaned.substring(2, 5);
        } else {
            formattedNumber += cleaned;
        }

        if (cleaned.length > 5) {
            formattedNumber += '-' + cleaned.substring(5, 7);
        }

        if (cleaned.length > 7) {
            formattedNumber += '-' + cleaned.substring(7, 9);
        }

        return formattedNumber;
    };

    const handleInputChange = (e) => {
        const input = e.target.value;
        const formatted = formatUzbekPhone(input);
        setPhone(formatted);
    };

    return (
        <section className='contact-section' id='contact'>
            <div className="container">
                <div className='contact-cont'>
                    <div>
                        <SectionTitle>{t("contact_us")}</SectionTitle>
                        <form action="" className='contact__form'>
                            <div className='contact-form'>
                                <div className='contact-form_item'>
                                    <label htmlFor="fio">{t("fio")}<sup>*</sup></label>
                                    <input type="text" id='fio' className='contact__inputs' required placeholder={t("yozing")} />
                                </div>
                                <div className='contact-form_item'>
                                    <label htmlFor="company">{t("kompaniya")}<sup>*</sup></label>
                                    <input type="text" id='company' className='contact__inputs' required placeholder={t("yozing")} />
                                </div>
                                <div className='contact-form_item'>
                                    <label htmlFor="email">{t("email")}<sup>*</sup></label>
                                    <input type="email" id='email' className='contact__inputs' required placeholder={t("yozing")} />
                                </div>
                                <div className='contact-form_item'>
                                    <label htmlFor="number">{t("telefon")}<sup>*</sup></label>
                                    <div className='tel__input'>
                                        <span>+998</span>
                                        <input
                                            type="text"
                                            id='number'
                                            required
                                            value={phone}
                                            onChange={handleInputChange}
                                            placeholder="(__) ___-__-__"
                                            className=''
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='contact-massage'>
                                <label htmlFor="massage">{t("xabar")}<sup>*</sup></label>
                                <textarea placeholder={t("yozing")} id="massage" rows="6"></textarea>
                            </div>
                            <button>{t("yuborish")}</button>
                        </form>
                    </div>
                    <div className='flex-1 contact-img'>
                        <img src={contactSectionImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactComp;