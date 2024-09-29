import React, { useEffect, useRef } from 'react'
import './Testimonials.css'
import { RiStarSFill } from 'react-icons/ri'
import { testimonials, user_1, user_2, user_3 } from '../../assets/assets'

const Testimonials = () => {

    const serviceItemsRef = useRef([]);

    useEffect(() => {
        // Fonction d'observation
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
        <div className='testimonials'>
            <div className="testimonials-content">
                <div className="testimonial-title">
                    <span className="testimonials-info primary-text">Qui de mieux que nos clients pour parler de nous ?</span>
                    <h2 className="testimonials-title secondary-text">Travailler avec des clients prestigieux et avant-gardistes est une véritable source de fierté pour nous.</h2>
                </div>
                <div className='testimonials-item'>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonials-card" ref={(el) => serviceItemsRef.current[0] = el}>
                            <span className="card-img">
                                <div className="card-image">
                                    <img src={testimonial.image} alt="" className="testimonials-logo" />
                                </div>
                                <div className="note"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></div>
                                {/* <div className="note">{testimonial.note}</div> */}
                            </span>
                            <span className="card-info">
                                <p className="avis-text">{testimonial.desc}</p>
                            </span>
                            <span className="card-detail">
                                <span className="testimonials-name">
                                    <span>{testimonial.name}</span>
                                    <span className='fonction-testimonials'>{testimonial.role}</span>
                                </span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
