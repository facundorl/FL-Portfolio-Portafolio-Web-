import React from "react";
import { useEffect } from "react";
import './Footer.css';
import footerLogo from '../resources/logo-portfolio-card.png'

const Footer = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Comentar o eliminar la siguiente línea si quieres que la animación se ejecute CADA VEZ que haces scroll arriba/abajo
                    // observer.unobserve(entry.target); 
                } else {
                    // Descomentar esto si quieres que los elementos se vuelvan a ocultar al salir de la pantalla
                    // entry.target.classList.remove('is-visible');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elements = document.querySelectorAll('.reveal-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);




    return (
        <section className="footer-section">
            <div className="footer-container">
                <h1 className="footer-text reveal-on-scroll delay-300">@2026 FL Portfolio. Todos los derechos reservados.</h1>
            </div>
        </section>
    )
}

export default Footer;