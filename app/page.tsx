import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import { Hero } from './section/hero/Hero'
import { About } from './section/about/About'
import { Feature } from './section/feature/Feature'
import { CTA } from './section/cta/CTA'
import { Footer } from './section/footer/Footer'

export const metadata: Metadata = {
  title: 'Olvera | Landing Page',
}

const Home = async () => {

  return (
    <>
      <Hero />
      <About />
      <Feature />
      <CTA />
      <Footer />
    </>
  )
}
export default Home