import React from 'react'
import './Copyright.css'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'

const Copyright = () => {
    return (
        <div className='copyright'>
            <div className="copyright-content">
                <div className="copyright-left">
                    <p className='copyright-text'>© Copyright - Tous les droits sont résevés par lcsoft</p>
                </div>
                <div className="copyright-right">
                    <sapn className="social-media"><FaFacebook /></sapn>
                    <sapn className="social-media"><FaLinkedin /></sapn>
                    <sapn className="social-media"><IoLogoYoutube /></sapn>
                </div>
            </div>
        </div>
    )
}

export default Copyright
