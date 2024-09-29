import React, { useEffect, useRef } from 'react';
import './Teams.css';
import { animation, teams } from '../../assets/assets';


const Teams = () => {
    // Références pour observer les animations
    const teamItemsRef = useRef([]);
    const textAnimatedRef = useRef(null);
    const animateTopRef = useRef([]);
    const blobAnimatedRef = useRef([]);

    useEffect(() => {
        // Fonction d'observation
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('teams-is-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observer chaque élément
        if (textAnimatedRef.current) {
            observer.observe(textAnimatedRef.current);
        }

        animateTopRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        blobAnimatedRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        teamItemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        // Nettoyage
        return () => {
            if (textAnimatedRef.current) {
                observer.unobserve(textAnimatedRef.current);
            }
            animateTopRef.current.forEach((item) => {
                if (item) observer.unobserve(item);
            });
            blobAnimatedRef.current.forEach((item) => {
                if (item) observer.unobserve(item);
            });
            teamItemsRef.current.forEach((item) => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);

    return (
        <div className='teams'>
            <div className="teams-content">

                <div className="teams-right">
                    <span className='title-team secondary-text'>
                        <h2 className='h2'>Des valeurs fortes nous gouvernent, nous guident et définissent nos choix</h2>
                    </span>
                    <ul className='teams-animate-top'>
                        {teams.map((team, index) => (
                            <li>
                                <div className='team-item-img'>
                                    <img src={team.image} alt="" />
                                    <span className='team-detail'>
                                        <h4>{team.title}</h4>
                                        <div className="team-item-desc">{team.desc}</div>
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div >
                <div className="teams-left">
                    <span className="teams-primary-text">Pourquoi nous choisir ?</span>
                    <h2 className="secondary-text">
                        Transformer vos défis numériques<br />en opportunités de croissance!
                    </h2>
                    <p className='teams-forme-animated' ref={(el) => teamItemsRef.current[1] = el}>
                        Chez LC Soft, nous nous engageons à vous accompagner dans la numérisation de vos processus pour optimiser vos performances et vous aider à atteindre vos objectifs stratégiques.

                        De plus, grâce à notre réseau de fournisseurs de confiance, nous avons la possibilité de vous fournir des équipements sûrs et fiables, garantissant ainsi une mise en œuvre réussie de vos projets technologiques.
                    </p>
                    <a href="#" className='teams-blob-animated' ref={(el) => blobAnimatedRef.current[2] = el}>Voir Plus</a>
                </div>
            </div >
        </div >
    );
}

export default Teams;
