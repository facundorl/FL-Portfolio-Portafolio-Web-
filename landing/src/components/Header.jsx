import React, { useEffect, useState } from 'react';
import logo from '../logo-FL-AZUL.png'
import './Header.css'


function Header () {

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };

    return (
        <header className="header-container">
            <div className="header-content">
                <img src={logo} alt="Logo" className="logo-header" />

                <h1 className="header-title">Facundo Ramos Lima</h1>


                <h2 className="header-subtitle">
                    ¡Bienvenido/a a mi portafolio web!
                </h2>

                <h3 className="scroll-text">
                    Desplaza hacia abajo para ver 
                </h3>
            </div>

            <div className="scroll-arrow" onClick={scrollDown}>
                ↓
            </div>
        </header>
    )
}

export default Header;