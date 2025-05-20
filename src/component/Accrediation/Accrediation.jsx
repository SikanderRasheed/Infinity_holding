import React, { useState } from 'react'

const counsilData = [
    {
        image: null,
        title: <>Egyptian Accrediation <br className='d-lg-block d-none' />Council</>,
        desc: <><span className='f700'>EGAC</span> is headed by the Minister of Industry and governed by a board of 14 members, representing all stakeholders and concerned bodies.</>
    },
    {
        image: null,
        title: <>International Accrediations <br className='d-lg-block d-none' />Forum</>,
        desc: <><span className='f700'>EGAC</span> is headed by the Minister of Industry and governed by a board of 14 members, representing all stakeholders and concerned bodies.</>
    },
    {
        image: null,
        title: <>International Labortary  <br className='d-lg-block d-none' />Accrediation Coopration</>,
        desc: <><span className='f700'>EGAC</span> is headed by the Minister of Industry and governed by a board of 14 members, representing all stakeholders and concerned bodies.</>
    },
]

const Accrediation = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };
    return (
        <section className='accrediation_sec'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="txt">
                            <h2 className='f-40 f700 text-blue mb-5'>Infinity Cert International</h2>
                            <p className='f-16 f400 text-gray-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur qui tempora, accusamus sint ipsa velit dolore. Totam animi explicabo deleniti earum ullam ratione illo delectus velit amet. Sapiente, consequuntur!</p>
                            <p className='f-16 f400 text-gray-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur qui tempora, accusamus sint ipsa velit dolore. Totam animi explicabo deleniti earum ullam ratione illo delectus velit amet. Sapiente, consequuntur!</p>
                            <p className='f-16 f400 text-gray-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur qui tempora, accusamus sint ipsa velit dolore. Totam animi explicabo deleniti earum ullam ratione illo delectus velit amet. Sapiente, consequuntur!</p>
                            <p className='f-16 f400 text-gray-light mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur qui tempora, accusamus sint ipsa velit dolore. Totam animi explicabo deleniti earum ullam ratione illo delectus velit amet. Sapiente, consequuntur!</p>
                            <div className="secondary_btn">
                                <a href="javascript:;">
                                    Read More ►
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="txt">
                            <div className='border-bottom pb-2'>
                                <h2 className='f-40 f700 text-blue uppercase'>Our Accrediation</h2>
                            </div>
                            {counsilData.map((content, index) => (
                                <div
                                    key={index}
                                    className='pt-3 pb-3 border-bottom'
                                    onClick={() => handleToggle(index)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className='d-flex align-items-center gap-3 pb-3'>
                                        <div className="image">
                                            <img src={content.image} alt="IMAGE" />
                                        </div>
                                        <div className="txt">
                                            <h3 className='f-24 f600 text-black mb-0'>{content.title}</h3>
                                        </div>
                                    </div>

                                    {openIndex === index && (
                                        <p className='f-15 f300 text-light-gray'>{content.desc}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accrediation
