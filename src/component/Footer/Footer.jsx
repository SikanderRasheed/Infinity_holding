import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkedAlt, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer_sec'>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="txt">
                            <h3 className='f-20 f700 text-white'>
                                About
                            </h3>
                            <ul className='p-0 mt-4 mb-0'>
                                <li className='mb-2'>
                                    <a href='javascript:;' className='f-16 f600 text-white'>About</a>
                                </li>
                                <li className='mb-2'>
                                    <a href='javascript:;' className='f-16 f600 text-white'>Become A Partner</a>
                                </li>
                                <li className='mb-2'>
                                    <a href='javascript:;' className='f-16 f600 text-white'>Careers</a>
                                </li>
                                <li className='mb-0'>
                                    <a href='javascript:;' className='f-16 f600 text-white'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="txt">
                            <h3 className='f-20 f700 text-white'>
                                Contact Us
                            </h3>
                            <ul className='p-0 mt-4 mb-0'>
                                <li className='mb-2 mb-lg-3'>
                                    <a href="mailto:canada@trustedsystempartners.com" className='d-flex align-items-start gap-2 text-white f-16'>
                                        <FaEnvelope className='mt-1 footer_icon' />
                                        canada@trustedsystempartners.com
                                    </a>
                                </li>
                                <li className='mb-2 mb-lg-3'>
                                    <a href="mailto:dubai@trustedsystempartners.com" className='d-flex align-items-start gap-2 text-white f-16'>
                                        <FaEnvelope className='mt-1 footer_icon' />
                                        dubai@trustedsystempartners.com
                                    </a>
                                </li>
                                <li className='mb-2 mb-lg-3'>
                                    <a href="mailto:usman@trustedsystempartners.com" className='d-flex align-items-start gap-2 text-white f-16'>
                                        <FaEnvelope className='mt-1 footer_icon' />
                                        usman@trustedsystempartners.com
                                    </a>
                                </li>
                                <li className='mb-2 mb-lg-3'>
                                    <a href="mailto:zeerak@trustedsystempartners.com" className='d-flex align-items-start gap-2 text-white f-16'>
                                        <FaEnvelope className='mt-1 footer_icon' />
                                        zeerak@trustedsystempartners.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="txt mt-3 mt-lg-0">
                            <h3 className='f-20 f700 text-white'>
                                Follow
                            </h3>
                            <ul className='d-flex align-items-center gap-3 p-0 mt-3'>
                                <li>
                                    <a href="javascript:;" className='text-white f-20 '>
                                        <FaFacebookF />
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;" className='text-white f-20 '>
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;" className='text-white f-20 '>
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;" className='text-white f-20 '>
                                        <FaInstagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="txt mt-4">
                            <h3 className='f-20 f700 text-white'>
                                Address
                            </h3>
                            <ul className='p-0 mt-4'>
                                <li className='mb-2 mb-lg-4'>
                                    <a href="https://maps.app.goo.gl/sZocQqZigjLtoX74A" className='d-flex align-items-start gap-3 text-white f-16 '>
                                        <FaMapMarkedAlt className='mt-lg-2 footer_icon' />
                                        Office No. 203, Nafees Archade Gulshan e Iqbal Karachi, Pakistan,
                                    </a>
                                </li>
                                <li className='mb-2 mb-lg-4'>
                                    <a href="https://g.co/kgs/MSSFchh" className='d-flex align-items-start gap-3 text-white f-16 '>
                                        <FaMapMarkedAlt className='mt-lg-2 footer_icon' />
                                        Ifza Bussiness Park, Dubai Silicon Oasis, Dubai, UAE
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer