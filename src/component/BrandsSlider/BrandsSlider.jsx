import React from 'react'
import Slider from 'react-slick';

const BrandsSlider = () => {
    const brandsSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="brands_slider_sec">
            <div className="container">
                <Slider {...brandsSlider}>
                    <div>
                        <img src="/images/brands-1.png" alt="Brand Image" width="248" height="165" className='img-fluid' />
                    </div>
                    <div>
                        <img src="/images/brands-2.png" alt="Brand Image" width="248" height="165" className='img-fluid' />
                    </div>
                    <div>
                        <img src="/images/brands-3.png" alt="Brand Image" width="248" height="165" className='img-fluid' />
                    </div>
                    <div>
                        <img src="/images/brands-4.png" alt="Brand Image" width="248" height="165" className='img-fluid' />
                    </div>
                    <div>
                        <img src="/images/brands-5.png" alt="Brand Image" width="248" height="165" className='img-fluid' />
                    </div>
                    <div>
                        <img src="/images/brands-6.png" alt="Brand Image" width="248" height="165" className='img-fluid' />
                    </div>
                    <div>
                        <img src="/images/brands-7.png" alt="Brand Image" width="248" height="165" className='img-fluid' />
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default BrandsSlider
