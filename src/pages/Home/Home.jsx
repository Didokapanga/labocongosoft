import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import Projects from '../../components/Projects/Projects'
import Formations from '../../components/Formations/Formations'
import Products from '../../components/Home/Products/Products'
import Testimonials from '../../components/Testimonials/Testimonials'
import Agence from '../../components/Agence/Agence'
import Footer from '../../components/Footer/Footer'
import Copyright from '../../components/Copyright/Copyright'
import Faq from '../../components/Home/FAQ/Faq'
import Teams from '../../components/Teams/Teams'

const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <Services />
            <Teams />
            <Projects />
            <Formations />
            <Products />
            <Testimonials />
            <Agence />
            <Faq />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Home
