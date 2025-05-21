import React from 'react'
import Topbar from '@/component/Topbar/Topbar'
import HomeHeader from '@/component/HomeHeader/HomeHeader'
import InspectionBanner from '../../component/InspectionBanner/InspectionBanner'

const inspection = () => {
    return (
        <>
            <Topbar />
            <HomeHeader />
            <InspectionBanner />
        </>
    )
}

export default inspection