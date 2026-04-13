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
                            <strong className="strong-project">FL Portfolio</strong> es mi primer proyecto web independiente enfocandome en Frontend y Backend.
                            El objetivo del mismo es poder compartir mediante la web los proyectos los cuales estoy trabajando para que otras personas puedan ver mi trayectoria.
                        </p>

                        <p className="project-description-II">
                            En esta pagina, podés encontrar mis proyectos justo debajo de la sección "Sobre Mi", podrás ver uno por uno en un Carrusel con el titulo <strong className="strong-project">"Mis Proyectos"</strong>, el cual con las flechas azules vas a poder deslizar para verlos (Proximamente habrán mas proyectos).
                        </p>
                        
                        <div className="project-description-II">
                            <div className="coming-title">Posibles actualizaciones a futuro</div>
                            <div className="title-underline"></div>
                            <div className="next-change-container">
                                <ul className="changes-list">
                                    <li className="change-element-list">Un registros de cambios por cada actualización (Changelog)</li>
                                    <li className="change-element-list">Sidebar (Barra lateral) para navegar por las secciones del sitio</li>
                                    <li className="change-element-list">¡Mas de mis proyectos que compatir!</li>
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