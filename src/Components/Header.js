import React from 'react';
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div id='main'>
            <Navbar/>
            <div className="name">
                <h1 className="name-title">Антипротокол</h1>
                <div className="name-button">
                    <button  className={'cv-btn cv-btn--one'}>Купить сейчас</button>
                    <button  className={'cv-btn cv-btn--second'}>Бесплатный контент</button>
                </div>

            </div>
        </div>
    );
};

export default Header;