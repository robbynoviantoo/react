import React from 'react'

export const CTA = () => {
    return (
        <div className="w-full bg-gradient-to-t from-black via-gray-900 to-[#383838]">
            <div className='max-w-7xl mx-auto py-12 px-4'>
                <div className='flex flex-col items-center justify-center max-w-xl mx-auto gap-4 text-white'>
                    <h1 className='text-[clamp(1.8rem,4vw,2.5rem)] font-semibold text-center tracking-tight'>Customized answers designed for your requirements.</h1>
                    <p className='text-gray-400 text-center'>Custom strategies built to match your goals.</p>
                </div>
                <div className='flex gap-12 py-12'>
                    <img src="../cta/1.svg" alt="" />
                    <div className='flex flex-col justify-between'>
                        <img src="../cta/2.svg" alt="" />
                        <img src="../cta/3.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
