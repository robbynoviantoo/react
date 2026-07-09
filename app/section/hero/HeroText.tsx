import { DegularText } from '@/app/components/degular'
import React from 'react'

export const HeroText = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <div className='flex items-center justify-center gap-2 bg-white py-1 px-4 rounded-full shadow-sm'>
                <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                </span>
                <p className='text-[clamp(10px,2.5vw,1rem)] text-gray-600'>Connecting millions of professionals with leading companies worldwide</p>
            </div>
            <h1 className="text-center font-bold leading-tight max-w-2xl
               text-[clamp(3rem,5vw,4rem)]">
                <DegularText>
                    The trusted platform for hiring the best minds.
                </DegularText>
            </h1>
            <p className='text-[clamp(12px,2.5vw,1rem)] text-gray-600'>Empowering companies to connect with talent that drives success.</p>

            <button className='py-3 px-6 rounded-full bg-black text-white mt-4 cursor-pointer border shadow-md hover:shadow-lg'>Get a demo</button>
        </div>
    )
}
