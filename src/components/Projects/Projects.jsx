import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { project_1, projects } from '../../assets/assets';
import { FaArrowRight } from 'react-icons/fa6';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Projects = () => {
    // Références pour observer les animations
    const serviceItemsRef = useRef([]);
    const scrollRef = useRef(null); // Référence pour la div qui contient la liste
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        // Fonction d'observation pour les animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observer chaque élément du service
        serviceItemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        // Nettoyage
        return () => {
            serviceItemsRef.current.forEach((item) => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);

    // Gérer le clic et le glissement pour le scroll
    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsMouseDown(false);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 3; // Multiplier pour la vitesse du scroll
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    // Fonction pour le scroll horizontal avec les flèches
    const scroll = (direction) => {
        const remToPx = 16; // 1rem = 16px
        let scrollAmount = 300; // Valeur par défaut en pixels

        // Vérifier si l'écran est inférieur à 500px et ajuster le scroll
        if (window.innerWidth <= 500) {
            scrollAmount = 27 * remToPx; // Convertir 25rem en pixels
        }

        scrollRef.current.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth',
        });
    };


    return (
        <div className='projects'>
            <div className="projects-content">
                <div className="projects-title">
                    <span className="project-info primary-text">Nos quelques projets fièrement réalisés!</span>
                    <h2 className="project-title secondary-text" ref={(el) => serviceItemsRef.current[1] = el}>Notre métier est de développer des logiciels personnalisés pour les entreprises!</h2>
                    <a href="#" className='projects-btn forme-animated blob-animated' ref={(el) => serviceItemsRef.current[2] = el}>Voir Plus</a>
                </div>
                <div
                    className="projects-item"
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <div className='projects-scroll'>
                        <span onClick={() => scroll(-1)}><FaArrowCircleLeft /></span>
                        <span onClick={() => scroll(1)}><FaArrowCircleRight /></span>
                    </div>
                    <ul className='projects-primary'>
                        {projects.map((project, index) => (
                            <li key={index} className='project-primary forme-animated' ref={(el) => serviceItemsRef.current[3] = el}>
                                <img src={project.image} alt="" className="projects-img" />
                                <div className="projects-info forme-animated" ref={(el) => serviceItemsRef.current[7] = el}>
                                    <span className="name-info">
                                        <div className='list-style'></div>
                                        <span>{project.name}</span>
                                    </span>
                                    <span className="name-desc">{project.desc}</span>
                                    <div className="cat-info">
                                        <span className="name-cat">
                                            <div className="cat-style"></div>
                                            <span>{project.cat}</span>
                                        </span>
                                        <span className='go'><FaArrowRight /></span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className='mobile-projects'>
                        {projects.map((project, index) => (
                            <li key={index} className='mobile-item forme-animated' ref={(el) => serviceItemsRef.current[3] = el}>
                                <div className="mobile-project-img">
                                    <img src={project.image} alt="" className="projects-mobile-img" />
                                </div>
                                <div className="projects-mobile-info forme-animated" ref={(el) => serviceItemsRef.current[7] = el}>
                                    <span className="mobile-info">
                                        <span>{project.name}</span>
                                    </span>
                                    <span className="mobile-desc">{project.desc}</span>
                                    <div className="cat-mobile-info">
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Projects;
