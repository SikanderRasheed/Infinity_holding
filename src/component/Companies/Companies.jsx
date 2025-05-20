import React from 'react'
// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Companies = () => {
    var companySlider = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <section className='companies_sec'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="txt">
                            <div className="d-flex align-items-center gap-4 mb-2">
                                <span></span>
                                <h2 className='f-35 f500 text-black'>Companies we've worked with</h2>
                            </div>
                            <h3 className='f-24 f600 text-blue mb-5 pb-5'>We are proud to serve thousands of orginazations of all sizes and industries. Here are just a few examples.</h3>
                        </div>
                    </div>
                    <div className="col-12">
                        <Slider {...companySlider}>
                            <div className='px-3'>
                                <div className="box">
                                    <span>Company Logo</span>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="box">
                                    <span>Company Logo</span>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="box">
                                    <span>Company Logo</span>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="box">
                                    <span>Company Logo</span>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="box">
                                    <span>Company Logo</span>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="box">
                                    <span>Company Logo</span>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="box">
                                    <span>Company Logo</span>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="box">
                                    <span>Company Logo</span>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="box">
                                    <span>Company Logo</span>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="box">
                                    <span>Company Logo</span>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="box">
                                    <span>Company Logo</span>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="box">
                                    <span>Company Logo</span>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="box">
                                    <span>Company Logo</span>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Companies
