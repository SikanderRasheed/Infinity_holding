import React from 'react'
import Topbar from '@/component/Topbar/Topbar'
import HomeHeader from '@/component/HomeHeader/HomeHeader'
import TrainingBanner from '@/component/TrainingBanner/TrainingBanner'
import AboutUsISO from '../../component/AboutUsISO/AboutUsISO'
import AboutDownload from '../../component/AboutDownload/AboutDownload'

const about = () => {
    const bannerTitle = "About US"
    const pagesLink = ["Home -", "About"];
    return (
        <>
            <Topbar />
            <HomeHeader />
            <TrainingBanner content={bannerTitle} pagesLinks={pagesLink} />
            <AboutUsISO />
            <AboutDownload />
        </>
    )
}

export default about
