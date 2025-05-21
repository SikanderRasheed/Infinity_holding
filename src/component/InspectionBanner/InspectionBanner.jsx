import React from 'react'
import Slider from 'react-slick'
// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCog } from 'react-icons/fa';
// Images
// import BannerSlide from "public/images/slider_bg.jpg"

const InspectionBanner = () => {
    var BannerSLider = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear'
    };
    return (
        <section className='inspection_banner'>
            <Slider {...BannerSLider}>
                <div className='slide_bg'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-12">
                                <div className="txt">
                                    <p className='text-blue f600 f-18 mb-1'>Crane Inspection</p>
                                    <h1 className='f-40 f700 text-white mb-5'>Optimizing Crane Performance through Comprehensive Inspection</h1>
                                    <p className='f-18 text-white mb-5'>Where you put your money matters. Open a checking account with a bank that finances a sustainable tommorow.</p>
                                    <div className="sec_btn">
                                        <a href="javascript:;" className='d-flex align-items-center gap-2'>
                                            <FaCog className='text-white' />
                                            view services
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slide_bg'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-12"></div>
                            <div className="col-lg-7 col-12">
                                <div className="txt">
                                    <p className='text-blue f600 f-18 mb-1'>Crane Inspection</p>
                                    <h1 className='f-40 f700 text-white mb-5'>Optimizing Crane Performance through Comprehensive Inspection</h1>
                                    <p className='f-18 text-white mb-5'>Where you put your money matters. Open a checking account with a bank that finances a sustainable tommorow.</p>
                                    <div className="sec_btn">
                                        <a href="javascript:;" className='d-flex align-items-center gap-2'>
                                            <FaCog className='text-white' />
                                            view services
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    )
}

export default InspectionBanner