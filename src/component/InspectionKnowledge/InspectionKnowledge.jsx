import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick'

const InspectionKnowledge = () => {
    const knowledgeSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="knowledge_sec">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="txt d-flex align-items-center gap-3">
                            <div>
                                <p class="f-16 f400 text-blue mb-0">Services</p>
                                <h2 class="f-32 f700 text-black mb-3">Everyone at ICI has entrepreneurial knowledge</h2>
                            </div>
                            <div>
                                <p className='f-14 f400 text-dark-gray mb-1'>Expertise in several fields of safety and working with international clients and in largwe projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slider Start */}
                <div className="row">
                    <div className="col-12">
                        <Slider {...knowledgeSlider}>
                            <div className='px-3'>
                                <div className="card">
                                    <div className="img">
                                        <img src="/images/knowledgeSlide1.jpg" alt="Image" className='img-fluid' />
                                    </div>
                                    <div className="txt text-center pt-3">
                                        <h4 className='text-blue f-22 f600'>NDT (Non-Destructive Testing) Inspection</h4>
                                        <p className='f-16 f400 text-dark-gray mb-3'>
                                            Welding is one of the critical manufacturing process carried out in almost every major industry
                                        </p>
                                        <a href="javascript:;" className='d-flex align-items-center justify-content-center gap-2'>
                                            <span className='f-14 f600 text-black'>Read more</span>
                                            <div className="icon">
                                                <FaArrowRight className='text-white f-18' />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="card">
                                    <div className="img">
                                        <img src="/images/knowledgeSlide1.jpg" alt="Image" className='img-fluid' />
                                    </div>
                                    <div className="txt text-center pt-3">
                                        <h4 className='text-blue f-22 f600'>NDT (Non-Destructive Testing) Inspection</h4>
                                        <p className='f-16 f400 text-dark-gray mb-3'>
                                            Welding is one of the critical manufacturing process carried out in almost every major industry
                                        </p>
                                        <a href="javascript:;" className='d-flex align-items-center justify-content-center gap-2'>
                                            <span className='f-14 f600 text-black'>Read more</span>
                                            <div className="icon">
                                                <FaArrowRight className='text-white f-18' />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="card">
                                    <div className="img">
                                        <img src="/images/knowledgeSlide1.jpg" alt="Image" className='img-fluid' />
                                    </div>
                                    <div className="txt text-center pt-3">
                                        <h4 className='text-blue f-22 f600'>NDT (Non-Destructive Testing) Inspection</h4>
                                        <p className='f-16 f400 text-dark-gray mb-3'>
                                            Welding is one of the critical manufacturing process carried out in almost every major industry
                                        </p>
                                        <a href="javascript:;" className='d-flex align-items-center justify-content-center gap-2'>
                                            <span className='f-14 f600 text-black'>Read more</span>
                                            <div className="icon">
                                                <FaArrowRight className='text-white f-18' />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className="card">
                                    <div className="img">
                                        <img src="/images/knowledgeSlide1.jpg" alt="Image" className='img-fluid' />
                                    </div>
                                    <div className="txt text-center pt-3">
                                        <h4 className='text-blue f-22 f600'>NDT (Non-Destructive Testing) Inspection</h4>
                                        <p className='f-16 f400 text-dark-gray mb-3'>
                                            Welding is one of the critical manufacturing process carried out in almost every major industry
                                        </p>
                                        <a href="javascript:;" className='d-flex align-items-center justify-content-center gap-2'>
                                            <span className='f-14 f600 text-black'>Read more</span>
                                            <div className="icon">
                                                <FaArrowRight className='text-white f-18' />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                {/* Slider End */}
            </div>
        </section>
    )
}

export default InspectionKnowledge
