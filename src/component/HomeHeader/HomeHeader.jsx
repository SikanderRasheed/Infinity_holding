import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const menuItems = [
    {
        label: 'Standards',
        // content: [
        //     { links: ['ISO 9001', 'ISO 45001'] },
        //     { links: ['ISO 9004', 'ISO 45010'] },
        //     { links: ['ISO 9004', 'ISO 45010'] },
        //     { links: ['ISO 9004', 'ISO 45010'] },
        //     { links: ['ISO 9004', 'ISO 45010'] },
        //     { links: ['ISO 9004', 'ISO 45010'] },
        // ]
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
    },
    {
        label: 'Services',
        content: [
            {
                links: [
                    { name: 'Inspection', url: "/inspection" },
                    { name: 'Training', url: "/training" }
                ]
            },
        ]
    },
    // {
    //     label: 'Documents',
    //     content: [
    //         { title: 'Templates', links: ['Policy', 'Checklist'] },
    //         { title: 'Guides', links: ['How-to', 'FAQs'] }
    //     ]
    // },
    {
        label: 'About',
    },
];

const HomeHeader = () => {
    return (
        <header className='header'>
            <div className="header_top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="logo">
                                {/* <span>Logo Here</span> */}
                                <a href="/">
                                <img src="/images/logo.png" alt="Logo" className='img-fluid' />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="phone">
                                        <a href="javascript:;" className='d-flex align-items-center gap-3'>
                                            <div className="icon">
                                                <FaPhoneAlt className='f-26 text-blue' />
                                            </div>
                                            <div>
                                                <span className='f-16 f600 text-dark-gray d-block'>Call Us: 20 100 043 9791</span>
                                                <span className='f-16 f300 text-light-gray d-block'>Watsapp: 20 100 043 9791</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mail">
                                        <a href="mailto:info@trustedsystempartners.com;" className='d-flex align-items-center gap-3'>
                                            <div className="icon">
                                                <FaEnvelope className='f-26 text-blue' />
                                            </div>
                                            <div>
                                                <span className='f-16 f600 text-dark-gray d-block'>Mail us for help</span>
                                                <span className='f-16 f300 text-light-gray d-block'>info@trustedsystempartners.com</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="phone">
                                        <a href="javascript:;" className='d-flex align-items-center gap-3'>
                                            <div className="icon">
                                                <FaMapMarkerAlt className='f-26 text-blue' />
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
            <div className="header_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-10">
                            <div className="menus">
                                <ul className='d-flex align-items-center gap-4 mb-0'>
                                    <li>
                                        <a href="javascript:;" className='f-16 text-white f500'>
                                            Home
                                        </a>
                                    </li>
                                    {/* {menuItems.map((item, index) => (
                                        <li className="nav-item" key={index}>
                                            <a href="#" className="f-16 text-white f500">
                                                {item.label} +
                                            </a>
                                            <div className="mega-menu">
                                                <div className="mega-content">
                                                    {item.content.map((block, idx) => (
                                                        <div key={idx}>
                                                            <ul>
                                                                {block.links.map((link, i) => (
                                                                    <li key={i}><a href="#">{link}</a></li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </li>
                                    ))} */}
                                    {menuItems.map((item, index) => (
                                        <li className="nav-item" key={index}>
                                            {/* Check if item.label is 'About' */}
                                            {item.label === 'About' ? (
                                                <a href="/about" className="f-16 text-white f500">
                                                    {item.label}
                                                </a>
                                            ) : (
                                                <>
                                                    <a href="#" className="f-16 text-white f500">
                                                        {item.label} +
                                                    </a>
                                                    <div className="mega-menu">
                                                        <div className="mega-content">
                                                            {item.content.map((block, idx) => (
                                                                <div key={idx}>
                                                                    {block.title && <h5 className="text-black">{block.title}</h5>}
                                                                    <ul>
                                                                        {block.links.map((link, i) => {
                                                                            if (typeof link === 'string') {
                                                                                return (
                                                                                    <li key={i}>
                                                                                        <a href="#" className="text-black">{link}</a>
                                                                                    </li>
                                                                                );
                                                                            } else {
                                                                                return (
                                                                                    <li key={i}>
                                                                                        <a href={link.url} className="text-black">{link.name}</a>
                                                                                    </li>
                                                                                );
                                                                            }
                                                                        })}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="certifications">
                                <a href="#" className="f-16 text-white f500">
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
