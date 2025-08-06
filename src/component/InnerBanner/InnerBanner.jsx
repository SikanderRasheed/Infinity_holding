import React, { useState } from 'react'
import certificates from './certificates.json';

const InnerBanner = ({ bannerForm }) => {

    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSearch = () => {
        setIsSubmitted(true)
        const cert = certificates.find(item => item.number === input.trim());
        setResult(cert || null);
    };

    const clearInput = () => {
        setInput('');
        setResult(null);
        setIsSubmitted(false);
    }

    return (
        <section className='inner_banner_sec'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="txt">
                            {bannerForm ?
                                <div>
                                    <h6 className='text-light-gray f-16 f300'>Certified Personal Search</h6>
                                    <form className='flex-wrap'>
                                        <div className="course w-100 mb-3">
                                            <label htmlFor="course" className='text-white f-16 f300 mb-1'>Choose Course :</label>
                                            <select name="courses">
                                                <option>Course 1</option>
                                                <option>Course 2</option>
                                            </select>
                                        </div>
                                        <div className="certificateNumber w-100">
                                            <label htmlFor="course" className='text-white f-16 f300 mb-1'>Certificate No :</label>
                                            <input type="tel" className='w-100 personalInp' />
                                        </div>
                                        <button>
                                            Result
                                        </button>
                                    </form>
                                </div>
                                :
                                <>
                                    <form
                                        onSubmit={e => {
                                            e.preventDefault();
                                            handleSearch();
                                        }}>
                                        <input type="text" placeholder='Enter Certiface / Report No.' value={input} onChange={e => setInput(e.target.value)} />
                                        {input && (
                                            <span
                                                onClick={() => clearInput()}
                                                style={{
                                                    position: 'absolute',
                                                    right: 15,
                                                    top: '52%',
                                                    transform: 'translateY(-50%)',
                                                    cursor: 'pointer',
                                                    fontWeight: 'bold',
                                                    fontSize: '22px',
                                                    color: '#999',
                                                    zIndex: 99999
                                                }}
                                            >
                                                &times;
                                            </span>
                                        )}
                                    </form>
                                    {result && (
                                        <div style={{ marginTop: 30, background: '#f1f1f1', padding: 40, borderRadius: 10 }}>
                                            <h2 className='text-center f700 mb-2 mb-lg-5'>Verify Certificate</h2>
                                            <table className='w-100'>
                                                <tbody>
                                                    <tr className='d-flex justify-content-between mb-2'>
                                                        <td><b>Certificate Number:</b></td><td className='text-end'>{result.number}</td>
                                                    </tr>
                                                    <tr className='d-flex justify-content-between mb-2'>
                                                        <td><b>Date Of Initial Registration:</b></td><td className='text-end'>{result.initialDate}</td>
                                                    </tr>
                                                    <tr className='d-flex justify-content-between mb-2'>
                                                        <td><b>Date Of Issue:</b></td><td className='text-end'>{result.issueDate}</td>
                                                    </tr>
                                                    <tr className='d-flex justify-content-between mb-2'>
                                                        <td><b>Date Of Expiry:</b></td><td className='text-end'>{result.expiryDate}</td>
                                                    </tr>
                                                    <tr className='d-flex justify-content-between mb-2'>
                                                        <td><b>Recertification Due Date:</b></td>
                                                        <td className='text-end'>{result.auditDate}</td>
                                                    </tr>
                                                    <tr className='d-flex justify-content-between mb-2'>
                                                        <td><b>Country:</b></td><td className='text-end'>{result.country}</td>
                                                    </tr>
                                                    <tr className='d-flex justify-content-between mb-2'>
                                                        <td><b>Standard:</b></td><td className='text-end'>{result.standard}</td>
                                                    </tr>
                                                    <tr className='d-flex justify-content-between mb-2'>
                                                        <td><b>Organization:</b></td><td className='text-end'>{result.organization}</td>
                                                    </tr>
                                                    <tr className='d-flex justify-content-between mb-2'>
                                                        <td><b>Address:</b></td><td className='text-end'>{result.address}</td>
                                                    </tr>
                                                    <tr className='d-flex justify-content-between mb-2'>
                                                        <td><b>Scope:</b></td><td className='text-end'>{result.scope}</td>
                                                    </tr>
                                                    <tr className='d-flex justify-content-between mb-2'>
                                                        <td><b>Status:</b></td>
                                                        <td className='text-end bg-success text-white px-2 rounded-pill f-14'>{result.status}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                    {isSubmitted && result === null && (
                                        <p className='text-center' style={{ color: 'red', marginTop: 20 }}>
                                            No certificate found.
                                        </p>
                                    )}
                                </>}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InnerBanner