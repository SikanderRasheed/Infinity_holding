import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Topbar = () => {
    return (
        <div className='top_bar'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="txt">
                                <p className='text-white f-15 mb-0 uppercase'>Leaders in ISO Certification</p>
                            </div>
                            <div className='d-flex align-items-center gap-3'>
                                <div className="icons d-flex align-items-center gap-3">
                                    <a href="javascript:;" className='icons_colors f-18'>
                                        <FaFacebookF />
                                    </a>
                                    <a href="javascript:;" className='icons_colors f-18'>
                                        <FaTwitter />
                                    </a>
                                    <a href="javascript:;" className='icons_colors f-18'>
                                        <FaLinkedinIn />
                                    </a>
                                    <a href="javascript:;" className='icons_colors f-18'>
                                        <FaInstagram />
                                    </a>
                                </div>
                                <div className="language d-flex align-items-center gap-2">
                                    <div className="img">
                                        <img src="/images/uk.png" alt="UK" className='img-fluid' />
                                    </div>
                                    <div className="txt">
                                        <p className='text-white f-14 mb-0'>English</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
