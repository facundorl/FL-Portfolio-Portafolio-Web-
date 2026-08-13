import React, { useEffect, useState } from 'react';
import logo from '../resources/logo-portfolio-card.png';
import LetterGlitch from './LetterGlitch';
import TextType from './TextType';
import './Header.css';

// Calcula el tamaño de fuente del título según el ancho de pantalla,
// para que TextType se vea prolijo tanto en mobile como en desktop.
function getTitleFontSize(width) {
    if (width <= 480) return 42;
    if (width <= 768) return 60;
    return 96;
}

function Header() {
    const [titleFontSize, setTitleFontSize] = useState(() =>
        typeof window !== 'undefined' ? getTitleFontSize(window.innerWidth) : 96
    );

    // Controla cuándo termina de "tipearse" el título, para recién
    // ahí mostrar el subtítulo y el texto de scroll.
    const [titleDone, setTitleDone] = useState(false);

    useEffect(() => {
        const handleResize = () => setTitleFontSize(getTitleFontSize(window.innerWidth));
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <header className="header-container">
            {/* Fondo animado con LetterGlitch (reemplaza al gif) */}
            <div className="header-bg">
                <LetterGlitch
                    glitchSpeed={50}
                    centerVignette={true}
                    outerVignette={false}
                    smooth
                    glitchColors={["#1400ff", "#0013ff", "#ffffff"]}
                />
            </div>

            {/* Overlay oscuro sobre el gif para legibilidad */}
            <div className="header-overlay" />

            <div className="header-content">
                {/* 1. Logo — aparece primero */}
                <img
                    src={logo}
                    alt="Logo"
                    className="logo-header animate-logo"
                />

                {/* 2. Título — aparece después del logo, con efecto de tipeo */}
                <h1 className="header-title animate-title">
                    <TextType
                        as="span"
                        text={["Facundo Ramos Lima"]}
                        loop={false}
                        showCursor
                        cursorCharacter="_"
                        typingSpeed={80}
                        initialDelay={900}
                        cursorBlinkDuration={0.5}
                        className="header-title-type"
                        onSentenceComplete={() => setTitleDone(true)}
                        style={{
                            fontSize: `${titleFontSize}px`,
                            fontWeight: 800,
                            letterSpacing: '-2px',
                            color: '#F8FAFC',
                            lineHeight: 1.1,
                        }}
                    />
                </h1>

                {/* 3. Resto del contenido — aparece recién cuando el título terminó de tipearse */}
                <h2
                    className={`header-subtitle ${titleDone ? 'animate-fade-up' : 'pre-hidden'}`}
                    style={{ animationDelay: '0.15s' }}
                >
                    ¡Bienvenido/a a mi portafolio web!
                </h2>

                <h3
                    className={`scroll-text ${titleDone ? 'animate-fade-up' : 'pre-hidden'}`}
                    style={{ animationDelay: '0.45s' }}
                >
                    
                </h3>
            </div>

            <div className="scroll-arrow" onClick={scrollDown}>
                ↓
            </div>
        </header>
    );
}

export default Header;