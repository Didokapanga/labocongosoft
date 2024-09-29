import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import Projects from '../../components/Projects/Projects'
import Formations from '../../components/Formations/Formations'
import Products from '../../components/Home/Products/Products'

const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <Services />
            <Projects />
            <Formations />
            <Products />
        </div>
    )
}

export default Home
