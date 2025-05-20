import React from 'react'

const TrainingBanner = ({ content, pagesLinks }) => {
    return (
        <section className='training_banner'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="txt text-center">
                            <h1 className='f-30 f700 text-white mb-3'>{content}</h1>
                            <ul className='d-flex align-items-center justify-content-center gap-2 p-0'>
                                {pagesLinks.map((pages, index) => (
                                    <li key={index}>
                                        <a href="javascript:;" className='f-16 text-white'>
                                            {pages}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrainingBanner
