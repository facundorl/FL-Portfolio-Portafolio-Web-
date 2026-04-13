import React, { useState } from 'react';
import './Carrousel.css';
import Logo from "../resources/logo-portfolio-card.png"
import { Link } from 'react-router-dom';
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            id: 1,
            title: "FL Portfolio",
            description: "¡Mi portafolio personal y profesional en formato web ya esta disponible!. Hacé click o toca en ''Ver proyecto'' para mas información. ",
            technologies: ["React", "CSS", "JavaScript"],
            image: "portfolio",
            link: "/portfolio-fl",
            status: "completed"
        },
        {
            id: 2,
            title: "Próximamente",
            description: "Pronto habrán mas proyectos que habre desarrollado y/o de los cuales estoy trabajando",
            technologies: ["En desarrollo"],
            image: "coming-soon",
            link: null,
            status: "upcoming"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="carousel-section" id="projects">
            <div className="carousel-container">
                <div className="carousel-header">
                    <h2 className="carousel-title">Mis Proyectos</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="carousel-wrapper">
                    <button className="carousel-button prev" onClick={prevSlide}>
                        ‹
                    </button>

                    <div className="carousel-content">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`carousel-card ${
                                    index === currentIndex ? 'active' : ''
                                } ${project.status === 'upcoming' ? 'coming-soon-card' : ''}`}
                                style={{
                                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                                }}
                            >
                                <div className="card-image">
                                    {project.status === 'completed' ? (
                                        <div className="project-image-placeholder">
                                            <span className="image-icon"><img src={Logo} alt="FL Logo" /></span>
                                        </div>
                                    ) : (
                                        <div className="coming-soon-image">
                                            <span className="coming-soon-icon">🚀</span>
                                        </div>
                                    )}
                                </div>

                                <div className="card-content">
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-description">{project.description}</p>

                                    

                                    {project.status === 'completed' && project.link && (
                                        <Link to={project.link} className="card-link">
                                            Ver proyecto 
                                         </Link>
                                    )}

                                    
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-button next" onClick={nextSlide}>
                        ›
                    </button>
                </div>

                <div className="carousel-indicators">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;