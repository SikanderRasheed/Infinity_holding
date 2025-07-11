import React from 'react'
import Topbar from '@/component/Topbar/Topbar'
import HomeHeader from '@/component/HomeHeader/HomeHeader'
import TrainingBanner from '@/component/TrainingBanner/TrainingBanner'
import Academy from '@/component/Academy/Academy'
import Footer from '@/component/Footer/Footer'

const Iso = () => {

    const bannerTitle = "ISO 9001:2015 quality management system"
    const pagesLink = ["Home", "Standards", "ISO 9001 Quality managment System"];

    // Academy Content 
    const listData = [
        {
            list: "ISO 9001:2015 helps Organisation to produce Desired Outcome"
        },
        {
            list: " ISO 9001:2015 ensures Ongoing Controls"
        },
        {
            list: "ISO 9001:2015 Enhance Customer Satisfaction by meeting Customer requirement"
        },
        {
            list: "Continual Improvement through ISO 9001:2015"
        },
        {
            list: " Process through PDCA (plan Do Check Act)"
        },
        {
            list: "QMS Certification also help to Increase Profitability"
        },
        {
            list: "ISO 9001:2015 help organization for avoidance of Risk"
        },
        {
            list: " QMS is Sustainable Approach of any Business"
        },
        {
            list: "ISO 9001:2015 Help Business, Government & Society."
        },
    ]

    const academy = {
        title: "INTRODUCTION OF ISO 9001:2015 CERTIFICATION",
        desc: <>
            <p>ISO 9001:2015 Quality Management System certification enables you to demonstrate your commitment to quality and customer satisfaction, as well as continuously improving your company’s operations. ISO 9001:2015 (QMS) will help you to continually monitor and manage quality across all operations. As the world’s most widely recognized quality management standard, it outlines ways to achieve, as well as benchmark, consistent performance and service. Adaption of ISO 9001:2015 should be planned Decision of any Organization Design & Implementation & time required is basically depend on the following factors:</p>
            <ul>
                <li>
                    Organizational Environment
                </li>
                <li>
                    Its Changing need
                </li>
                <li>
                    Its particular Objective
                </li>
                <li>
                    Products or Services in which organisation dealt with.
                </li>
                <li>
                    The Process adopted
                </li>
                <li>
                    Size & organizational Structure
                </li>
            </ul>
        </>,
        listTitle: "Benefit of ISO 9001:2015 Certification",
        listData: listData,
        isIso: true,
    }

    return (
        <>
            <Topbar />
            <HomeHeader />
            <TrainingBanner content={bannerTitle} pagesLinks={pagesLink} />
            <Academy content={academy} />
            <Footer />
        </>
    )
}

export default Iso