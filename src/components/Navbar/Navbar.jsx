import React from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <a href="">FIGHT FURNACE</a>
            </div>
            <ul className='app__navbar-links'>
                <li className='p__second-font'><a href="#home">HOME</a></li>
                <li className='p__second-font'><a href="#about">ABOUT</a></li>
                <li className='p__second-font'><a href="#contact">CONTACT</a></li>
            </ul>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li><a href="#home" onClick={() => setToggleMenu(false)}>HOME</a></li>
                            <li><a href="#about" onClick={() => setToggleMenu(false)}>ABOUT</a></li>
                            <li><a href="#menu" onClick={() => setToggleMenu(false)}>CONTACT</a></li>
                            <li><a href="#awards" onClick={() => setToggleMenu(false)}>CALCULATE</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar