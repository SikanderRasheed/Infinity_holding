import Slider from "react-slick";
// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HomeBanner = () => {
    var settings = {
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
        <section className="home_banner">
            <Slider {...settings}>
                <div>
                    <div className="slide_bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="slide_content">
                                        <div className="txt">
                                            <h1 className="f-40 f600 text-white">HALAL Certification <br className="d-lg-block d-none" /> Guarantee Trust & Compliance</h1>
                                            <p className="f-16 text-white f500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eos maxime ad sit facilis quibusdam, veritatis alias expedita perferendis excepturi ipsum et necessitatibus.</p>
                                        </div>
                                        <div className="btn p-0">
                                            <a href="javascript:;" className="uppercase">Read More ►</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slide_bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="slide_content">
                                        <div className="txt">
                                            <h1 className="f-40 f600 text-white">FSSC 220000 Certifications <br className="d-lg-block d-none" />
                                                Ensure Food Safety & Quality!</h1>
                                            <p className="f-16 text-white f500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eos maxime ad sit facilis quibusdam, veritatis alias expedita perferendis excepturi ipsum et necessitatibus.</p>
                                        </div>
                                        <div className="btn p-0">
                                            <a href="javascript:;" className="uppercase">Read More ►</a>
                                        </div>
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

export default HomeBanner
