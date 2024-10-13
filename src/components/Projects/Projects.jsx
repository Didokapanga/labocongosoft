import React, { useEffect, useRef, useState } from 'react'
import "./Projects.css"
import { projects } from '../../assets/assets';
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {

    // Références pour observer les animations
    const serviceItemsRef = useRef([]);

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

    return (
        <div className='projects'>
            <div className="projects-content">
                <div className="projects-title">
                    <span className="project-info primary-text">Nos quelques projets fièrement réalisés!</span>
                    <h2 className="project-title secondary-text" ref={(el) => serviceItemsRef.current[1] = el}>Notre métier est de développer des logiciels personnalisés pour les entreprises!</h2>
                    <a href="#" className='projects-btn forme-animated blob-animated' ref={(el) => serviceItemsRef.current[2] = el}>Voir Plus</a>
                </div>
                <div className="projects-item">
                    <ul className='projects-primary'>
                        {projects.map((project, index) => (
                            <li key={index} className='project-primary forme-animated' ref={(el) => serviceItemsRef.current[3] = el}>
                                <img src={project.image} alt="" className="projects-img" />
                                <div className="projects-info forme-animated" ref={(el) => serviceItemsRef.current[7] = el}>
                                    <span className="name-info">
                                        <div className='list-style'></div>
                                        <span>{project.name}</span>
                                    </span>
                                    {/* <span className="name-desc">{project.desc}</span> */}
                                    <div className="cat-info">
                                        <span className="name-cat">
                                            <div className="cat-style"></div>
                                            <span>{project.cat}</span>
                                        </span>
                                        <span className='go-link'><FaArrowRight /></span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Projects
