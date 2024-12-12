import React, { useEffect } from 'react'
import { Footer, Header, PortfolioComp } from '../../Components';
import Banner from './banner';
import ProjectsMap from './projectsmap';
import AboutUs from './aboutus';
import ContactComp from './contactComp';
import { homePortfolioData } from '../../constants';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div style={{ backgroundColor: "var(--body-color)" }}>
            <Header />
            <Banner />
            <ProjectsMap />
            <PortfolioComp data={homePortfolioData} />
            <AboutUs />
            <ContactComp />
            <Footer />
        </div>
    )
}

export default HomePage;