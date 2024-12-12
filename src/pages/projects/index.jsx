import React, { useEffect } from 'react'
import { Footer, Header, PortfolioComp } from '../../Components'
import PenSection from '../../Components/penSection'
import { homePortfolioData } from '../../constants'
import { useLocation } from 'react-router-dom'

const ProjectsPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Header />
            <PortfolioComp data={homePortfolioData} />
            <PenSection />
            <Footer />
        </div>
    )
}

export default ProjectsPage
