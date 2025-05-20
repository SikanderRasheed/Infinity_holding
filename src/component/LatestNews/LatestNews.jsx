import React from 'react'

import Slider from 'react-slick';
import { FaCalendarAlt } from 'react-icons/fa';
// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestNews = () => {
    var newsSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <section className='news_sec'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="txt">
                            <h2 className='f-40 f700 text-black mb-4'>Learn more our latest new</h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <Slider {...newsSlider}>
                            <div className='px-2'>
                                <div className="card">
                                    <div className="img">
                                        <img src="/images/inner_industry22.png" alt="News " className='img-fluid rounded-0' />
                                    </div>
                                    <div className="txt">
                                        <h3>Enviroment Product Decaleration</h3>
                                    </div>
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <FaCalendarAlt />
                                            <h6 className='text-blue f-18 f600 mb-0'>October 19, 2024</h6>
                                        </div>
                                        <div className="slideBtn">
                                            <a href="javascript:;" className='f-16 f700 text-blue uppercase'>
                                                read more ►
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className="card">
                                    <div className="img">
                                        <img src="/images/inner_industry22.png" alt="News " className='img-fluid rounded-0' />
                                    </div>
                                    <div className="txt">
                                        <h3>Enviroment Product Decaleration</h3>
                                    </div>
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <FaCalendarAlt />
                                            <h6 className='text-blue f-18 f600 mb-0'>October 19, 2024</h6>
                                        </div>
                                        <div className="slideBtn">
                                            <a href="javascript:;" className='f-16 f700 text-blue uppercase'>
                                                read more ►
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className="card">
                                    <div className="img">
                                        <img src="/images/inner_industry22.png" alt="News " className='img-fluid rounded-0' />
                                    </div>
                                    <div className="txt">
                                        <h3>Enviroment Product Decaleration</h3>
                                    </div>
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <FaCalendarAlt />
                                            <h6 className='text-blue f-18 f600 mb-0'>October 19, 2024</h6>
                                        </div>
                                        <div className="slideBtn">
                                            <a href="javascript:;" className='f-16 f700 text-blue uppercase'>
                                                read more ►
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className="card">
                                    <div className="img">
                                        <img src="/images/inner_industry22.png" alt="News " className='img-fluid rounded-0' />
                                    </div>
                                    <div className="txt">
                                        <h3>Enviroment Product Decaleration</h3>
                                    </div>
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <FaCalendarAlt />
                                            <h6 className='text-blue f-18 f600 mb-0'>October 19, 2024</h6>
                                        </div>
                                        <div className="slideBtn">
                                            <a href="javascript:;" className='f-16 f700 text-blue uppercase'>
                                                read more ►
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestNews