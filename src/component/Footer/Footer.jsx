import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkedAlt, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer_sec'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
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
                    <div className="col-lg-5">
                        <div className="txt">
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
                            <ul className='d-flex align-items-center gap-3 p-0 mt-3'>
                                <li>
                                    <a href="javascript:;" className='text-white f-16 '>
                                        <FaMapMarkedAlt className='me-3' />
                                        Office No. 203, Nafees Archade Gulshan e Iqbal Karachi, Pakistan,
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