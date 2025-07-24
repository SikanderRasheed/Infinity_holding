import React, { useState } from 'react'
import { FaAlignRight, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import logo from "/images/logo.png";


const menuItems = [
    {
        label: 'Standards',
        content: [
            {
                links: [
                    { name: 'ISO 9001', url: '/iso' },
                    { name: 'ISO 45001', url: '/iso' }
                ]
            },
            {
                links: [
                    { name: 'ISO 9004', url: '/iso' },
                    { name: 'ISO 45010', url: '/iso' }
                ]
            },
            {
                links: [
                    { name: 'ISO 9004', url: '/iso' },
                    { name: 'ISO 45010', url: '/iso' }
                ]
            },
            {
                links: [
                    { name: 'ISO 9004', url: '/iso' },
                    { name: 'ISO 45010', url: '/iso' }
                ]
            },
            {
                links: [
                    { name: 'ISO 9004', url: '/iso' },
                    { name: 'ISO 45010', url: '/iso' }
                ]
            },
            {
                links: [
                    { name: 'ISO 9004', url: '/iso' },
                    { name: 'ISO 45010', url: '/iso' }
                ]
            }
        ]
    }
];

const HomeHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header className='header'>
            <div className="header_top">
                <div className="container">
                    <div className="row gap-md-4 gap-lg-0 align-items-center">
                        <div className="col-12 col-lg-2 col-xxl-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="logo">
                                    <a href="/">
                                        {/* <span>Logo Here</span> */}
                                        <img src={logo} alt="Logo" className='img-fluid' />
                                    </a>
                                </div>
                                <div className="hamburder">
                                    <button type="button"
                                        onClick={handleToggle}
                                        aria-label="Toggle navigation"
                                        className='bg-transparent border-0 d-lg-none d-flex align-items-center justify-content-center'>
                                        <FaAlignRight size={28} />
                                    </button>
                                    {/* Navbar Links */}
                                    <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                                        <ul className="navbar-nav mb-0">
                                            <li className="nav-item">
                                                <a href="/" className="nav-link f-15 text-white f400 text-uppercase">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/standards" className="nav-link f-15 text-white f400 text-uppercase">Standards</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/inspection" className="nav-link f-15 text-white f400 text-uppercase">Inspection</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/training" className="nav-link f-15 text-white f400 text-uppercase">Training</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/certifies-company-search" className="nav-link f-15 text-white f400 text-uppercase">Verify Certificate/Report</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/verify-personal-certificate" className="nav-link f-15 text-white f400 text-uppercase">Verify Personal Certificate</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-10 col-xxl-9">
                            <div className='d-md-block d-none'>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="phone">
                                            <a href="javascript:;" className='d-flex align-items-center justify-content-end gap-2 gap-xxl-3'>
                                                <div className="icon">
                                                    <FaPhoneAlt className='f-26 text-blue d-xl-block d-none' />
                                                </div>
                                                <div>
                                                    <span className='f-16 f600 text-dark-gray d-block'>Call Us: 20 100 043 9791</span>
                                                    <span className='f-16 f300 text-light-gray d-block'>Watsapp: 20 100 043 9791</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mail">
                                            <a href="mailto:info@trustedsystempartners.com" className='d-flex align-items-center gap-2 gap-xxl-3'>
                                                <div className="icon">
                                                    <FaEnvelope className='f-26 text-blue d-xl-block d-none' />
                                                </div>
                                                <div>
                                                    <span className='f-16 f600 text-dark-gray d-block'>Mail us for help</span>
                                                    <span className='f-16 f300 text-light-gray d-block'>info@trustedsystempartners.com</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="phone">
                                            <a href="https://g.co/kgs/PSkByoQ" className='d-flex align-items-center gap-2 gap-xxl-3'>
                                                <div className="icon">
                                                    <FaMapMarkerAlt className='f-26 text-blue d-xl-block d-none' />
                                                </div>
                                                <div>
                                                    <span className='f-16 f600 text-dark-gray d-block'>Marketing Office</span>
                                                    <span className='f-16 f300 text-light-gray d-block'>45-745 Farmstead drive. Milton </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div className="menus">
                                <ul className='d-flex align-items-center gap-4 mb-0'>
                                    <li>
                                        <a href="/" className='f-15 text-white f400 text-uppercase'>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/standards" className='f-15 text-white f400 text-uppercase'>
                                            Standards
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/inspection" className='f-15 text-white f400 text-uppercase'>
                                            Inspection
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/training" className='f-15 text-white f400 text-uppercase'>
                                            Training
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="certifications">
                                <a href="#" className="f-15 text-white f400 text-uppercase">
                                    Verify Certification
                                </a>
                                <div className="cert-dropdown">
                                    <ul>
                                        <li><a href="/certifies-company-search">Verify Certificate/Report</a></li>
                                        <li><a href="/verify-personal-certificate">Verify Personal Certificate</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader
