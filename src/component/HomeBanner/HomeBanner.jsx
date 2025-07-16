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
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="txt text-center">
                            <h1 className="f-45 f600 text-white">Trusted System Partners</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner
