import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'

const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <Services />
        </div>
    )
}

export default Home
