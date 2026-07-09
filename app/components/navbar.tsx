'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Navlink } from '../constants/nav-link'
import { DegularText } from './degular'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className=' w-full py-2  text-black'>
            <div className='max-w-7xl px-4 mx-auto'>
                <div className='hidden max-w-7xl mx-auto md:flex justify-between items-center'>
                    <div className='flex items-center bg gap-20'>
                        <Link href={'/'} className='flex items-center gap-2'>
                            <img src="/logo.svg" alt="logo" />
                            <DegularText className='text-3xl font-semibold'>Olvera</DegularText>
                        </Link>
                        <ul className='flex gap-10'>
                            {Navlink.map((navlink) => (
                                <li key={navlink.nama}>
                                    <Link href={navlink.link}>{navlink.nama}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Link href={'/sign-in'}>Sign In</Link>
                        <Link className='border px-6 py-2 rounded-full border-[#E2E2E2]' href={'/login'}>Contact</Link>
                    </div>
                </div>
                <div className='flex  max-w-7xl mx-auto md:hidden justify-between items-center'>
                    <div>LOGO</div>
                    <button className='z-52 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
                {/* Overlay background */}
                <div
                    className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Menu Drawer */}
                <div className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='p-6'>
                        <ul className='flex flex-col gap-6 mt-16'>
                            {Navlink.map((navlink) => (
                                <li key={navlink.nama}>
                                    <Link
                                        href={navlink.link}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-800 hover:text-blue-600 block"
                                    >
                                        {navlink.nama}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar