import React, { useState } from 'react'

const InspectionQuality = () => {

    const items = [
        {
            id: '032211',
            label: 'CAB #032211',
            image: '/images/EGIC-1.jpg',
        },
        {
            id: '987654',
            label: 'CAB #987654',
            image: '/images/ILAC-1.jpg',
        },
    ];

    const [selectedId, setSelectedId] = useState(items[0].id);

    return (
        <section className='inspection_quality'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="txt">
                            <p className='f-16 f400 text-blue mb-0'>About us</p>
                            <h2 className='f-32 f700 text-black mb-3'>Inspection and <br className='d-lg-block d-none' /> quality control</h2>
                            <p className='f-14 f400 text-dark-gray mb-1 pe-5 me-xl-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia esse quas modi veritatis numquam nesciunt voluptates id officia. Minima saepe inventore odit quasi voluptatibus rem maiores hic adipisci repellendus veniam?
                            </p>
                            <p className='f-14 f400 text-dark-gray mb-1 pe-5 me-xl-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia esse quas modi veritatis numquam nesciunt voluptates id officia. Minima saepe inventore odit quasi voluptatibus rem maiores hic adipisci repellendus veniam?
                            </p>
                            <p className='f-14 f400 text-dark-gray mb-1 pe-5 me-xl-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia esse quas modi veritatis numquam nesciunt voluptates id officia. Minima saepe inventore odit quasi voluptatibus rem maiores hic adipisci repellendus veniam?
                            </p>
                            <p className='f-14 f400 text-dark-gray mb-1 pe-5 me-xl-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia esse quas modi veritatis numquam nesciunt voluptates id officia. Minima saepe inventore odit quasi voluptatibus rem maiores hic adipisci repellendus veniam?
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <img src="/images/inspection_img.jpg" alt="Image" className='img-fluid mb-4' />
                        {items.map((item) => (
                            <div className='row align-items-center' key={item.id}>
                                <div className="col-lg-6 col-12">
                                    <div
                                        className={`label_btn ${selectedId === item.id ? 'active' : ''}`}
                                        onClick={() => setSelectedId(item.id)}
                                    >
                                        <p className="f-18 f400 mb-0">{item.label}</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    {selectedId === item.id && (
                                        <img src={item.image} alt={item.label} className='img-fluid d-block mx-auto' width={200} height={200}/>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default InspectionQuality
