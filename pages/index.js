import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState } from 'react'
const HeroSlider = dynamic(() => import('../Components/HeroSlider'))
const NavBar = dynamic(() => import('../Components/Nav/NavBar'))
const QuotationSection = dynamic(() => import('../Components/QuotationSection'))
const Services = dynamic(() => import('../Components/Services'))
const BusinessConsultingService = dynamic(() => import('../Components/BusinessConsultingService'))
const WhyChooseUs = dynamic(() => import('../Components/WhyChooseUs'))
const Testimonial = dynamic(() => import('../Components/Testimonial'))
const PricingPackage = dynamic(() => import('../Components/PricingPackage'))
const ClientComment = dynamic(() => import('../Components/ClientComment'))

export default function Home() {

  const [navBarHeight, setNavBarHeight] = useState(0)

  return (
    <>
      <Head>
        <title>BrainsCamp | Home</title>
      </Head>
      <main className=''>
        <NavBar setNavBarHeight={setNavBarHeight} />
        <div className='dark:bg-dark normal-transition border-b border-transparent dark:border-[#243763]'>
          <HeroSlider navBarHeight={navBarHeight} />
        </div>
        <div className='dark:bg-dark normal-transition border-b border-transparent border-purple-400 dark:border-[#243763]'>
          <Services />
        </div>
        <div className='dark:bg-gray-700 bg-darkLight normal-transition border-b border-transparent border-purple-400 dark:border-[#243763]'>
          <QuotationSection navBarHeight={navBarHeight} />
        </div>
        <div className='dark:bg-dark bg-white normal-transition border-b border-transparent border-purple-400 dark:border-[#243763]'>
          <BusinessConsultingService />
        </div>
        <div className='dark:bg-dark bg-white normal-transition border-b border-transparent border-purple-400 dark:border-[#243763]'>
          <WhyChooseUs />
        </div>
        <div className='dark:bg-dark bg-darkLight normal-transition border-b border-transparent border-purple-400 dark:border-[#243763]'>
          <Testimonial />
        </div>
        <div className='dark:bg-dark bg-white normal-transition border-b border-transparent border-purple-400 dark:border-[#243763]'>
          <PricingPackage />
        </div>
        <div className='dark:bg-dark bg-darkLight normal-transition border-b border-transparent border-purple-400 dark:border-[#243763]'>
          <ClientComment />
        </div>
      </main>
    </>
  )
}
