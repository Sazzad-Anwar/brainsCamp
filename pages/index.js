import Head from 'next/head'
import { useState } from 'react'
import HeroSlider from '../Components/HeroSlider'
import NavBar from '../Components/Nav/NavBar'
import QuotationSection from '../Components/QuotationSection'
import Services from '../Components/Services'
import BusinessConsultingService from '../Components/BusinessConsultingService'
import WhyChooseUs from '../Components/WhyChooseUs'
import Testimonial from '../Components/Testimonial'
import PricingPackage from '../Components/PricingPackage'
import ClientComment from '../Components/ClientComment'

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
