import { DegularText } from '@/app/components/degular'
import React from 'react'

export const FooterLink = () => {
    const FooterLink = [
        {
            title: "Solutions",
            list: [
                {
                    nama: "Edge Solution",
                    href: "#"
                },
                {
                    nama: "Tools Recruiting",
                    href: "#"
                },
                {
                    nama: "Hybrid Recruiting",
                    href: "#"
                },
                {
                    nama: "Data Security",
                    href: "#"
                },
            ]
        },
        {
            title: "Resources",
            list: [
                {
                    nama: "Documentation",
                    href: "#"
                },
                {
                    nama: "Case Studies",
                    href: "#"
                },
                {
                    nama: "Whitepapers",
                    href: "#"
                },
                {
                    nama: "Tutorials",
                    href: "#"
                },
            ]
        },
        {
            title: "Company",
            list: [
                {
                    nama: "About Us",
                    href: "#"
                },
                {
                    nama: "Careers",
                    href: "#"
                },
                {
                    nama: "Partnerships",
                    href: "#"
                },
                {
                    nama: "Events",
                    href: "#"
                },
            ]
        },
        {
            title: "Sosial Media",
            list: [
                {
                    nama: "LinkedIn",
                    href: "#"
                },
                {
                    nama: "Twitter",
                    href: "#"
                },
                {
                    nama: "Instagram",
                    href: "#"
                },
                {
                    nama: "Facebook",
                    href: "#"
                },
            ]
        }
    ]

    return (
        <div className='relative'>
            <div className="absolute inset-x-0 top-0 overflow-hidden h-56 w-[80%] mx-auto">
                <img
                    src="../footer/olvera.svg"
                    alt=""
                    className="w-full"
                />
            </div>
            <div className='relative pt-45'>
                <div className='flex justify-between pt-20 gap-20 bg-[#F5F8F6]'>
                    <div className='flex flex-col justify-between w-1/3'>
                        <div className='flex gap-1 items-center'>
                            <img src="../footer/logo.svg" alt="" width={50} />
                            <h1 className='font-semibold text-[clamp(1rem,2vw,1.9rem)]'><DegularText>Olvera</DegularText></h1>
                        </div>
                        <div className='text-gray-400'>Olvera Hiring Platform 2025.<br />All right reserved</div>
                    </div>
                    <div className='w-2/3 md:flex gap-4 justify-between'>
                        {FooterLink.map((footer, index) => {
                            return (
                                <div key={index}>
                                    <h1 className='font-semibold mb-5'>{footer.title}</h1>
                                    <ul>
                                        {footer.list.map((list, index) => {
                                            return (
                                                <li key={index} className='mt-3'>
                                                    <a href={list.href}>{list.nama}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
