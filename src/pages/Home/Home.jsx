import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import Projects from '../../components/Projects/Projects'
import Formations from '../../components/Formations/Formations'

const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <Services />
            <Projects />
            <Formations />
        </div>
    )
}

export default Home
