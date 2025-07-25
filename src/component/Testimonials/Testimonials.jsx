import React from 'react'
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    var TestimonialsSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
    return (
        <section className='testimonials_sec'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="txt text-center">
                            <h2 className="f-40 f700 text-blue captilized">We have over 15 years of experience </h2>
                            <p className='pt-3 f-16 f400 text-light-gray f300 mb-2'>
                                MISSION We are dedicated to promoting excellence, compliance, and continuous improvement across all sectors.By delivering expert guidance and customized solutions, we help clients achieve sustainable success.
                                Integrity, professionalism, and client satisfaction are at the core of everything we do.
                            </p>
                            <p className='pt-3 f-16 f400 text-light-gray f300 mb-0'>
                                VISION Our vision at Trusted System Partners is to be a leading global provider of management system solutions.We strive to set the benchmark for excellence in certification, training, and inspection services.
                                Through innovation and expertise, we aim to build safer, more efficient, and compliant organizations.
                                We envision a future where trust and quality drive sustainable growth for all our partners.
                            </p>
                        </div>
                    </div>
                    {/* <div className="col-12">
                        <Slider {...TestimonialsSlider}>
                            <div className='px-3'>
                                <div className="cardWrapper">
                                    <div className="card">
                                        <p className='f-15 text-dark-gray f300 mb-4'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorem, deserunt eum quae ipsum iusto quisquam quos voluptate, laborum cumque dolorum? Ipsum iure in dolorum laboriosam, voluptates est reprehenderit dolor?
                                        </p>
                                        <div className="d-flex align-items-center gap-1">
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                        </div>

                                    </div>
                                    <div className="profile d-flex align-items-center gap-3 mt-3">
                                        <div className="profile_icon">

                                        </div>
                                        <div className="profile_txt">
                                            <h4 className='text-black f600 f-24 mb-1'>Badr Faud</h4>
                                            <p className='text-black f-16 f300'>ISO 9001, 14001, 45001</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="cardWrapper">
                                    <div className="card">
                                        <p className='f-15 text-dark-gray f300 mb-4'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorem, deserunt eum quae ipsum iusto quisquam quos voluptate, laborum cumque dolorum? Ipsum iure in dolorum laboriosam, voluptates est reprehenderit dolor?
                                        </p>
                                        <div className="d-flex align-items-center gap-1">
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                        </div>

                                    </div>
                                    <div className="profile d-flex align-items-center gap-3 mt-3">
                                        <div className="profile_icon">

                                        </div>
                                        <div className="profile_txt">
                                            <h4 className='text-black f600 f-24 mb-1'>Badr Faud</h4>
                                            <p className='text-black f-16 f300'>ISO 9001, 14001, 45001</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="cardWrapper">
                                    <div className="card">
                                        <p className='f-15 text-dark-gray f300 mb-4'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorem, deserunt eum quae ipsum iusto quisquam quos voluptate, laborum cumque dolorum? Ipsum iure in dolorum laboriosam, voluptates est reprehenderit dolor?
                                        </p>
                                        <div className="d-flex align-items-center gap-1">
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                        </div>

                                    </div>
                                    <div className="profile d-flex align-items-center gap-3 mt-3">
                                        <div className="profile_icon">

                                        </div>
                                        <div className="profile_txt">
                                            <h4 className='text-black f600 f-24 mb-1'>Badr Faud</h4>
                                            <p className='text-black f-16 f300'>ISO 9001, 14001, 45001</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="cardWrapper">
                                    <div className="card">
                                        <p className='f-15 text-dark-gray f300 mb-4'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorem, deserunt eum quae ipsum iusto quisquam quos voluptate, laborum cumque dolorum? Ipsum iure in dolorum laboriosam, voluptates est reprehenderit dolor?
                                        </p>
                                        <div className="d-flex align-items-center gap-1">
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                            <FaStar className='text-orange f-18' />
                                        </div>

                                    </div>
                                    <div className="profile d-flex align-items-center gap-3 mt-3">
                                        <div className="profile_icon">

                                        </div>
                                        <div className="profile_txt">
                                            <h4 className='text-black f600 f-24 mb-1'>Badr Faud</h4>
                                            <p className='text-black f-16 f300'>ISO 9001, 14001, 45001</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
