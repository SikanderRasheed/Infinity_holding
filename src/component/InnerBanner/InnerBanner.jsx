import React from 'react'

const InnerBanner = ({ bannerForm }) => {
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
                                            <label htmlFor="course" className='text-light-gray f-16 f300 mb-1'>Choose Course :</label>
                                            <select name="courses">
                                                <option>Course 1</option>
                                                <option>Course 2</option>
                                            </select>
                                        </div>
                                        <div className="certificateNumber w-100">
                                            <label htmlFor="course" className='text-light-gray f-16 f300 mb-1'>Certificate No :</label>
                                            <input type="tel" className='w-100 personalInp' />
                                        </div>
                                        <button>
                                            Result
                                        </button>
                                    </form>
                                </div>
                                : <form>
                                    <input type="tel" placeholder='Enter Certiface / Report No.' />
                                </form>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InnerBanner