import React from 'react'
import Topbar from '@/component/Topbar/Topbar'
import HomeHeader from '@/component/HomeHeader/HomeHeader'
import InspectionBanner from '@/component/InspectionBanner/InspectionBanner'
import InspectionServices from '@/component/InspectionServices/InspectionServices'
import InspectionQuality from '@/component/InspectionQuality/InspectionQuality'
import InspectionKnowledge from '@/component/InspectionKnowledge/InspectionKnowledge'
import Testimonials from '@/component/Testimonials/Testimonials'
import LatestNews from '@/component/LatestNews/LatestNews'
import Footer from '@/component/Footer/Footer'
import BrandsSlider from '@/component/BrandsSlider/BrandsSlider'

const inspection = () => {
    return (
        <>
            <Topbar />
            <HomeHeader />
            <InspectionBanner />
            <InspectionServices />
            <InspectionQuality />
            <InspectionKnowledge />
            <Testimonials />
            <LatestNews />
            <BrandsSlider />
            <Footer />
        </>
    )
}

export default inspection