import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import { Hero } from './section/hero/Hero'
import { About } from './section/about/About'

export const metadata: Metadata = {
  title: 'Ancok',
}

const Home = async () => {

  return (
    <>
    {/* <Hero /> */}
    <About />
    </>
  )
}
export default Home