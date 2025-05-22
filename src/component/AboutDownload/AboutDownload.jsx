import React from 'react'
import { FaBullseye, FaCloudDownloadAlt, FaCog, FaEye, FaLightbulb } from 'react-icons/fa'

const AboutDownload = () => {
    return (
        <section className="about-download">
            <div className="container">
                <div className="download_sec">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="txt">
                            <h2 className='text-white f-24 f600 d-inline me-2'>Want to know more about us?</h2><span className='text-white f300'>just download brochure...</span>
                        </div>
                        <div className="btn">
                            <a href="javascript:;" className='d-flex align-items-center gap-2 mt-0'>
                                <FaCloudDownloadAlt />
                                Download Brochure
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-12 p-0">
                        <div className="card text-center">
                            <div className="icon">
                                <FaEye className='f-35 mb-2 text-blue'/>
                            </div>
                            <div className="txt">
                                <h4 className='f-28 f600 text-black'>Our Vision</h4>
                                <p className='f-16 f400 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus, fugit ullam odio non obcaecati quae tenetur laudantium fuga tempore nam animi eligendi distinctio totam fugiat sed aliquam dignissimos. Ipsum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-0">
                        <div className="card text-center">
                            <div className="icon">
                                <FaBullseye className='f-35 mb-2 text-blue'/>
                            </div>
                            <div className="txt">
                                <h4 className='f-28 f600 text-black'>Our Values</h4>
                                <p className='f-16 f400 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus, fugit ullam odio non obcaecati quae tenetur laudantium fuga tempore nam animi eligendi distinctio totam fugiat sed aliquam dignissimos. Ipsum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-0">
                        <div className="card text-center">
                            <div className="icon">
                                <FaLightbulb className='f-35 mb-2 text-blue'/>
                            </div>
                            <div className="txt">
                                <h4 className='f-28 f600 text-black'>Our Objectives</h4>
                                <p className='f-16 f400 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus, fugit ullam odio non obcaecati quae tenetur laudantium fuga tempore nam animi eligendi distinctio totam fugiat sed aliquam dignissimos. Ipsum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-0">
                        <div className="card text-center">
                            <div className="icon">
                                <FaCog className='f-35 mb-2 text-blue'/>
                            </div>
                            <div className="txt">
                                <h4 className='f-28 f600 text-black'>Our Mission</h4>
                                <p className='f-16 f400 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus, fugit ullam odio non obcaecati quae tenetur laudantium fuga tempore nam animi eligendi distinctio totam fugiat sed aliquam dignissimos. Ipsum?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutDownload
