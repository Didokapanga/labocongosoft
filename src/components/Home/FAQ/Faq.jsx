import React, { useEffect, useRef, useState } from 'react'
import './Faq.css'
import { faqData } from '../../../assets/assets';
import { BsChatLeftDotsFill } from 'react-icons/bs';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const serviceItemsRef = useRef([]);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


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
        <div className='faq'>
            <div className="faq-content">
                <div className="faq-title">
                    <span className="faq-info primary-text">Cliquez pour voir les questions</span>
                    <h2 className="faq-title secondary-text">Des questions fréquemment posées</h2>
                </div>
                <div className="faq-item">
                    <div className="faq-left forme-animated" ref={(el) => serviceItemsRef.current[0] = el}>
                        <div className="faq-left">
                            {faqData.map((item, index) => (
                                <div key={index} className="faq-question" onClick={() => toggleAnswer(index)}>
                                    <h3>{item.question}</h3>
                                    {activeIndex === index && (
                                        <div className="faq-answer">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="faq-right forme-animated" ref={(el) => serviceItemsRef.current[1] = el}>
                        <div className="faq-cta">
                            <span>
                                <BsChatLeftDotsFill />
                            </span>
                            <h3>Vous avez un dévis ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita culpa quaerat ut non debitis et nisi doloribus tempora similique dolore.
                            </p>
                            <button className="faq-btn">
                                Envoyez-nous votre dévis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
