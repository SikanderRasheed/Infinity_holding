import React from 'react'
import { FaCoffee, FaCog, FaShippingFast } from 'react-icons/fa'

const InspectionServices = () => {
    return (
        <section className='inspection_services'>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12 p-0">
                    <div className="card">
                        <div className="d-flex align-items-start gap-3">
                            <div className="icons">
                                <FaCog className='text-blue f-40 icon' />
                            </div>
                            <div className="txt">
                                <h4 className='text-black f-18 f600'>NDT (Non-Destructive Testing)</h4>
                                <p className='f-14 f300 text-gray mb-0'>In the feild of engineering and industry, technological advancements have necessitated the assurance of quality and safety in production processes and structure</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 p-0">
                    <div className="card">
                        <div className="d-flex align-items-start gap-3">
                            <div className="icons">
                                <FaShippingFast className='text-blue f-40 icon' />
                            </div>
                            <div className="txt">
                                <h4 className='text-black f-18 f600'>A pre-shipment inspection</h4>
                                <p className='f-14 f300 text-gray mb-0'>In the feild of engineering and industry, technological advancements have necessitated the assurance of quality and safety in production processes and structure</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 p-0">
                    <div className="card">
                        <div className="d-flex align-items-start gap-3">
                            <div className="icons">
                                <FaCog className='text-blue f-40 icon' />
                            </div>
                            <div className="txt">
                                <h4 className='text-black f-18 f600'>Lifting Equipment Inspection</h4>
                                <p className='f-14 f300 text-gray mb-0'>In the feild of engineering and industry, technological advancements have necessitated the assurance of quality and safety in production processes and structure</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 p-0">
                    <div className="card">
                        <div className="d-flex align-items-start gap-3">
                            <div className="icons">
                                <FaCoffee className='text-blue f-40 icon' />
                            </div>
                            <div className="txt">
                                <h4 className='text-black f-18 f600'>Food Premises Inspections</h4>
                                <p className='f-14 f300 text-gray mb-0'>In the feild of engineering and industry, technological advancements have necessitated the assurance of quality and safety in production processes and structure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InspectionServices
