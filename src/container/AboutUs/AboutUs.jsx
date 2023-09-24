import React from 'react'
import './AboutUs.css'
// import { numbers } from '../../assets/numbers.jpg'

const AboutUs = () => {
    return (
        <section className="about-container">
            {/* <div className="section__padding about-inner-container" id="about">
                <p>Welcome, fight fan!</p>
                <p>
                    Fight Furnace is a tool for assessing the likelihood of an MMA athlete emerging victorious in a bout. Our app is equipped with a comprehensive set of predefined parameters, encompassing crucial factors to consider when evaluating the statistical profiles of two competing athletes.
                </p>
                <p>
                    While nothing may be the ultimate solution for fight predictions, Fight Furnace eliminates human emotions from the equation by delivering results based on the provided inputs.
                </p>
                <p>
                    To kickstart your journey and delve deeper into our tool, we invite you to explore our informative 'How-To' guide. Let's get started and uncover more about the power of Fight Furnace!
                </p>
            </div> */}

            <div className="we-are-block">

                <div id="about-us-section">

                    {/* <div className="about-us-image">

                        <img src={numbers} width={808} height={458} alt="Lobby Image" />

                    </div> */}

                    <div className="about-us-info">

                        <h2>Predictions made easy</h2>
                        <br />

                        <p>Fight Furnace is a tool for assessing the likelihood of an MMA athlete emerging victorious in a bout. Our calculator is equipped with a comprehensive set of predefined parameters, encompassing crucial factors to consider when evaluating the statistical profiles of two competing athletes.<br /><br />
                            To kickstart your journey and delve deeper into our tool, we invite you to explore our informative 'How-To' guide. Let's get started and uncover more about the power of Fight Furnace!
                        </p>

                        {/* <a href="#" title="About Us Button">ABOUT US</a> */}

                    </div>

                </div>

                {/* <div id="history-section">

                    <div className="history-image">

                        <img src="" width="951" height="471" alt="Building Pic" />

                    </div>

                    <div className="history-info">

                        <h2>Preserving Local History</h2>

                        <p>In 2018, technology companies, Desktop Doctors & Digital Upgrade found a new place to call home, at 816 N. 9th Ave. Since the takeover of the 118-year-old building (formally Stippler Tool & Supply and Crown Chair Company), there have been many renovations completed to preserve this local piece of Evansville, IN history.</p>

                        <a href="#" title="History Button">HISTORY</a>

                    </div>

                </div> */}

            </div>








        </section>
    )
}

export default AboutUs