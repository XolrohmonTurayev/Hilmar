import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionTitle from '../sectionTitle';
import { useTranslation } from 'react-i18next';

import "./style.css";
import "./responsive.css";

const PortfolioComp = ({ data }) => {
    const { t } = useTranslation();
    const location = useLocation();

    const [currentPage, setCurrentPage] = useState(1);
    const scrollTop = window.scrollY;

    function Increment() {
        setCurrentPage(currentPage + 1);
        window.scrollTo(0, 0); // Sahifani yuqoriga surish
    }

    function Decrement() {
        setCurrentPage(currentPage - 1);
        window.scrollTo(0, 0); // Sahifani yuqoriga surish
    }

    const itemsPerPage = 6;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0); // Sahifani yuqoriga surish
    };

    useEffect(() => {
        let paginationBox = document.querySelector(".pagination__box");
        if (location.pathname === "/") {
            paginationBox.classList.add("hidden");
        } else {
            paginationBox.classList.remove("hidden");
        }
    }, [location.pathname]);

    return (
        <section className='projects-section'>
            <div className="container">
                <span className='projects-section-title-wrapper'>
                    <SectionTitle>{t("home-projects-section-title")}</SectionTitle>
                </span>
                <div className="flex-content">
                    {currentItems.map((el) => (
                        <div key={el.id} className='flex-item'>
                            <Link to={`/projects/${el.link}`}>
                                <div>
                                    <img src={el.img} className='' />
                                </div>
                                <div className='flex-item-info'>
                                    <h3 className=''>"{t(`${el.title}`)}"</h3>
                                    <div className='addres-box content'>
                                        <div className='content'>
                                            <i className="fa-solid fa-location-arrow"></i>
                                        </div>
                                        <span>{t("address")}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className={`pagination__box content`}>
                    <button className={`pagination-button content ${currentPage === 1 ? "hidden" : ""}`} onClick={Decrement}>
                        <i className='fa-solid fa-left-long'></i>
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`pagination-button content ${page === currentPage ? "active" : ""}`}
                        >
                            {page}
                        </button>
                    ))}
                    <button className={`pagination-button content ${currentPage === totalPages ? "hidden" : ""}`} onClick={Increment}>
                        <i className='fa-solid fa-right-long'></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default PortfolioComp;
