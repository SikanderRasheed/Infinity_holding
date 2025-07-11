import React from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa'

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
            </div>
        </section>
    )
}

export default AboutDownload
