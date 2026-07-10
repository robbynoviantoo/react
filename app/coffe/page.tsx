import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Dancok from './Dancok'

const page = () => {
    return (
        <div className="relative min-h-screen bg-[#F5F8F6] text-[#5F3E2D] flex flex-col justify-between overflow-x-hidden">
            <Navbar />
            <Hero />
            <Dancok />
        </div>
    )
}

export default page