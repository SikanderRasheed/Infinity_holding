import React from 'react'
import Topbar from '@/component/Topbar/Topbar'
import HomeHeader from '@/component/HomeHeader/HomeHeader'
import TrainingBanner from '@/component/TrainingBanner/TrainingBanner'
import Academy from '@/component/Academy/Academy'
import Footer from '@/component/Footer/Footer'

const Iso = () => {

    const bannerTitle = "ISO 9001 Quality Management System"
    const pagesLink = ["Home", "Standards", "ISO 9001 Quality managment System"];

    // Academy Content 
    const listData = [
        {
            list: "Auditor/Lead Auditor course on ISO 13485:2016 Medical Devices Quality Management Systems (MDQMS)"
        },
        {
            list: "Auditor/Lead Auditor course on ISO 13485:2016 Medical Devices Quality Management Systems (MDQMS)"
        },
        {
            list: "Auditor/Lead Auditor course on ISO 13485:2016 Medical Devices Quality Management Systems (MDQMS)"
        },
        {
            list: "Auditor/Lead Auditor course on ISO 13485:2016 Medical Devices Quality Management Systems (MDQMS)"
        },
        {
            list: "Auditor/Lead Auditor course on ISO 13485:2016 Medical Devices Quality Management Systems (MDQMS)"
        },
        {
            list: "Auditor/Lead Auditor course on ISO 13485:2016 Medical Devices Quality Management Systems (MDQMS)"
        },
    ]

    const academy = {
        title: "ISO 9001 Quality Management System",
        desc: <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ea adipisci. Iste ducimus adipisci veritatis amet enim, itaque quisquam, sapiente alias repellat laboriosam nam accusamus est ab, exercitationem modi ratione?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ea adipisci. Iste ducimus adipisci veritatis amet enim, itaque quisquam, sapiente alias repellat laboriosam nam accusamus est ab, exercitationem modi ratione?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ea adipisci. Iste ducimus adipisci veritatis amet enim, itaque quisquam, sapiente alias repellat laboriosam nam accusamus est ab, exercitationem modi ratione?</p>
        </>,
        listTitle: "Training Topics",
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