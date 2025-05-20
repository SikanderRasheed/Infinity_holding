import React from 'react'
import Topbar from '@/component/Topbar/Topbar'
import HomeHeader from '@/component/HomeHeader/HomeHeader'
import InnerBanner from '@/component/InnerBanner/InnerBanner'
import Footer from '@/component/Footer/Footer'

const PersonalCertificate = () => {
    const bannerForm = true;

    return (
        <>
            <Topbar />
            <HomeHeader />
            <InnerBanner bannerForm={bannerForm} />
            <Footer />
        </>
    )
}

export default PersonalCertificate
