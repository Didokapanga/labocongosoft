import React, { useEffect, useRef } from 'react'
import "./Products.css"
import { plus, products, web } from '../../../assets/assets'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Products = () => {

    // Références pour observer les animations
    const serviceItemsRef = useRef([]);
    const productsListRef = useRef(null);

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

    // Fonction pour défiler vers la gauche
    const scrollLeft = () => {
        if (productsListRef.current) {
            productsListRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    // Fonction pour défiler vers la droite
    const scrollRight = () => {
        if (productsListRef.current) {
            productsListRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };


    return (
        <div className='products'>
            <div className="products-content">
                <div className="products-card-title">
                    <div className="products-title">
                        <span className="products-info primary-text">Des marques qui ont changé le monde</span>
                        <h2 className="products-title">Laissez-nous vous proposer des produits de qualité de la part de nos meilleurs fournisseurs.</h2>
                        <p className='products-desc forme-animated' ref={(el) => serviceItemsRef.current[0] = el}>
                            Nous collaborons avec de grand fournisseurs dans le pays pour
                            béneficié des marques les plus fiables et réputées dans le
                            domaine des équipements informatiques pour vous offrir des
                            solutions qui répondent à vos besoins professionnels.
                        </p>
                        <p className='products-desc forme-animated' ref={(el) => serviceItemsRef.current[1] = el}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vero aperiam, atque ipsum natus omnis provident consectetur debitis veritatis minima quae quaerat dicta obcaecati expedita unde ipsa sit voluptate? Minima!
                        </p>
                        <p className='products-desc forme-animated' ref={(el) => serviceItemsRef.current[2] = el}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, neque?
                        </p>
                        <a href="#" className='products-btn'>Voir Plus</a>
                    </div>
                </div>
                <div className="products-card">
                    <ul>
                        <div className="item-card">
                            <li className='item-1 info-item'>
                                <img src={plus} alt="" />
                            </li>
                            <li className='item-2 info-item'>
                                <img src={plus} alt="" />
                            </li>
                        </div>
                        <div className="item-card">
                            <li className='item-3 info-item'>
                                <img src={plus} alt="" />
                            </li>
                            <li className='item-4 info-item'>
                                <img src={plus} alt="" />
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Products
