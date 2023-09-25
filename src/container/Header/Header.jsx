import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="app__header app__wrapper section__padding" id="home">
                <h1 className='app__header-h1'>OWN ODDS</h1>
                <h3 className="app__subtext">with the best MMA calculator</h3>
                <div className="header__button-box">
                    <a className="button" href="#" >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Try Now
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header