import { useState } from "react";


const faqsData = [
    {
        title: "Who needs certifications?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laborum neque excepturi aliquam accusamus amet officiis laboriosam voluptatem totam temporibus, autem dignissimos dolorem reiciendis, a quasi architecto eius dicta quos."
    },
    {
        title: "Who needs certifications?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laborum neque excepturi aliquam accusamus amet officiis laboriosam voluptatem totam temporibus, autem dignissimos dolorem reiciendis, a quasi architecto eius dicta quos."
    },
    {
        title: "Who needs certifications?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laborum neque excepturi aliquam accusamus amet officiis laboriosam voluptatem totam temporibus, autem dignissimos dolorem reiciendis, a quasi architecto eius dicta quos."
    },
    {
        title: "Who needs certifications?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laborum neque excepturi aliquam accusamus amet officiis laboriosam voluptatem totam temporibus, autem dignissimos dolorem reiciendis, a quasi architecto eius dicta quos."
    },
    {
        title: "Who needs certifications?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laborum neque excepturi aliquam accusamus amet officiis laboriosam voluptatem totam temporibus, autem dignissimos dolorem reiciendis, a quasi architecto eius dicta quos."
    },
    {
        title: "Who needs certifications?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laborum neque excepturi aliquam accusamus amet officiis laboriosam voluptatem totam temporibus, autem dignissimos dolorem reiciendis, a quasi architecto eius dicta quos."
    }
]

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };
    return (
        <section className='faqs_sec'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="txt">
                            <h2 className='text-blue f-35 f500 mb-1'>Have a Question?</h2>
                            <p className='f-14 f300 text-light-gray'>Please complete form below and one of our team member will touch as soon as possible.</p>
                            <form>
                                <div className="name mb-3">
                                    <label htmlFor="name" className='mb-1 f-14 f500'>Full Name<span className='text-primary'>*</span></label>
                                    <input type="text" />
                                </div>
                                <div className="email mb-3">
                                    <label htmlFor="email" className='mb-1 f-14 f500'>Email Address<span className='text-primary'>*</span></label>
                                    <input type="email" />
                                </div>
                                <div className="phone mb-3">
                                    <label htmlFor="phone" className='mb-1 f-14 f500'>Mobile No.<span className='text-primary'>*</span></label>
                                    <input type="number" />
                                </div>
                                <div className="company mb-3">
                                    <label htmlFor="company" className='mb-1 f-14 f500'>Company</label>
                                    <input type="text" />
                                </div>
                                <div className="message mb-3">
                                    <label htmlFor="message" className='mb-1 f-14 f500'>Message<span className='text-primary'>*</span></label>
                                    <textarea id="message"></textarea>
                                    <button>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-5">
                            <div className="txt">
                                <h6 className='f-24 f500 text-black uppercase mb-0'>Faq</h6>
                            </div>
                            <div class="secondary_btn">
                                <a href='javascript:;'>Read More </a>
                            </div>
                        </div>
                        <div className="accordian">
                            {faqsData.map((content, index) => (
                                <div className="accordianItem py-3 border-bottom" key={index}>
                                    <div className="topBar d-flex align-items-center justify-content-between" onClick={() => handleToggle(index)}>
                                        <h4 className="f-18 f600 text-black mb-0">{content.title}</h4>
                                        <div className="icon">
                                            {openIndex === index ?
                                                <span className="f-32 f600">-</span> :
                                                <span className="f-32 f600">+</span>
                                            }
                                        </div>
                                    </div>
                                    {openIndex === index && (
                                        <div className="accordianBody">
                                            <p>{content.desc}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs