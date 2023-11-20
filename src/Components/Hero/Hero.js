import React from 'react';
import './Hero.css';
import Dress1 from '../../Assets/Header/Dress1.jpg';
import Dress2 from '../../Assets/Header/Dress2.jpg';
import Dress3 from '../../Assets/Header/Dress3.jpg';
import Dress4 from '../../Assets/Header/Dress4.jpg';
import { Link } from "react-router-dom";


function Hero () {


    return (
        <section id= 'hero'>
            <div className= "hero-container">
                <div className= "container">
                    <div className= "grid-container">
                        <div className= "featured grid-one">
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                to= "/shop">
                                <div id= "img1" className= "lil-overlay"></div>
                                <img src={Dress1} alt= "dress1" />
                                <p className="main-description">Velvet In Black</p>
                            </Link>
                        </div>
                        <div className="featured grid-two">
                            <Link to= "/shop">
                                <div id= "img2" className= "lil-overlay"></div>
                                <img src={Dress2} alt="dress2" />
                                <p className="main-description">Elegant in Black</p>
                            </Link>
                        </div>
                        <div className="featured grid-four">
                            <Link to= "/shop">
                                <div id= "img3" className= "lil-overlay"></div>
                                <img src={Dress3} alt="dress3" />
                                <p className= "main-description">Black in Black</p>
                            </Link>
                        </div>
                        <div className="featured grid-four-low">
                            <Link to= "/shop">
                                <div id= "img4" className= "lil-overlay"></div>
                                <img src={Dress4} alt="dress4" />
                                <p className="main-description">If it is not black?</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;