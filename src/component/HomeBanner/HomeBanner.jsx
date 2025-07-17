import Slider from "react-slick";
// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HomeBanner = ({ content = { title: "Trusted System Partners", desc: null } }) => {

    return (
        <section className="home_banner">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="txt text-center">
                            <h1 className="f-45 f600 text-white">{content.title}</h1>
                            <p>{content.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner
