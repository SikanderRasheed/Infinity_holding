import React from 'react'
import Topbar from '@/component/Topbar/Topbar'
import HomeHeader from '@/component/HomeHeader/HomeHeader'
import TrainingBanner from '@/component/TrainingBanner/TrainingBanner'
import Academy from '@/component/Academy/Academy'
import Footer from '@/component/Footer/Footer'

const Training = () => {

    const bannerTitle = "Academy"
    const pagesLink = ["Home", "Academy"];
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
        title: "Academy",
        desc: <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ea adipisci. Iste ducimus adipisci veritatis amet enim, itaque quisquam, sapiente alias repellat laboriosam nam accusamus est ab, exercitationem modi ratione?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ea adipisci. Iste ducimus adipisci veritatis amet enim, itaque quisquam, sapiente alias repellat laboriosam nam accusamus est ab, exercitationem modi ratione?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ea adipisci. Iste ducimus adipisci veritatis amet enim, itaque quisquam, sapiente alias repellat laboriosam nam accusamus est ab, exercitationem modi ratione?</p>
        </>,
        listTitle: "Training Topics",
        listData: listData,
        isIso: false,
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

export default Training
