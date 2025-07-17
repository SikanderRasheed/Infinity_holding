import React from 'react'
import Topbar from '@/component/Topbar/Topbar'
import HomeHeader from '@/component/HomeHeader/HomeHeader'
import HomeBanner from '@/component/HomeBanner/HomeBanner'
import StandardServices from '@/component/StandardServices/StandardServices'
import Footer from '@/component/Footer/Footer'

const standards = () => {
    const bannerContent = {
        title: "Standards Services"
    }
    return (
        <>
            <Topbar />
            <HomeHeader />
            <HomeBanner content={bannerContent} />
            <StandardServices />
            <Footer />
        </>
    )
}

export default standards
