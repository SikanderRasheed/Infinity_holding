import React from 'react'
import Service1 from "/images/service-1.jpeg"
import Service2 from "/images/service-2.jpeg"
import Service3 from "/images/service-3.jpeg"
import Service4 from "/images/service-4.jpeg"
import Service5 from "/images/service-5.jpeg"
import Service6 from "/images/service-6.jpeg"
import Service7 from "/images/service-7.jpeg"
import Service8 from "/images/service-8.jpeg"
import Service9 from "/images/service-9.jpeg"
import Service10 from "/images/service-10.jpeg"

// Service Content
const serviceContent = [
    {
        image: Service1,
        title: "ISO 9001 2015",
        desc: "Quality Management Systems What is ISO 9001:2015 Quality Management Systems? The ISO 9000 series of standards generalizes world experience of organization of works on efficient."
    },
    {
        image: Service2,
        title: "ISO 14001 2015",
        desc: "Environmental Management Systems What is ISO 14001:2015 Environmental Management Systems? ISO 14001:2015 is an international standard on Environmental Management Systems (EMS)."
    },
    {
        image: Service3,
        title: "ISO 45001 2018",
        desc: "Occupational Health and Safety Management Systems What is ISO 45001:2018 OH&S? ISO 45001 is an International Standard that specifies requirements for an occupational health and safety."
    },
    {
        image: Service4,
        title: "ISO 22000 2018",
        desc: "Food Safety Management Systems What is ISO 22000:2018 FSMS? ISO 22000 is the food safety management system that can be easily applicable to any organization in the food chain."
    },
    {
        image: Service5,
        title: "ISO 13485 2016",
        desc: "MEDICAL DEVICES QUALITY MANAGEMENT SYSTEM ISO 13485 is an official global standard that sets the requirements for medical device manufacturers."
    },
    {
        image: Service6,
        title: "ISO 27001:2013",
        desc: "Information Security Management Systems What is ISO 27001:2013 ISMS? ISO 27001 is the international standard which is recognized globally for managing risks to the security of information you"
    },
    {
        image: Service9,
        title: "ISO 22301:2019",
        desc: "The International Standard Organization created this as an international standard. ISO 22301 is a global standard that protects your company’s data from outside threats. It specifies the criteria for your firm to continue without interruption in the case of cyber or other data calamity."
    },
    {
        image: Service8,
        title: "ISO 14064-1",
        desc: "ISO 14064-1 certification provides a framework for measuring, reporting, and managing greenhouse gas (GHG) emissions at an organizational level, ensuring transparency and accuracy in emissions reduction."
    },
    {
        image: Service10,
        title: "ISO 50001:2018",
        desc: "ENERGY MANAGEMENT SYSTEM It is a standard of International Organization for Standardization (ISO). The guidelines codify internationally recognized quality practices for designing."
    },
    {
        image: Service7,
        title: "ISO 22716:2007",
        desc: "GOOD MANUFACTURING PRACTICES (GMP) The ISO 22716 is an international standard of Good Manufacturing Practices (GMP) as a cosmetics production enterprise."
    },
]

const StandardServices = () => {

    return (
        <section className='standard_services_sec'>
            <div className="container">
                <div className="row">
                    {serviceContent.map((data, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-12 mb-2 mb-lg-4">
                            <div className="card">
                                <div className="image">
                                    <img src={data.image} alt="Services" className='img-fluid' />
                                </div>
                                <div className="txt">
                                    <h3>{data.title}</h3>
                                    <p>{data.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StandardServices
