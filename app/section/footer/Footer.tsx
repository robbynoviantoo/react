import { GetADemoButton } from '@/app/components/getademo'
import React from 'react'
import { FooterLink } from './FooterLink'

export const Footer = () => {
    return (
        <div className="w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('../footer/bg.svg')" }}>
            <div className='max-w-7xl mx-auto py-20 px-4'>
                <div className='flex flex-col items-center justify-center max-w-xl mx-auto gap-4'>
                    <img src="../footer/logo.svg" alt="" />
                    <h1 className='text-[clamp(1.8rem,4vw,2.5rem)] font-semibold text-center tracking-tight'>Begin hiring smarter with our trusted platform</h1>
                    <p className='text-gray-600 text-center'>Unlock growth opportunities through seamless hiring powered by trust.</p>
                    <GetADemoButton href='#' text='Get Started' />
                </div>
                <FooterLink />
            </div>
        </div>
    )
}
