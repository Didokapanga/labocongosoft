import React from 'react'
import "./Products.css"
import { products } from '../../../assets/assets'

const Products = () => {
    return (
        <div className='products'>
            <div className="products-content">
                <div className="products-card-title">
                    <div className="products-title">
                        <span className="products-info primary-text">Des marques qui ont changé le monde</span>
                        <h2 className="products-title">Laissez-nous vous proposer des produits de qualité de la part de nos meilleurs fournisseurs.</h2>
                        <p className="products-desc">
                            Nous collaborons avec de grand fournisseurs dans le pays pour
                            béneficié des marques les plus fiables et réputées dans le
                            domaine des équipements informatiques pour vous offrir des
                            solutions qui répondent à vos besoins professionnels.
                        </p>
                        <p className="products-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vero aperiam, atque ipsum natus omnis provident consectetur debitis veritatis minima quae quaerat dicta obcaecati expedita unde ipsa sit voluptate? Minima!
                        </p>
                        <div className="products-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, neque?
                        </div>
                        <a href="#" className='products-btn forme-animated blob-animated'>Voir Plus</a>
                    </div>
                </div>
                <div className="products-card">
                    <ul>
                        {products.map((product, index) => (
                            <li key={index}>
                                <img src={product.image} alt="" className="item-image" />
                                <h3 className="item-title">{product.title}</h3>
                                <p className="item-cat">{product.categorie}</p>
                                <a href="#" className='products-view forme-animated blob-animated'>Voir</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Products
