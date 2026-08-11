import React from 'react';
import logo from '../resources/logo-portfolio-card.png';
import './Header.css';

// Divide un string en spans animados letra por letra
function AnimatedText({ text, className, delay = 0 }) {
    return (
        <span className={className}>
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    className="letter"
                    style={{ animationDelay: `${delay + i * 0.05}s` }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    );
}

function Header() {
    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <header className="header-container">
            {/* Fondo gif: cuando tengas el gif, ponlo en /public/bg.gif
                o cambia la ruta en Header.css (.header-bg) */}
            <div className="header-bg" />

            {/* Overlay oscuro sobre el gif para legibilidad */}
            <div className="header-overlay" />

            <div className="header-content">
                <img
                    src={logo}
                    alt="Logo"
                    className="logo-header animate-logo"
                />

                <h1 className="header-title">
                    <AnimatedText text="Facundo Ramos Lima" delay={0.2} />
                </h1>

                <h2 className="header-subtitle animate-fade-up" style={{ animationDelay: '1.4s' }}>
                    ¡Bienvenido/a a mi portafolio web!
                </h2>

                <h3 className="scroll-text animate-fade-up" style={{ animationDelay: '1.8s' }}>
                    Desplaza hacia abajo para ver
                </h3>
            </div>

            <div className="scroll-arrow" onClick={scrollDown}>
                ↓
            </div>
        </header>
    );
}

export default Header;