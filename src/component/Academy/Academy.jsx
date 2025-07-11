import React from 'react'
import Slider from 'react-slick'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight, FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Academy = ({ content }) => {
    var academicSlider = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <section className='academic_sec'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="txt">
                            <div class="d-flex align-items-center gap-4 mb-2 mb-lg-4">
                                <span></span>
                                <h2 class="f-35 f700 text-black">{content.title}</h2>
                            </div>
                            <p className='f-18 f300 text-dark-gray'>{content.desc}</p>
                            <h2 className='f-30 f800 mb-3'>{content.listTitle}</h2>
                            <ul className='ps-2'>
                                {content.listData.map((list, index) => (
                                    <li key={index} className='f-14 f400 text-dark-gray mb-3'>
                                        {list.list}
                                    </li>
                                ))}
                            </ul>
                            {/* {content.isIso ?
                                <div className='innerTabs mt-4'>
                                    <Tabs
                                        defaultActiveKey="profile"
                                        id="uncontrolled-tab-example" className="mb-3 mt-4">
                                        <Tab eventKey="home" title="What is ISO 9001?">
                                            <p className='f-14 f300'><b className='f600'>ISO 9001</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt non velit voluptates adipisci atque porro doloribus, excepturi nesciunt recusandae obcaecati quae neque at, laboriosam quam debitis aspernatur fugiat nam.</p>
                                            <p className='f-14 f300'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt non velit voluptates adipisci atque porro doloribus, excepturi nesciunt recusandae obcaecati quae neque at, laboriosam quam debitis aspernatur fugiat nam.</p>
                                            <p className='f-14 f300'><b className='f600'>ISO 9001</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt non velit voluptates adipisci atque porro doloribus, excepturi nesciunt recusandae obcaecati quae neque at, laboriosam quam debitis aspernatur fugiat nam.</p>
                                        </Tab>
                                        <Tab eventKey="profile" title="Why is Certification Good For My Business?">
                                            <p className='f-14 f300'><b className='f600'>ISO 9001</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt non velit voluptates adipisci atque porro doloribus, excepturi nesciunt recusandae obcaecati quae neque at, laboriosam quam debitis aspernatur fugiat nam.</p>
                                            <p className='f-14 f300'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt non velit voluptates adipisci atque porro doloribus, excepturi nesciunt recusandae obcaecati quae neque at, laboriosam quam debitis aspernatur fugiat nam.</p>
                                        </Tab>
                                    </Tabs>
                                </div> :
                                <>
                                    <p className='f-16 f400'><strong>For all the listed standards, we </strong>offer the below trainings.</p>
                                    <ol className='ps-2'>
                                        <li className='mb-2 f-14 f400 text-dark-gray'>Awareness Tarining</li>
                                        <li className='mb-2 f-14 f400 text-dark-gray'>Awareness Tarining</li>
                                        <li className='mb-2 f-14 f400 text-dark-gray'>Awareness Tarining</li>
                                        <li className='mb-2 f-14 f400 text-dark-gray'>Awareness Tarining</li>
                                    </ol>
                                </>} */}
                        </div>
                        {content.isIso ? null :
                            <div className="slider pt-5">
                                <Slider {...academicSlider}>
                                    <div className='px-2'>
                                        <div className="card">
                                            <div className="cardTxt text-center">
                                                <h4 className='f-20 f700'>BRC-Global Food <br className='d-lg-block d-none' /> Standard</h4>
                                            </div>
                                            <div className="cardHoverTxt text-center">
                                                <h4 className='f-20 f700 text-white'>BRC-Global Food <br className='d-lg-block d-none' /> Standard</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div className="card">
                                            <div className="cardTxt text-center">
                                                <h4 className='f-20 f700'>BRC-Global Food <br className='d-lg-block d-none' /> Standard</h4>
                                            </div>
                                            <div className="cardHoverTxt text-center">
                                                <h4 className='f-20 f700 text-white'>BRC-Global Food <br className='d-lg-block d-none' /> Standard</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div className="card">
                                            <div className="cardTxt text-center">
                                                <h4 className='f-20 f700'>BRC-Global Food <br className='d-lg-block d-none' /> Standard</h4>
                                            </div>
                                            <div className="cardHoverTxt text-center">
                                                <h4 className='f-20 f700 text-white'>BRC-Global Food <br className='d-lg-block d-none' /> Standard</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        }
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-4">
                        <div className="pages">
                            <div className="page">
                                <a href="javascript:;" className='f-18 f600 text-black  d-flex align-items-center justify-content-between'>
                                    About
                                    <FaAngleRight />
                                </a>
                            </div>
                            <div className="page">
                                <a href="javascript:;" className='f-18 f600 text-black  d-flex align-items-center justify-content-between'>
                                    Become A Partner
                                    <FaAngleRight />
                                </a>
                            </div>
                            <div className="page">
                                <a href="javascript:;" className='f-18 f600 text-black  d-flex align-items-center justify-content-between'>
                                    Careers
                                    <FaAngleRight />
                                </a>
                            </div>
                            <div className="page">
                                <a href="javascript:;" className='f-18 f600 text-black  d-flex align-items-center justify-content-between'>
                                    Contact
                                    <FaAngleRight />
                                </a>
                            </div>
                        </div>
                        <div className="contact mt-4">
                            <h3 className='f-24 f700 text-black mb-4'>Contact</h3>
                            <div className="address mb-3">
                                <a href="https://g.co/kgs/PSkByoQ" className='f-16 f300 text-black d-flex align-items-start'>
                                    <FaMapMarkedAlt className='w-15 me-4' />
                                    45-745 Farmstead drive. Milton
                                </a>
                            </div>
                            <div className="address mb-3">
                                <a href="https://g.co/kgs/UPDY9Hk" className='f-16 f300 text-black d-flex align-items-start'>
                                    <FaMapMarkedAlt className='w-20 me-4' />
                                    Office No. 203, Nafees Archade Gulshan e Iqbal Karachi, Pakistan,
                                </a>
                            </div>
                            <div className="address mb-3">
                                <a href="tel:20 100 043 9791;" className='f-16 f300 text-black d-flex align-items-start gap-4'>
                                    <div className="icon">
                                        <FaPhone className='' />
                                    </div>
                                    <div>
                                        {/* <span className="d-block">
                                            (123) 456-789-0
                                        </span> */}
                                        <span className="d-block">
                                             20 100 043 9791
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div className="address mb-3">
                                <a href="javascript:;" className='f-16 f300 text-black d-flex align-items-start gap-4'>
                                    <FaEnvelope className='' />
                                    info@trustedsystempartners.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {content.isIso ? <div className="slider pt-5">
                    <Slider {...academicSlider}>
                        <div className='px-2'>
                            <div className="card">
                                <div className="cardTxt text-center">
                                    <h4 className='f-20 f700'>BRC-Global Food <br className='d-lg-block d-none' /> Standard</h4>
                                </div>
                                <div className="cardHoverTxt text-center">
                                    <h4 className='f-20 f700 text-white'>BRC-Global Food <br className='d-lg-block d-none' /> Standard</h4>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className="card">
                                <div className="cardTxt text-center">
                                    <h4 className='f-20 f700'>BRC-Global Food <br className='d-lg-block d-none' /> Standard</h4>
                                </div>
                                <div className="cardHoverTxt text-center">
                                    <h4 className='f-20 f700 text-white'>BRC-Global Food <br className='d-lg-block d-none' /> Standard</h4>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className="card">
                                <div className="cardTxt text-center">
                                    <h4 className='f-20 f700'>BRC-Global Food <br className='d-lg-block d-none' /> Standard</h4>
                                </div>
                                <div className="cardHoverTxt text-center">
                                    <h4 className='f-20 f700 text-white'>BRC-Global Food <br className='d-lg-block d-none' /> Standard</h4>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div> : null}
            </div>
        </section>
    )
}

export default Academy