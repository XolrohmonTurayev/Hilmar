import React from 'react';

import "./style.css";

import loaderLogo from "../../assets/icons/siteLogo.svg";

const Loader = () => {
    return (
        <div className='content loader-container'>
            <div className="loader-logo">
                <img src={loaderLogo} alt="" />
            </div>
        </div>
    )
}

export default Loader;