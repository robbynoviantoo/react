"use client"
import React, { useEffect, useRef, useState } from 'react'
import { DM_Serif_Text } from 'next/font/google'
import gsap from 'gsap'

const dmSerif = DM_Serif_Text({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
})

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const characterRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Parallax Effect on Scroll
        const handleScroll = () => {
            const textElement = textRef.current
            if (textElement) {
                const scrolled = window.scrollY
                gsap.to(textElement, {
                    y: scrolled * 0.35,
                    opacity: Math.max(0, 1 - scrolled / 500),
                    duration: 0.5,
                    ease: 'power1.out',
                    overwrite: 'auto'
                })
            }
        }

        // Magnetic Effect on Mouse Move
        const handleMouseMove = (e: MouseEvent) => {
            const character = characterRef.current
            if (!character) return

            const rect = character.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            const distX = e.clientX - centerX
            const distY = e.clientY - centerY

            // Restrict Y movement to prevent lifting off the bottom of the screen
            const strengthX = 0.015
            const strengthY = 0.015

            gsap.to(character, {
                x: distX * strengthX,
                y: Math.max(-10, distY * strengthY),
                duration: 0.6,
                ease: 'power2.out',
                overwrite: 'auto'
            })
        }

        // Reset character position when mouse leaves hero section
        const handleMouseLeave = () => {
            const character = characterRef.current
            if (!character) return
            gsap.to(character, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                overwrite: 'auto'
            })
        }

        window.addEventListener('scroll', handleScroll)

        const hero = heroRef.current
        if (hero) {
            hero.addEventListener('mousemove', handleMouseMove)
            hero.addEventListener('mouseleave', handleMouseLeave)
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (hero) {
                hero.removeEventListener('mousemove', handleMouseMove)
                hero.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [])

    const [isHover, setIsHover] = useState(false);

    return (
        <div
            ref={heroRef}
            className="relative flex-1 flex flex-col justify-between overflow-hidden min-h-[calc(100vh-92px)]"
        >
            {/* Hero Main Content */}
            <div className="relative flex-1 flex flex-col justify-start items-center">
                {/* Big Title */}
                <h1 className={`${dmSerif.className} text-[26vw] md:text-[17.5vw] font-normal leading-none select-none md:text-center tracking-tight z-10`}>
                    Vaffiora
                </h1>

                {/* Subtitle / Description */}
                <div
                    ref={textRef}
                    className="w-full max-w-7xl px-6 md:absolute md:top-[40%] z-50 mt-4 md:mt-0 will-change-transform"
                >
                    <div
                        className="inline-block"
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <p
                            className={`max-w-[280px] relative z-100 text-sm md:text-md leading-relaxed cursor-pointer ${isHover ? "text-white" : "text-[#5F3E2D]"
                                }`}
                        >
                            Every cup is carefully crafted using premium beans to create a smooth and unforgettable coffee experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Background Image (Historic building) */}
            <div className="absolute bottom-0 left-0 w-full h-[50vh] z-0 overflow-hidden">
                <img
                    src="/coffe/bg.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                    style={{
                        objectPosition: "center 20%",
                    }}
                />
            </div>

            {/* Foreground People Image */}
            <div
                ref={characterRef}
                className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[55vh] sm:h-[70vh] md:h-[65vh] lg:h-[70vh] xl:h-[65vh] flex justify-center items-end z-10 pointer-events-none will-change-transform"
            >
                <img
                    src="/coffe/1.png"
                    alt="People enjoying coffee"
                    className="h-[50vh] sm:h-[70vh] md:h-full w-auto max-w-none md:max-w-full object-contain object-bottom select-none scale-105 origin-bottom"
                    draggable={false}
                />
            </div>
            <div className={`fixed z-30 inset-0 bg-black/30 backdrop-blur-md transition-all duration-300 ${isHover ? "opacity-100 pointer-events-none" : "opacity-0 pointer-events-none"}`} />
        </div>

    )
}

export default Hero
