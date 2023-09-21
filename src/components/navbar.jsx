import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <p>Fight Furnace</p>
                <ul className="app__navbar-links">
                    <li className="p__kanit"><a href="#home">HOME</a></li>
                    <li className="p__kanit"><a href="#getstarted">GET STARTED</a></li>
                    <li className="p__kanit"><a href="#about">ABOUT</a></li>
                    <li className="p__kanit"><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar