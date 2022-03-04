import Head from 'next/head'
import HeroSlider from '../Components/HeroSlider'
import NavBar from '../Components/Nav/NavBar'
import QuotationSection from '../Components/QuotationSection'
import Services from '../Components/Services'

export default function Home() {
  return (
    <>
      <Head>
        <title>BrainsCamp | Home</title>
      </Head>
      <main className='snap-y snap-mandatory'>
        <NavBar />
        <div className='dark:bg-dark normal-transition snap-center'>
          <HeroSlider />
          <Services />
          <QuotationSection />
        </div>
      </main>
    </>
  )
}
