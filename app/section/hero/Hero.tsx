import React from 'react'
import { HeroText } from './HeroText'
import { HeroCard } from './HeroCard'
import { HeroBrands } from './HeroBrands'

export const Hero = () => {
    return (
        <div className='border-b border-gray-300 px-4 py-12'>
            <div className='max-w-7xl mx-auto '>
                <HeroText />
                <HeroCard />
                <HeroBrands />
            </div>
        </div>
    )
}
