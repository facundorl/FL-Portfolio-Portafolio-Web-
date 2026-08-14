import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './portfolio-fl.css';
import startImg from '../resources/start-img-carousel.jpg'
import aboutImg from '../resources/about-img-carousel.png'
import projectImg from '../resources/project-img-carousel.jpg'


const PortfolioFL = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const navigate = useNavigate()

    const images = [
        startImg,
        aboutImg,
        projectImg
    ];

    const prevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleBackToHome = () => {
        navigate('/')
    }

    return (
        <section className="project-portfolio-section">
            <div className="back-button-container"><button className="back-button" onClick={handleBackToHome}>Volver a <strong className="strong-back">Inicio</strong></button></div>
            <div className="project-portfolio-container">
                <div className="project-content">
                    <h1 className="portfolio-title">¿De que trata este proyecto?</h1>
                    <div className="title-underline"></div>
                    
                    <div className="project-text">
                        <p className="project-description">
                            En el marco del curso <strong className="strong-project">Front End JS</strong> brindado por el programa <strong className="strong-project">Talento Tech</strong>
                            desarrollé una página que simula el sitio oficial de una tienda de modelos a escala de aviones de combate.
                        </p>

                        <p className="project-description-II">
                            Teniamos como consigna aplicar los aprendizajes obtenidos a lo largo de la cursada en el desarrollo de un sitio web ficticio, manteniendo las pautas y herramientas para el desarrollo
                            logré realizar mi propio desarrollo con su posterior aprobación y titulación de la extensión formativa.
                        </p>
                        
                        <div className="project-description-II">
                            <div className="coming-title">El proyecto en cuestión, aplica todos los aprendizajes incluyendo:</div>
                            <div className="title-underline"></div>
                            <div className="next-change-container">
                                <ul className="changes-list">
                                    <li className="change-element-list">HTML semantico (Header, Navbar, Body, Footer, etc)</li>
                                    <li className="change-element-list">Un Navbar para poder desplazarse por las diferentes secciones de la página</li>
                                    <li className="change-element-list">Funcionalidad programada en Javascript para agregar productos al carrito, con la posibilidad de simular una confirmación de una compra.</li>
                                    <li className="change-element-list">Envio de formulario de contacto mediante integración con Formspree.</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="image-carousel">
                    <button className="carousel-btn prev" onClick={prevImage}>‹</button>
                    <div className="carousel-image-container">
                        <img 
                            src={images[currentImage]} 
                            alt={`Proyecto ${currentImage + 1}`} 
                            className="carousel-image" 
                        />
                    </div>
                    <button className="carousel-btn next" onClick={nextImage}>›</button>
                    <div className="carousel-dots">
                        {images.map((_, index) => (
                            <span 
                                key={index}
                                className={`dot ${index === currentImage ? 'active' : ''}`}
                                onClick={() => setCurrentImage(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioFL;