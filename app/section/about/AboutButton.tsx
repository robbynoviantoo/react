'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export const AboutButton = () => {
    const [isActive, setIsActive] = useState('Olvera')

    const aboutNav = [
        {
            nama: 'Olvera',
            link: '#',
            content: [
                {
                    img: '/about/1-1.svg',
                    title: 'Automated Interview Scheduling',
                    desc: 'Save time by automating interview scheduling and coordination with candidates.',
                },
                {
                    img: '/about/1-2.svg',
                    title: 'Candidate Management',
                    desc: 'Track and organize candidates efficiently throughout the hiring process.',
                },
                {
                    img: '/about/1-3.svg',
                    title: 'Analytics Dashboard',
                    desc: 'Monitor recruitment performance with real-time analytics.',
                },
            ],
        },
        {
            nama: 'Agentic AI',
            link: '#',
            content: [
                {
                    img: '/agentic-1.png',
                    title: 'AI Assistant',
                    desc: 'Let AI automate repetitive recruitment tasks.',
                },
                {
                    img: '/agentic-2.png',
                    title: 'Smart Suggestions',
                    desc: 'Receive recommendations based on hiring data.',
                },
                {
                    img: '/agentic-3.png',
                    title: 'Workflow Automation',
                    desc: 'Automate complex hiring workflows with AI.',
                },
            ],
        },
        {
            nama: 'ATS',
            link: '#',
            content: [],
        },
        {
            nama: 'CRM',
            link: '#',
            content: [],
        },
        {
            nama: 'Scheduling',
            link: '#',
            content: [],
        },
    ]
    const activeContent = aboutNav.find(
        (item) => item.nama === isActive
    )


    return (
        <div className='flex flex-col gap-12'>
            <div className='flex flex-col md:flex-row items-end justify-between gap-10'>
                <div className='w-full md:w-1/2 max-w-md flex flex-col gap-2'>
                    <h1 className='text-[clamp(2rem,5vw,2.5rem)] font-semibold'>Powerful tools built to perform seamlessly.</h1>
                    <p>Boost productivity with connected, efficient solutions.</p>
                </div>
                <div className='w-2/3 mx-auto md:mx-0  md:w-1/2 bg-[#848484]/4 rounded-md'>
                    <ul className='flex gap-2 justify-between p-1'>
                        {aboutNav.map((item) => {
                            return (
                                <li className='flex-1' key={item.nama}>
                                    <Link
                                        href={item.link}
                                        onClick={() => setIsActive(item.nama)}
                                        className={`flex w-full items-center justify-center ${isActive === item.nama ? 'bg-white text-black shadow-sm rounded-md' : 'bg-transparent text-gray-600'} py-2`}
                                    >{item.nama}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className='flex flex-col md:flex-row p-4 md:p-0 justify-between gap-4 md:gap-12'>
                {activeContent?.content.map((item) => (
                    <div key={item.title} className=' flex-1 '>
                        <div className='flex flex-col gap-2 bg-white h-[400px] w-full rounded-2xl relative overflow-hidden'>
                            <img src={`../${item.img}`} alt={item.title} className='select-none' draggable={false} />
                            <span className='absolute bottom-6 left-6 right-6 z-10 text-[clamp(1rem,2vw,1rem)]'>{item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
