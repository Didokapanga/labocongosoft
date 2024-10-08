import React from 'react'
import './Services.css'
import ServiceCard from '../../components/Service/ServiceCard'
import ServiceInfo from '../../components/Service/ServiceInfo'
import Testimonials from '../../components/Testimonials/Testimonials'
import Agence from '../../components/Agence/Agence'
import Faq from '../../components/Home/FAQ/Faq'
import Footer from '../../components/Footer/Footer'
import Copyright from '../../components/Copyright/Copyright'
import ServicesHeader from '../../components/Service/ServicesHeader'

const Services = () => {
    return (
        <div className='services'>
            <ServicesHeader />
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
