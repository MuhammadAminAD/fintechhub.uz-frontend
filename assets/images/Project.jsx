import React from "react";
import Slider from "react-slick";
import './components.css'
import mysafar from '../images/mysafar.png'
import Unired from '../images/Unired.png'
import mfactor from '../images/mfactor.png'
import logo_dark from '../images/logo-dark.png'
import milli from '../images/Millimarket.png'
import basito from '../images/basito.svg'
import eduon from '../images/eduon.svg'
import itunisoft from '../images/itunisoft.svg'
import promark from '../images/promark.jpg'

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 5, // Show 3 cards at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2.1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div>
                <div className="card">
                    <img src={mysafar} alt="Card 1" />
                </div>
            </div>
            <div>
                <div className="card">
                    <img src={Unired} alt="Card 2" />
                </div>
            </div>
            <div>
                <div className="card">
                    <img src={mfactor} alt="Card 3" />
                </div>
            </div>
            <div>
                <div className="card">
                    <img src={logo_dark} alt="Card 4" />
                </div>
            </div>
            <div>
                <div className="card">
                    <img src={milli} alt="Card 5" />
                </div>
            </div>
            <div>
                <div className="card">
                    <img src={basito} alt="Card 5" />
                </div>
            </div>
            <div>
                <div className="card">
                    <img src={eduon} alt="Card 5" />
                </div>
            </div>
            <div>
                <div className="card">
                    <img src={itunisoft} alt="Card 5" />
                </div>
            </div>
            <div>
                <div className="card">
                    <img src={promark} alt="Card 5" />
                </div>
            </div>
        </Slider>
    );
};

export default Project;
