import React from 'react'
import { DM_Serif_Text } from 'next/font/google'

const dmSerif = DM_Serif_Text({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
})

const Navbar = () => {
    return (
        <header className="relative z-30 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <div className={`${dmSerif.className} text-2xl font-bold tracking-wide`}>
                Vaffiora
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                <a href="#" className="hover:opacity-80 transition-opacity">Home</a>
                <a href="#" className="hover:opacity-80 transition-opacity">Coffe</a>
                <a href="#" className="hover:opacity-80 transition-opacity">Gelato</a>
                <a href="#" className="hover:opacity-80 transition-opacity">Seasonal Menu</a>
                <a href="#" className="hover:opacity-80 transition-opacity">About</a>
                <a href="#" className="hover:opacity-80 transition-opacity">Contact</a>
            </nav>

            <button className="bg-[#5F3E2D] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#4a3023] transition-colors flex items-center gap-2">
                Order Now
                <span className="text-lg">→</span>
            </button>
        </header>
    )
}

export default Navbar
