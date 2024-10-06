import React from 'react'
import './Services.css'
import ServicesHero from '../../components/Service/servicesHero'
import ServiceCard from '../../components/Service/ServiceCard'
import ServiceInfo from '../../components/Service/ServiceInfo'
import Testimonials from '../../components/Testimonials/Testimonials'
import Agence from '../../components/Agence/Agence'
import Faq from '../../components/Home/FAQ/Faq'
import Footer from '../../components/Footer/Footer'
import Copyright from '../../components/Copyright/Copyright'

const Services = () => {
    return (
        <div className='services'>
            <ServicesHero />
            <ServiceCard />
            <ServiceInfo />
            <Testimonials />
            <Agence />
            <Faq />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Services
