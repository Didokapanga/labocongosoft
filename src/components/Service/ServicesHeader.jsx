import React from 'react'
import './Service.css'
import { image1 } from '../../assets/assets'

const ServicesHeader = () => {
    return (
        <div className='serviceHero'>
            <div className="serviceHero-wrapper">
                <div className="serviceHero-left">
                    <h1 className='secondary-text'>
                        Des Solutions Innovantes pour Vos Besoins Digitalisés.
                    </h1>
                    <p className='primary-text'>
                        Chez LCSoft, nous offrons une gamme complète de services numériques pour répondre aux besoins de votre entreprise. Que vous cherchiez à automatiser vos processus, développer des applications sur mesure, ou intégrer des systèmes d'information, notre équipe d'experts est là pour vous accompagner. Nous transformons vos idées en solutions technologiques fiables et évolutives, conçues pour améliorer vos performances et vous placer à l'avant-garde de l'innovation.
                    </p>
                </div>
                <div className="serviceHero-right">
                    <img src={image1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ServicesHeader
