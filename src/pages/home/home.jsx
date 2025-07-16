import React from 'react'
import Topbar from '@/component/Topbar/Topbar'
import HomeHeader from '@/component/HomeHeader/HomeHeader'
import HomeBanner from '@/component/HomeBanner/HomeBanner'
import Accrediation from '@/component/Accrediation/Accrediation'
import AboutUs from '@/component/AboutUs/AboutUs'
import Testimonials from '@/component/Testimonials/Testimonials'
import Guide from '@/component/Guide/Guide'
import Faqs from '@/component/Faqs/Faqs'
import LatestNews from '@/component/LatestNews/LatestNews'
import Companies from '@/component/Companies/Companies'
import Footer from '@/component/Footer/Footer'

const home = () => {
    return (
        <>
            <Topbar />
            <HomeHeader />
            <HomeBanner />
            <Accrediation />
            {/* <AboutUs /> */}
            <Testimonials />
            <Guide />
            {/* <Faqs /> */}
            {/* <LatestNews /> */}
            {/* <Companies /> */}
            <Footer />
        </>
    )
}

export default home