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
                    img: '/olvera-1.png',
                    title: 'Automated Interview Scheduling',
                    desc: 'Save time by automating interview scheduling and coordination with candidates.',
                },
                {
                    img: '/olvera-2.png',
                    title: 'Candidate Management',
                    desc: 'Track and organize candidates efficiently throughout the hiring process.',
                },
                {
                    img: '/olvera-3.png',
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
        <div className='flex flex-col gap-10'>
            <div className='flex items-end justify-between gap-10'>
                <div className='w-1/2 max-w-md flex flex-col gap-2'>
                    <h1 className='text-[clamp(2rem,5vw,2.5rem)] font-semibold'>Powerful tools built to perform seamlessly.</h1>
                    <p>Boost productivity with connected, efficient solutions.</p>
                </div>
                <div className='w-1/2 bg-[#848484]/4 rounded-md'>
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
            <div className='flex justify-between '>
                {activeContent?.content.map((item) => (
                    <div key={item.title}><img src={item.img} alt={item.title} />
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p></div>
                ))}
            </div>
        </div>
    )
}
