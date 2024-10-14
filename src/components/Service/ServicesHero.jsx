import React from 'react'
import './Service.css'
import { image1 } from '../../assets/assets'

const ServicesHero = () => {
    return (
        <div className='serviceHero'>
            <div className="serviceHero-wrapper">
                <div className="serviceHero-left">
                    <h1>
                        Des Solutions Innovantes pour Vos Besoins Digitalisés.
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestias earum aut officia. Impedit ex a praesentium eveniet, voluptatibus incidunt error dolores non, nihil, omnis blanditiis ducimus quas tempore architecto.
                    </p>
                </div>
                <div className="serviceHero-right">
                    <img src={image1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ServicesHero
