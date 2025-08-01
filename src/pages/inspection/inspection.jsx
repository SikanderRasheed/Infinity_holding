import React from 'react'
import Topbar from '@/component/Topbar/Topbar'
import HomeHeader from '@/component/HomeHeader/HomeHeader'
import HomeBanner from '@/component/HomeBanner/HomeBanner'
import InspectionContent from '@/component/InspectionContent/InspectionContent'
import Footer from '@/component/Footer/Footer'

const inspection = () => {
    // Banner Content
    const bannerContent = {
        title: "INSPECTION",
        desc: "Independent Third-Party Inspection Services You Can Trust"
    }
    return (
        <>
            <Topbar />
            <HomeHeader />
            <HomeBanner content={bannerContent} />
            <InspectionContent />
            <Footer />
        </>
    )
}

export default inspection