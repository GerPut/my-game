import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="row primary">

                    {/* <div className="column about">
                        <h3>FIGHT FURNACE</h3>
                        <p>

                        </p>
                        <div className="social">
                            <i className="fa-brands fa-facebook-square"></i>
                            <i className="fa-brands fa-instagram-square"></i>
                            <i className="fa-brands fa-twitter-square"></i>
                            <i className="fa-brands fa-youtube-square"></i>
                            <i className="fa-brands fa-whatsapp-square"></i>
                        </div>
                    </div> */}
                    <div className="column links">
                        <h3>Quick Links</h3>

                        <ul className="footer-links">
                            <li>
                                <a href="#faq">F.A.Q</a>
                            </li>
                            <li>
                                <a href="#cookies-policy">Cookies Policy</a>
                            </li>
                            <li>
                                <a href="#terms-of-services">Terms Of Service</a>
                            </li>
                            <li>
                                <a href="#support">Support</a>
                            </li>
                        </ul>
                    </div>

                    <div className="column links">
                        <h3>Resources</h3>
                        <ul className="footer-links">
                            <li>
                                <a href="#faq">F.A.Q</a>
                            </li>
                            <li>
                                <a href="#cookies-policy">Cookies Policy</a>
                            </li>
                            <li>
                                <a href="#terms-of-services">Terms Of Service</a>
                            </li>
                            <li>
                                <a href="#support">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div></div>
                    <div className="column subscribe">
                        <h3>Newsletter</h3>
                        <div>
                            <input type="email" placeholder="Your email id here" />
                            <button className="sub__button">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="row copyright">
                    <p >Copyright &copy; 2023 FIGHT FURNACE</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer