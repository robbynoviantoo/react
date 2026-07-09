import React from 'react'

export const HeroCard = () => {
    return (
        <>
            {/* dekstop */}
            <div className="md:flex gap-4 py-12 hidden ">
                <div className="w-2/3 rounded-2xl h-[578px] bg-[url(/images/hero-1.png)] bg-cover bg-center">
                    {/*  */}
                </div>

                <div className="relative w-1/3 h-[578px] overflow-hidden rounded-2xl bg-[url('/images/hero-2.png')] bg-cover bg-center">
                    {/* Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 via-black/80 to-transparent pointer-events-none" />

                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                        <p className="text-white text-xl font-semibold">
                            Smarter hiring,
                        </p>
                        <p className="text-white/80 text-sm">
                            Faster results.
                        </p>
                    </div>
                </div>
            </div>

            <div className="md:hidden py-12">
                <div className="relative h-[620px]">
                    {/* Card belakang */}
                    <div className="absolute left-0 top-0 w-[85%] h-[480px] rounded-2xl bg-[url('/images/hero-1.png')] bg-cover bg-center shadow-lg" />

                    {/* Card depan */}
                    <div className="absolute right-0 top-24 w-[48%] h-[420px] overflow-hidden rounded-2xl bg-[url('/images/hero-2.png')] bg-cover bg-center shadow-xl">
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 via-black/80 to-transparent" />

                        <div className="absolute bottom-6 left-5 z-10">
                            <p className="text-white font-semibold">
                                Smarter hiring,
                            </p>
                            <p className="text-white/80 text-sm">
                                Faster results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}