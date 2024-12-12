import React from 'react'

import "./style.css";

const SectionTitle = ({ children, customClass }) => {
    return (
        <h2 className={`section-title ${customClass}`}>
            {children}
        </h2>
    )
}

export default SectionTitle
