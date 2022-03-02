import Head from 'next/head'
import HeroSlider from '../Components/HeroSlider'
import NavBar from '../Components/Nav/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>BrainsCamp | Home</title>
      </Head>
      <main>
        <NavBar />
        <div className='dark:bg-dark normal-transition'>
          <HeroSlider />
        </div>
      </main>
    </>
  )
}
