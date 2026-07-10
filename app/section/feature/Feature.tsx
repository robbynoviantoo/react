import { DegularText } from '@/app/components/degular'
import { PingAnimate } from '@/app/components/ping-animate'
import { featuresData } from '@/app/constants/features'
import React from 'react'

export const Feature = () => {
    return (
        <div className='w-full'>
            <div className='max-w-7xl mx-auto py-20 px-4'>
                <div className='flex flex-col items-center justify-center max-w-xl mx-auto gap-4'>
                    <h1 className='text-[clamp(1.8rem,4vw,2.5rem)] font-semibold text-center tracking-tight'>Customized answers designed for your requirements.</h1>
                    <p className='text-gray-600 text-center'>Custom strategies built to match your goals.</p>
                </div>
                {featuresData.map((feature, index) => (
                    <div className='flex justify-between gap-32 pt-20' key={index}>
                        <div className='flex flex-col w-1/2 gap-2 border-b border-gray-200 '>
                            <span className='bg-white py-0.5 px-3 w-fit rounded-2xl flex items-center gap-2'>
                                <PingAnimate />
                                <DegularText>{feature.nama}</DegularText></span>
                            <h1 className='text-[clamp(1.5rem,4vw,2rem)]'><DegularText className='font-semibold'>{feature.title}</DegularText></h1>
                            <p>{feature.text}</p>
                        </div>
                        <img src={`../${feature.img}`} alt={feature.title} className='select-none' draggable={false} />
                    </div>
                ))}
            </div>
        </div>
    )
}
