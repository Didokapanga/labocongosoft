import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { logo } from '../../assets/assets';
import { RiCloseLine, RiMenu4Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = ({ handleNavigation }) => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const handleScroll = () => {
        // Vérifie la largeur de l'écran
        if (window.innerWidth < 600) {
            return; // Désactiver la fonctionnalité sur les écrans < 600px
        }

        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }

        // Vérifier si la position de défilement dépasse 37rem (592px)
        if (currentScrollY > 592) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <nav className={`navbar ${showNavbar ? 'navbar--visible' : 'navbar--hidden'} ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar-content">
                <div className="navbar-logo">
                    <Link to="/"><img src={logo} alt="Logo du site" className="logo-img" onClick={handleNavigation} /></Link>
                </div>
                <div className="navbar-menu">
                    <ul>
                        <li>
                            <Link to="/services" onClick={handleNavigation}><a href="">Nos services</a></Link>
                        </li>
                        <li><a href="">Nos réalisations</a></li>
                        <li><a href="">Formations</a></li>
                        <li><a href="">Produits</a></li>
                        <li className='contact'><a href="">Prendre contact</a></li>
                    </ul>
                    <span className="berger-menu" onClick={toggleSidebar}><RiMenu4Line /></span>
                </div>
                {/* Menu latéral */}
                <div className={`sidebar ${showSidebar ? 'sidebar--open' : 'sidebar--closed'} ${isScrolled ? 'navbar--scrolled' : ''}`}>
                    <span className="close-sidebar" onClick={toggleSidebar}>
                        <RiCloseLine />
                    </span><ul>
                        <Link to="/services" onClick={handleNavigation}><a href="">Nos services</a></Link>
                        <li><a href="">Nos réalisations</a></li>
                        <li><a href="">Formations</a></li>
                        <li><a href="">Produits</a></li>
                        <li><a href="">Prendre contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
